function solve(string, text) {
	let stringArr = string.split(', ');
	let textArr = text.split(' ');

	for (let word of textArr) {
		for (let str of stringArr) {
			if (word.length === str.length && word.includes('*')) {
				text = text.replace(word, str);
				stringArr.splice(stringArr.indexOf(str), 1);
				break;
			}
		}
	}

	console.log(text);
}

solve(
	'great, learning',
	'softuni is ***** place for ******** new programming languages'
);

solve(
	'great',
	'softuni is ***** place for learning new programming languagesss'
);
