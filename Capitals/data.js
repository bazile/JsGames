const capitals = [
  {
    "country": "Австралия",
    "capital": "Канберра"
  },
  {
    "country": "Австрия",
    "capital": "Вена"
  },
  {
    "country": "Азад Кашмир",
    "capital": "Музаффарабад"
  },
  {
    "country": "Азербайджан",
    "capital": "Баку"
  },
  {
    "country": "Албания",
    "capital": "Тирана"
  },
  {
    "country": "Алжир",
    "capital": "Алжир"
  },
  {
    "country": "Ангола",
    "capital": "Луанда"
  },
  {
    "country": "Андорра",
    "capital": "Андорра-ла-Велья"
  },
  {
    "country": "Антигуа и Барбуда",
    "capital": "Сент-Джонс"
  },
  {
    "country": "Аргентина",
    "capital": "Буэнос-Айрес"
  },
  {
    "country": "Армения",
    "capital": "Ереван"
  },
  {
    "country": "Багамские Острова",
    "capital": "Нассау"
  },
  {
    "country": "Бангладеш",
    "capital": "Дакка"
  },
  {
    "country": "Барбадос",
    "capital": "Бриджтаун"
  },
  {
    "country": "Бахрейн",
    "capital": "Манама"
  },
  {
    "country": "Белиз",
    "capital": "Бельмопан"
  },
  {
    "country": "Белоруссия",
    "capital": "Минск"
  },
  {
    "country": "Бельгия",
    "capital": "Брюссель"
  },
  {
    "country": "Бенин",
    "capital": "Порто-Ново"
  },
  {
    "country": "Болгария",
    "capital": "София"
  },
  {
    "country": "Боливия",
    "capital": "Сукре"
  },
  {
    "country": "Босния и Герцеговина",
    "capital": "Сараево"
  },
  {
    "country": "Ботсвана",
    "capital": "Габороне"
  },
  {
    "country": "Бразилия",
    "capital": "Бразилиа"
  },
  {
    "country": "Бруней",
    "capital": "Бандар-Сери-Бегаван"
  },
  {
    "country": "Буркина-Фасо",
    "capital": "Уагадугу"
  },
  {
    "country": "Бурунди",
    "capital": "Гитега"
  },
  {
    "country": "Бутан",
    "capital": "Тхимпху"
  },
  {
    "country": "Вануату",
    "capital": "Порт-Вила"
  },
  {
    "country": "Ватикан",
    "capital": "Ватикан"
  },
  {
    "country": "Великобритания",
    "capital": "Лондон"
  },
  {
    "country": "Венгрия",
    "capital": "Будапешт"
  },
  {
    "country": "Венесуэла",
    "capital": "Каракас"
  },
  {
    "country": "Восточный Тимор",
    "capital": "Дили"
  },
  {
    "country": "Вьетнам",
    "capital": "Ханой"
  },
  {
    "country": "Габон",
    "capital": "Либревиль"
  },
  {
    "country": "Гаити",
    "capital": "Порт-о-Пренс"
  },
  {
    "country": "Гайана",
    "capital": "Джорджтаун"
  },
  {
    "country": "Гамбия",
    "capital": "Банжул"
  },
  {
    "country": "Гана",
    "capital": "Аккра"
  },
  {
    "country": "Гватемала",
    "capital": "Гватемала"
  },
  {
    "country": "Гвинея",
    "capital": "Конакри"
  },
  {
    "country": "Гвинея-Бисау",
    "capital": "Бисау"
  },
  {
    "country": "Германия",
    "capital": "Берлин"
  },
  {
    "country": "Гондурас",
    "capital": "Тегусигальпа"
  },
  {
    "country": "Государство Палестина",
    "capital": "Рамалла"
  },
  {
    "country": "Гренада",
    "capital": "Сент-Джорджес"
  },
  {
    "country": "Греция",
    "capital": "Афины"
  },
  {
    "country": "Грузия",
    "capital": "Тбилиси"
  },
  {
    "country": "Дания",
    "capital": "Копенгаген"
  },
  {
    "country": "Джибути",
    "capital": "Джибути"
  },
  {
    "country": "Доминика",
    "capital": "Розо"
  },
  {
    "country": "Доминиканская Республика",
    "capital": "Санто-Доминго"
  },
  {
    "country": "ДР Конго",
    "capital": "Киншаса"
  },
  {
    "country": "Египет",
    "capital": "Каир"
  },
  {
    "country": "Замбия",
    "capital": "Лусака"
  },
  {
    "country": "Зимбабве",
    "capital": "Хараре"
  },
  {
    "country": "Израиль",
    "capital": "Иерусалим"
  },
  {
    "country": "Индия",
    "capital": "Дели (Нью-Дели)"
  },
  {
    "country": "Индонезия",
    "capital": "Джакарта"
  },
  {
    "country": "Иордания",
    "capital": "Амман"
  },
  {
    "country": "Ирак",
    "capital": "Багдад"
  },
  {
    "country": "Иран",
    "capital": "Тегеран"
  },
  {
    "country": "Ирландия",
    "capital": "Дублин"
  },
  {
    "country": "Исландия",
    "capital": "Рейкьявик"
  },
  {
    "country": "Испания",
    "capital": "Мадрид"
  },
  {
    "country": "Италия",
    "capital": "Рим"
  },
  {
    "country": "Йемен",
    "capital": "Сана"
  },
  {
    "country": "Кабо-Верде",
    "capital": "Прая"
  },
  {
    "country": "Казахстан",
    "capital": "Астана"
  },
  {
    "country": "Камбоджа",
    "capital": "Пномпень"
  },
  {
    "country": "Камерун",
    "capital": "Яунде"
  },
  {
    "country": "Канада",
    "capital": "Оттава"
  },
  {
    "country": "Катар",
    "capital": "Доха"
  },
  {
    "country": "Кения",
    "capital": "Найроби"
  },
  {
    "country": "Кипр",
    "capital": "Никосия"
  },
  {
    "country": "Киргизия",
    "capital": "Бишкек"
  },
  {
    "country": "Кирибати",
    "capital": "Южная Тарава (Баирики)"
  },
  {
    "country": "Китай",
    "capital": "Пекин"
  },
  {
    "country": "Китайская Республика",
    "capital": "Тайбэй"
  },
  {
    "country": "КНДР",
    "capital": "Пхеньян"
  },
  {
    "country": "Колумбия",
    "capital": "Богота"
  },
  {
    "country": "Коморы",
    "capital": "Морони"
  },
  {
    "country": "Коста-Рика",
    "capital": "Сан-Хосе"
  },
  {
    "country": "Кот-д’Ивуар",
    "capital": "Ямусукро"
  },
  {
    "country": "Куба",
    "capital": "Гавана"
  },
  {
    "country": "Кувейт",
    "capital": "Эль-Кувейт"
  },
  {
    "country": "Лаос",
    "capital": "Вьентьян"
  },
  {
    "country": "Латвия",
    "capital": "Рига"
  },
  {
    "country": "Лесото",
    "capital": "Масеру"
  },
  {
    "country": "Либерия",
    "capital": "Монровия"
  },
  {
    "country": "Ливан",
    "capital": "Бейрут"
  },
  {
    "country": "Ливия",
    "capital": "Триполи"
  },
  {
    "country": "Литва",
    "capital": "Вильнюс"
  },
  {
    "country": "Лихтенштейн",
    "capital": "Вадуц"
  },
  {
    "country": "Люксембург",
    "capital": "Люксембург"
  },
  {
    "country": "Маврикий",
    "capital": "Порт-Луи"
  },
  {
    "country": "Мавритания",
    "capital": "Нуакшот"
  },
  {
    "country": "Мадагаскар",
    "capital": "Антананариву"
  },
  {
    "country": "Малави",
    "capital": "Лилонгве"
  },
  {
    "country": "Малайзия",
    "capital": "Куала-Лумпур"
  },
  {
    "country": "Мали",
    "capital": "Бамако"
  },
  {
    "country": "Мальдивы",
    "capital": "Мале"
  },
  {
    "country": "Мальта",
    "capital": "Валлетта"
  },
  {
    "country": "Марокко",
    "capital": "Рабат"
  },
  {
    "country": "Маршалловы Острова",
    "capital": "Маджуро"
  },
  {
    "country": "Мексика",
    "capital": "Мехико"
  },
  {
    "country": "Микронезия",
    "capital": "Паликир"
  },
  {
    "country": "Мозамбик",
    "capital": "Мапуту"
  },
  {
    "country": "Молдавия",
    "capital": "Кишинёв"
  },
  {
    "country": "Монако",
    "capital": "Монако"
  },
  {
    "country": "Монголия",
    "capital": "Улан-Батор"
  },
  {
    "country": "Мьянма",
    "capital": "Нейпьидо"
  },
  {
    "country": "Намибия",
    "capital": "Виндхук"
  },
  {
    "country": "Непал",
    "capital": "Катманду"
  },
  {
    "country": "Нигер",
    "capital": "Ниамей"
  },
  {
    "country": "Нигерия",
    "capital": "Абуджа"
  },
  {
    "country": "Нидерланды",
    "capital": "Амстердам"
  },
  {
    "country": "Никарагуа",
    "capital": "Манагуа"
  },
  {
    "country": "НКР",
    "capital": "Степанакерт"
  },
  {
    "country": "Новая Зеландия",
    "capital": "Веллингтон"
  },
  {
    "country": "Норвегия",
    "capital": "Осло"
  },
  {
    "country": "ОАЭ",
    "capital": "Абу-Даби"
  },
  {
    "country": "Оман",
    "capital": "Маскат"
  },
  {
    "country": "Пакистан",
    "capital": "Исламабад"
  },
  {
    "country": "Палау",
    "capital": "Нгерулмуд"
  },
  {
    "country": "Панама",
    "capital": "Панама"
  },
  {
    "country": "Папуа — Новая Гвинея",
    "capital": "Порт-Морсби"
  },
  {
    "country": "Парагвай",
    "capital": "Асунсьон"
  },
  {
    "country": "Перу",
    "capital": "Лима"
  },
  {
    "country": "Польша",
    "capital": "Варшава"
  },
  {
    "country": "Португалия",
    "capital": "Лиссабон"
  },
  {
    "country": "Приднестровская Молдавская Республика",
    "capital": "Тирасполь"
  },
  {
    "country": "Республика Абхазия",
    "capital": "Сухум"
  },
  {
    "country": "Республика Конго",
    "capital": "Браззавиль"
  },
  {
    "country": "Республика Корея",
    "capital": "Сеул"
  },
  {
    "country": "Республика Косово",
    "capital": "Приштина"
  },
  {
    "country": "Россия",
    "capital": "Москва"
  },
  {
    "country": "Руанда",
    "capital": "Кигали"
  },
  {
    "country": "Румыния",
    "capital": "Бухарест"
  },
  {
    "country": "Сальвадор",
    "capital": "Сан-Сальвадор"
  },
  {
    "country": "Самоа",
    "capital": "Апиа"
  },
  {
    "country": "Сан-Марино",
    "capital": "Сан-Марино"
  },
  {
    "country": "Сан-Томе и Принсипи",
    "capital": "Сан-Томе"
  },
  {
    "country": "Саудовская Аравия",
    "capital": "Эр-Рияд"
  },
  {
    "country": "Сахарская Арабская Демократическая Республика",
    "capital": "Тифарити"
  },
  {
    "country": "Северная Македония",
    "capital": "Скопье"
  },
  {
    "country": "Северный Кипр",
    "capital": "Никосия"
  },
  {
    "country": "Сейшельские Острова",
    "capital": "Виктория"
  },
  {
    "country": "Сенегал",
    "capital": "Дакар"
  },
  {
    "country": "Сент-Винсент и Гренадины",
    "capital": "Кингстаун"
  },
  {
    "country": "Сент-Китс и Невис",
    "capital": "Бастер"
  },
  {
    "country": "Сент-Люсия",
    "capital": "Кастри"
  },
  {
    "country": "Сербия",
    "capital": "Белград"
  },
  {
    "country": "Сингапур",
    "capital": "Сингапур"
  },
  {
    "country": "Сирия",
    "capital": "Дамаск"
  },
  {
    "country": "Словакия",
    "capital": "Братислава"
  },
  {
    "country": "Словения",
    "capital": "Любляна"
  },
  {
    "country": "Соломоновы Острова",
    "capital": "Хониара"
  },
  {
    "country": "Сомали",
    "capital": "Могадишо"
  },
  {
    "country": "Сомалиленд",
    "capital": "Харгейса"
  },
  {
    "country": "Судан",
    "capital": "Хартум"
  },
  {
    "country": "Суринам",
    "capital": "Парамарибо"
  },
  {
    "country": "США",
    "capital": "Вашингтон"
  },
  {
    "country": "Сьерра-Леоне",
    "capital": "Фритаун"
  },
  {
    "country": "Таджикистан",
    "capital": "Душанбе"
  },
  {
    "country": "Таиланд",
    "capital": "Бангкок"
  },
  {
    "country": "Танзания",
    "capital": "Додома"
  },
  {
    "country": "Того",
    "capital": "Ломе"
  },
  {
    "country": "Тонга",
    "capital": "Нукуалофа"
  },
  {
    "country": "Тринидад и Тобаго",
    "capital": "Порт-оф-Спейн"
  },
  {
    "country": "Тувалу",
    "capital": "Фунафути"
  },
  {
    "country": "Тунис",
    "capital": "Тунис"
  },
  {
    "country": "Туркменистан",
    "capital": "Ашхабад"
  },
  {
    "country": "Турция",
    "capital": "Анкара"
  },
  {
    "country": "Уганда",
    "capital": "Кампала"
  },
  {
    "country": "Узбекистан",
    "capital": "Ташкент"
  },
  {
    "country": "Украина",
    "capital": "Киев"
  },
  {
    "country": "Уругвай",
    "capital": "Монтевидео"
  },
  {
    "country": "Федеративная Республика Амбазония",
    "capital": "Буэа"
  },
  {
    "country": "Фиджи",
    "capital": "Сува"
  },
  {
    "country": "Филиппины",
    "capital": "Манила"
  },
  {
    "country": "Финляндия",
    "capital": "Хельсинки"
  },
  {
    "country": "Франция",
    "capital": "Париж"
  },
  {
    "country": "Хорватия",
    "capital": "Загреб"
  },
  {
    "country": "ЦАР",
    "capital": "Банги"
  },
  {
    "country": "Чад",
    "capital": "Нджамена"
  },
  {
    "country": "Черногория",
    "capital": "Подгорица"
  },
  {
    "country": "Чехия",
    "capital": "Прага"
  },
  {
    "country": "Чили",
    "capital": "Сантьяго"
  },
  {
    "country": "Шаблон:AFG",
    "capital": "Кабул"
  },
  {
    "country": "Швейцария",
    "capital": "Берн"
  },
  {
    "country": "Швеция",
    "capital": "Стокгольм"
  },
  {
    "country": "Шри-Ланка",
    "capital": "Шри-Джаяварденепура-Котте"
  },
  {
    "country": "Эквадор",
    "capital": "Кито"
  },
  {
    "country": "Экваториальная Гвинея",
    "capital": "Малабо"
  },
  {
    "country": "Эритрея",
    "capital": "Асмэра"
  },
  {
    "country": "Эсватини",
    "capital": "Мбабане"
  },
  {
    "country": "Эстония",
    "capital": "Таллин"
  },
  {
    "country": "Эфиопия",
    "capital": "Аддис-Абеба"
  },
  {
    "country": "ЮАР",
    "capital": "Претория"
  },
  {
    "country": "Южная Осетия",
    "capital": "Цхинвал"
  },
  {
    "country": "Южный Судан",
    "capital": "Джуба"
  },
  {
    "country": "Ямайка",
    "capital": "Кингстон"
  },
  {
    "country": "Япония",
    "capital": "Токио"
  }
];
