function solve(text) {
	let specialWords = [];
	let textArr = text.trim().split(' ');

	for (let word of textArr) {
		if (word.startsWith('#') && word.length !== 1) {
			word = word.substring(1);
			if (!word.includes('#')) {
				specialWords.push(word);
			}
		}
	}

	for (let word of specialWords) {
		for (let char of word) {
			if (!isNaN(char)) {
				specialWords.splice(specialWords.indexOf(word), 1);
				break;
			}
		}
	}

	console.log(specialWords.join('\n'));
}

solve(
	'The symbol # is known #variously in English-speaking #regions as the #number sign'
);

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
