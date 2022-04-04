function solve(input) {
	input.pop();

	let regEx =
		/>>(?<name>[A-Z][A-Za-z]+)<<[+-]?(?<price>[0-9]*[.]?[0-9]+)!(?<quantity>[0-9]+)/;

	let currentFurniture;
	let spendMoney = 0;

	console.log('Bought furniture:');
	for (let furniture of input) {
		currentFurniture = regEx.exec(furniture);

		if (currentFurniture) {
			let name = currentFurniture.groups.name;
			let price = parseFloat(currentFurniture.groups.price);
			let quantity = parseInt(currentFurniture.groups.quantity);

			console.log(name);
			spendMoney += price * quantity;
		}
	}

	console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}

solve([
	'>>Laptop<<312.2323!3',
	'>>TV<<300.21314!5',
	'>Invalid<<!5',
	'>>TV<<300.21314!20',
	'>>Invalid<!5',
	'>>TV<<30.21314!5',
	'>>Invalid<<!!5',
	'Purchase',
]);
