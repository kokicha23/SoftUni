let string = 'Im a JavaScript Developer';
let newString, bool, index;

console.log('------ IndexOf Methods ------');
index = string.indexOf('a');
console.log(index); // 3
index = string.lastIndexOf('a');
console.log(index); // 8
index = string.indexOf('.');
console.log(index); // -1
console.log('\n');

console.log('------ Includes ------');
bool = string.includes('Java');
console.log(bool); // True
bool = string.includes('java');
console.log(bool); // False
console.log('\n');

console.log('------ SubString ------');
newString = string.substring(5, 15); // Char at index 5 (first param) is included where char at index 15 (second param) is not included
console.log(newString); // JavaScript
console.log('\n');

console.log('------ Replace ------');
newString = string.replace('Developer', 'Pro'); // Replaces the FIRST occurrence of the first param with the second param
console.log(newString); // Im a JavaScript Pro
console.log('\n');

console.log('------ Repeat ------');
newString = '*'.repeat(5); // Repeats the string n amount of times
console.log(newString); // *****
console.log('\n');

console.log('------ Trim ------');
let stringToTrim = '      Annoying Spaces     ';
newString = stringToTrim.trim(); // Removes the whitespaces from both ends of a string
console.log(newString); // Annoying Spaces
console.log('\n');

console.log('------ TrimStart ------');
newString = stringToTrim.trimStart(); // Removes the whitespaces from the end of a string
console.log(newString); // Annoying Spaces     ...
console.log('\n');

console.log('------ TrimEnd ------');
newString = stringToTrim.trimEnd(); // Removes the whitespaces from the start of a string
console.log(newString); //       Annoying Spaces
console.log('\n');

console.log('------ StartsWith ------');
bool = string.startsWith('Im');
console.log(bool); // true
console.log('\n');

console.log('------ EndsWith ------');
bool = string.endsWith('JavaScript');
console.log(bool); // false
console.log('\n');

console.log('------ PadStart ------');
let strToPad = '010';
newString = strToPad.padStart(8, '0'); // Add to the current string another substring at the start until a length is reached
console.log(newString); // 00000010
console.log('\n');

console.log('------ PadEnd ------');
strToPad = 'He passed away';
newString = strToPad.padStart(20, '.'); // Add to the current string another substring at the end until a length is reached
console.log(newString); // He passed away......
console.log('\n');
