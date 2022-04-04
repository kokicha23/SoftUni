function solve(string) {
	let regEx = /(?<letterF>[A-Za-z])(?<number>\d+)(?<letterS>[A-Za-z])/g;
	let currentSequence;
	let result = 0;

	while ((currentSequence = regEx.exec(string)) !== null) {
		let firstLetter = currentSequence.groups.letterF;
		let secondLetter = currentSequence.groups.letterS;
		let number = Number(currentSequence.groups.number);
		let letterPosition;

		letterPosition = Number(alphabetPosition(firstLetter));
		if (firstLetter == firstLetter.toUpperCase()) {
			number /= letterPosition;
		} else {
			number *= letterPosition;
		}

		letterPosition = Number(alphabetPosition(secondLetter));
		if (secondLetter == secondLetter.toUpperCase()) {
			number -= letterPosition;
		} else {
			number += letterPosition;
		}

		result += number;
	}

	console.log(result.toFixed(2));

	function alphabetPosition(text) {
		let result = '';
		for (let i = 0; i < text.length; i++) {
			let code = text.toLowerCase().charCodeAt(i);
			if (code > 96 && code < 123) {
				result += code - 96 + ' ';
			}
		}

		return result;
	}
}

solve('A12b s17G');
solve('P34562Z q2576f   H456z');
solve('a1A');
