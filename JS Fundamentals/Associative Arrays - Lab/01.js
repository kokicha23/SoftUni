function solve(input) {
	let assocArr = {};

	for (let entry of input) {
		entry = entry.split(' ');
		assocArr[entry[0]] = entry[1];
	}

	for (let assocKey in assocArr) {
		console.log(`${assocKey} -> ${assocArr[assocKey]}`);
	}
}

solve([
	'Tim 0834212554',
	'Peter 0877547887',
	'Bill 0896543112',
	'Tim 0876566344',
]);
