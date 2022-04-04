function objCreator(firstName, lastName, age) {
	let person = {
		firstName: firstName,
		lastName: lastName,
		age: age,
		sayHello() {
			console.log(`${firstName} says hello!`);
		},
	};

	person.sayGoodbye = () => console.log(`${firstName} says bye!`);

	return person;
}

let myPerson = objCreator('Peter', 'Pan', 20);
myPerson.sayHello();
myPerson.sayGoodbye();

console.log(Object.keys(myPerson));
console.log(Object.values(myPerson));

let entries = Object.entries(myPerson);
console.log('\n\n');

function objToJSON(name, lastName, hairColor) {
	let obj = {
		name,
		lastName,
		hairColor,
	};

	let jsonString = JSON.stringify(obj);
	return jsonString;
}

let myPersonString = objToJSON(myPerson.firstName, myPerson.lastName, 'Black');
console.log(myPersonString);
console.log('\n\n');

function JSONTextToObj(text) {
	let obj = JSON.parse(text);
	let objEntries = Object.entries(obj);

	for (let [key, value] of objEntries) {
		console.log(`${key}: ${value}`);
	}

	return obj;
}

let newObj = JSONTextToObj(myPersonString);
console.log(newObj);
