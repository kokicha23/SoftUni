function solve(text) {
	for (let i = 0; i < text.length - 1; i++) {
		if (text[i] === text[i + 1]) {
			text = text.split('');
			text.splice(i, 1);
			text = text.join('');
			i--;
		}
	}

	console.log(text);
}

solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');
