// function solve(input) {
// 	// let namePattern = /%(?<name>[A-Z][a-z]*)%/;
// 	// let productPattern = /<(?<product>\w+)>/;
// 	// let countPattern = /\|(?<count>\d+)\|/;
// 	// let pricePattern = /(?<price>[0-9]+(\.[0-9]+)?)\$/;

// 	// let totalIncome = 0;

// 	// while (input[0] !== 'end of shift') {
// 	// 	let line = input.shift();
// 	// 	if (
// 	// 		namePattern.test(line) &&
// 	// 		productPattern.test(line) &&
// 	// 		countPattern.test(line) &&
// 	// 		pricePattern.test(line)
// 	// 	) {
// 	// 		let name = namePattern.exec(line).groups.name;
// 	// 		let product = productPattern.exec(line).groups.product;
// 	// 		let count = +countPattern.exec(line).groups.count;
// 	// 		let price = +pricePattern.exec(line).groups.price;

// 	// 		let totalPrice = price * count;
// 	// 		// console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
// 	// 		totalIncome += totalPrice;
// 	// 	}
// 	// }

// 	// console.log(`Total income: ${totalIncome.toFixed(2)}`);
// }

function solve(input) {
	let pattern =
		/%(?<name>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>-?[0-9]+(?:\.[0-9]+)?)\$/;
	let totalIncome = 0;

	while (input[0] !== 'end of shift') {
		let line = input.shift();
		let match = pattern.exec(line);

		if (match !== null) {
			let { name, product, count, price } = match.groups;
			price = Number(price);
			count = Number(count);

			let totalPrice = price * count;

			console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
			totalIncome += totalPrice;
		}
	}

	console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

solve([
	'%George%<Croissant>|2|10.3$',
	'%Peter%<Gum>|1|1.3$',
	'%Maria%<Cola>|1|2.4$',
	'end of shift',
]);

solve([
	'%InvalidName%<Croissant>|2|10.3$',
	'%Peter%<Gum>1.3$',
	'%Maria%<Cola>|1|2.4',
	'%Valid%<Valid>valid|10|valid20$',
	'end of shift',
]);
