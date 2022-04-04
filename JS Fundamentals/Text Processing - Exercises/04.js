function solve(word, text) {
	let wordArr = text.toLowerCase().split(' ');

	if (wordArr.includes(word.toLowerCase())) {
		console.log(word);
	} else {
		console.log(`${word} not found!`);
	}
}

solve('Javascript', 'javaScript is the best programming language');
