function solve(string) {
	let words = [];

	for (let i = 0; i < string.length; i++) {
		if (string[i] == string[i].toUpperCase()) {
			let word = string.substring(0, i);
			string = string.replace(word, '');
			i -= word.length;
			if (word !== '') {
				words.push(word);
			}
		}
	}

	words.push(string);
	console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');
