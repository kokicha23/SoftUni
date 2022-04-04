function solve(fileLocation) {
	let locationArr = fileLocation.split('\\');
	let file = locationArr[locationArr.length - 1];
	let fileData = file.split('.');

	let fileExtension = fileData.pop();
	let fileName = fileData.join('.');

	console.log(`File name: ${fileName}`);
	console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx');
solve('C:\\Projects\\Data-Structures\\LinkedList.cs');
