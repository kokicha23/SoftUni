function solve(textArr) {
	let wordArr = textArr.shift().split(' ');
	let skippedWordsArr = textArr.pop();

	for (let i = 0; i < wordArr.length; i++) {
		let word = wordArr[i];

		let specialSign = false;
		let sign = '';

		if (word.startsWith('_')) {
			for (let skippedWord of skippedWordsArr) {
				let wordL = word.length;

				if (!word.endsWith('_')) {
					sign = word[wordL - 1];
					word = word.substring(0, wordL - 1);
					specialSign = true;
				}

				if (wordL === skippedWord.length) {
					if (specialSign) {
						wordArr[i] = skippedWord + sign;
					} else {
						wordArr[i] = skippedWord;
					}

					skippedWordsArr = removeElFromArr(
						skippedWordsArr,
						skippedWord
					);

					break;
				}
			}
		}
	}

	console.log(wordArr.join(' '));

	function removeElFromArr(arr, el) {
		let newArr = arr.slice(0);
		if (newArr.includes(el)) {
			let index = newArr.indexOf(el);
			newArr.splice(index, 1);
		}
		return newArr;
	}
}

solve([
	"Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
	['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
