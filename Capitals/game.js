function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function begin() {
	let indices = [...Array(capitals.length).keys()]
	shuffle(indices)
	//alert(`${indices[0]}, ${indices[1]}, ${indices[2]}, ${indices[3]}, ${indices[4]}`)
}
