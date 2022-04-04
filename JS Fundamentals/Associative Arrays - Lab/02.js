function solve(input) {
	let assocArr = {};

	for (let entry of input) {
		entry = entry.split(' ');

		let weekday = entry[0];
		let person = entry[1];

		if (assocArr.hasOwnProperty(weekday)) {
			console.log(`Conflict on ${weekday}!`);
		} else {
			assocArr[weekday] = person;
			console.log(`Scheduled for ${weekday}!`);
		}
	}

	for (let assocKey in assocArr) {
		console.log(`${assocKey} -> ${assocArr[assocKey]}`);
	}
}

solve(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
