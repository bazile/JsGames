<Query Kind="Program">
  <NuGetReference>AngleSharp</NuGetReference>
  <Namespace>AngleSharp.Html.Parser</Namespace>
  <Namespace>System.Net</Namespace>
  <Namespace>System.Net.Http</Namespace>
  <Namespace>System.Text.Json</Namespace>
  <Namespace>System.Threading.Tasks</Namespace>
  <Namespace>System.Text.Json.Serialization</Namespace>
  <RemoveNamespace>System.Collections</RemoveNamespace>
  <RemoveNamespace>System.Data</RemoveNamespace>
  <RemoveNamespace>System.Diagnostics</RemoveNamespace>
  <RemoveNamespace>System.Reflection</RemoveNamespace>
  <RemoveNamespace>System.Transactions</RemoveNamespace>
</Query>

async Task Main()
{
	string html = await DownloadHtml();
	
	var capitals = new List<CapitalInfo>();
	var document = new HtmlParser().ParseDocument(html);
	foreach (var elTable in document.QuerySelectorAll("table.wikitable"))
	{
		foreach (var elRow in elTable.QuerySelectorAll("tbody tr"))
		{
			var cells = elRow.QuerySelectorAll("td");
			if (cells.Length != 3) continue;
			
			var capital = new CapitalInfo()
			{
				Country = Trim(cells[1].TextContent),
				Capital = Trim(cells[2].TextContent)
			};
			capitals.Add(capital);
		}
	}
	
	capitals.RemoveAll(c => c.Capital.Length == 0);
	//capitals.Sort((x,y) => x.Country.CompareTo(y.Country));
	capitals.SortBy(c => c.Country);

    //capitals.Dump();
    JsonSerializerOptions jso = new JsonSerializerOptions();
    jso.WriteIndented = true;
    jso.Encoder = System.Text.Encodings.Web.JavaScriptEncoder.UnsafeRelaxedJsonEscaping;
    JsonSerializer.Serialize(capitals, jso).Dump();
}

class CapitalInfo
{
    [JsonPropertyName("country")]
	public required string Country { get; init; }
    [JsonPropertyName("capital")]
	public required string Capital { get; init; }
}

string Trim(string text)
{
	if (text.Contains("Официальной столицы нет")) return "";
	return Regex.Replace(text, @"\[\d+\]", "").Trim();
}

async Task<string> DownloadHtml(bool force = false)
{
	string cachedPath = Path.Combine(Path.GetTempPath(), "wikipedia-capitals.html");
	if (!force && File.Exists(cachedPath))
	{
		return await File.ReadAllTextAsync(cachedPath);
	}

	const string address = "https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D1%81%D1%82%D0%BE%D0%BB%D0%B8%D1%86_%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2";
	using var handler = new HttpClientHandler() { AutomaticDecompression = DecompressionMethods.All };
	using var httpClient = new HttpClient(handler);
	httpClient.DefaultRequestHeaders.Add("User-Agent", "LINQPad");
	string html = await httpClient.GetStringAsync(address);
	
	await File.WriteAllTextAsync(cachedPath, html);
	
	return html;
}

static class X
{
	public static void SortBy<T,U>(this List<T> list, Func<T, U> keySelector)
	{
		T[] values = new T[list.Count];
		list.CopyTo(0, values, 0, values.Length);
		
		U[] keys = new U[list.Count];
		for (int i = 0; i < values.Length; i++)
		{
			keys[i] = keySelector(values[i]);
		}
		
		Array.Sort(keys, values);
		list.Clear();
		list.AddRange(values);
	}
}
