function solve(input) {
	input.pop();
	let regEx = /[^\W]+/g;

	let racers = {};

	for (let name of input.shift().split(', ')) {
		racers[name] = 0;
	}

	let namePattern = /[A-Za-z]/g;
	let numberPattern = /\d/g;

	for (let codedName of input) {
		let name = codedName.match(namePattern).join('');
		let numbers = codedName.match(numberPattern).map(Number);

		let distance = 0;
		numbers.forEach((el) => (distance += el));

		if (racers.hasOwnProperty(name)) {
			racers[name] += distance;
		}
	}

	let racerEntries = Object.entries(racers)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3);

	for (let i = 0; i < racerEntries.length; i++) {
		let position = i + 1;

		if (position === 1) {
			console.log(`${position}st place: ${racerEntries[i][0]}`);
		} else if (position === 2) {
			console.log(`${position}nd place: ${racerEntries[i][0]}`);
		} else if (position === 3) {
			console.log(`${position}rd place: ${racerEntries[i][0]}`);
		}
	}
}

solve([
	'George, Peter, Bill, Tom',
	'G4e@55or%6g6!68e!!@ ',
	'R1@!3a$y4456@',
	'B5@i@#123ll',
	'G@e54o$r6ge#',
	'7P%et^#e5346r',
	'T$o553m&6',
	'end of race',
]);
