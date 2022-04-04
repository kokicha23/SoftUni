function solve(stringArr) {
	let concatString = stringArr[0].concat(stringArr[1]);
	let keyString = stringArr[2];
	let vowelAmount = 0;

	for (let i = 0; i < concatString.length; i++) {
		if (isVowel(concatString[i])) {
			concatString = concatString.replace(
				concatString[i],
				keyString[vowelAmount].toUpperCase()
			);

			vowelAmount++;
			if (vowelAmount > keyString.length - 1) {
				vowelAmount = 0;
			}
		}
	}

	let result = concatString.split('').reverse().join('');
	console.log(`Your generated password is ${result}`);

	function isVowel(letter) {
		return ['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase());
	}
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
