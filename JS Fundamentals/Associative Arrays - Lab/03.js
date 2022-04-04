function solve(input) {
	let assocArr = {};

	for (let entry of input) {
		entry = entry.split(':');
		assocArr[entry[0]] = entry[1];
	}

	let sortedArr = Object.entries(assocArr).sort((a, b) => {
		return a[0].localeCompare(b[0]);
	});

	for (let [name, address] of sortedArr) {
		console.log(`${name} -> ${address}`);
	}
}

solve([
	'Bob:Huxley Rd',
	'John:Milwaukee Crossing',
	'Peter:Fordem Ave',
	'Bob:Redwing Ave',
	'George:Mesta Crossing',
	'Ted:Gateway Way',
	'Bill:Gateway Way',
	'John:Grover Rd',
	'Peter:Huxley Rd',
	'Jeff:Gateway Way',
	'Jeff:Huxley Rd',
]);
