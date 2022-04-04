function arraysDemo() {

    const printArr = (arr, anotherString = '') => {
        console.log(`[${arr}] ${anotherString}`);
    }
    
    let arr = [1, 2, 3, 4, 5];
    let arrL = arr.length;

    console.log("---------------GENERAL ARRAY FUNCTIONS---------------");
    // .push();
    arrL = arr.push(999); // Adds a number at the end of the array and returns the new length of the array
    printArr(arr, `- Length: ${arrL} ...  .push();`);
    
    
    // .unshift();
    arrL = arr.unshift(888); // Adds a number at the start of the array and returns the new length of the array
    printArr(arr, `- Length: ${arrL} ...  .unshift();`);


    // .pop();
    let lastElement = arr.pop(); // Removes the last element of the array and returns it
    printArr(arr, `- Old Last Element: ${lastElement} ...  .pop();`);
    

    // .shift();
    let firstElement = arr.shift(); // Removes the first element of the array and returns it
    printArr(arr, `- Old First Element: ${firstElement} ...  .shift();`);

    // .indexOf();
    let elementToFindIndex = 3
    let indexOfElement = arr.indexOf(elementToFindIndex); // Returns the first possible index of the element specified as parameter or -1 if it is not present
    printArr(arr, `- Index of ${elementToFindIndex}: ${indexOfElement} ...  .indexOf();`);


    // .lastIndexOf();
    let indexOfLastElement = arr.lastIndexOf(elementToFindIndex); // Returns the last possible index of the element specified as parameter or -1 if it is not present
    printArr(arr, `- Index of ${elementToFindIndex}: ${indexOfLastElement} ...  .lastIndexOf();`);
    

    // .includes();
    let elementIsInArr = 4;
    let isInArr = arr.includes(elementIsInArr); // Returns if either element is in arr or not.
    printArr(arr, `- Is ${elementIsInArr} in arr? - ${isInArr} ...  .includes();`);


    // .slice();
    let arrCopy = arr.slice(0); // Copy of array
                                // Not using 'let arrCopy = arr;' because that way both of them will point to the same memory
                                // So if they point to the same memory they will always have the same value
                                // We are using 'let arrCopy = arr.slice(0);' so it creates new memory that it points to and we can change it safely
    let indexOf3 = arrCopy.indexOf(3);
    let get3and4 = arrCopy.slice(indexOf3, indexOf3 + 2); 
    printArr(arr, `- [3, 4]: ${get3and4} ...  .slice();\n\n`);


    console.log("---------------Array.splice();---------------");
    // .splice();
    let deletedElements = arr.splice(indexOfElement, 2, 999); // Params explanation:
                                        // First param is the index of an element that sets the start before it.
                                        // For example if we have an array of [1, 2, 3] and we do arr.splice(1, 0, 999), 999 will be added before 2.
                                        // So the modified array will look like [1, 999, 2, 3].

                                        // Second param is the delete count
                                        // It means how many elements to delete to the right of where we set the start.
                                        // For example if we had an array [1, 2, 3, 4, 5, 6] and we did arr.splice(3, 2, 999) we will remove the elements 4, 5.
                                        // So the modified array will look like [1, 2, 3, 999, 6].

                                        // Third param (optional) is the element that will be added to the array.
                                        // An element will be added before the element at the index that we specified (first param).
                                        // For example if we had an array [1, 2, 3, 4] and we did arr.splice(2, 0, 999) we will add 999 before 3.
                                        // So the modified array will look like [1, 2, 999, 3, 4].

                                        // Returns an array of the deleted elements
    printArr(arr, `- Deleted Elements: ${deletedElements}`);

    deletedElements = arr.splice(arr.indexOf(999), 1, 3, 4);
    printArr(arr, `- Deleted Elements: ${deletedElements}\n\n`);


    console.log("---------------Array.map();---------------");
    // .map();
    // String to Num - First Way
    let arrOfStrings = ['5', '122', '55', '12'];
    let arrOfNumbers = arrOfStrings.map((el) => {
        return Number(el);
    });

    // String to Num - Second Way
    arrOfNumbers = arrOfStrings.map(Number);
    printArr(arrOfNumbers, '- String to Number\n\n');


    console.log("---------------Array.filter();---------------");
    // .filter();
    // Returns a new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.

    // Only Even Numbers - Way One
    let newArr = arrOfNumbers.filter((el) => {
        if (el % 2 === 0) {
            return el;
        }
    });

    // Only Even Numbers - Way Two
    newArr = arrOfNumbers.filter(el => el % 2 === 0);
    printArr(newArr, '- Even numbers from arr\n\n');


    console.log("---------------Array.reduce();---------------");
    // .reduce();
    arr = [5, 10, 20, 15];
    let sum = arr.reduce((sum, el) => {
        return sum + el;
    }, 0);
    printArr(arr, `- Elements sum: ${sum}\n\n`);


    console.log("---------------Array.sort();---------------");
    // .sort();
    arr = [5, 10, 1, -15, 0];

    // Когато 'a' е отпред значи от най-малкото към най-голямото
    // Следователно когато 'б' е отпред от най-голямо към най-малко

    // Sort by Ascending Order
    let sortedArr = arr.slice(0).sort((a, b) => {
        return a - b;
    });
    printArr(sortedArr, `- Ascending Order.`);

    // Sort by Descending Order
    sortedArr = arr.slice(0).sort((a, b) => {
        return b - a;
    });
    printArr(sortedArr, `- Descending Order.`);

    // Sort by Ascending Order using String's length
    arr = ['b', 'ccc', 'aa'];
    sortedArr = arr.slice(0).sort((a, b) => {
        return a.length - b.length;
    });
    printArr(sortedArr, `- Ascending Order based on String's length`);

    sortedArr = arr.slice(0).sort((a, b) => {
        return b.length - a.length;
    });
    printArr(sortedArr, `- Descending Order based on String's length`);

    // Sort by Alphabetical Order
    sortedArr = arr.slice(0).sort((a, b) => {
        return a.localeCompare(b); // Compares ASCII code
    });
    printArr(sortedArr, `- Alphabetical Order`);

    // Sort by both Ascending Order using String's length and Alphabetical Order
    arr = ['bbb', 'ccc', 'aaa'];
    sortedArr = arr.slice(0).sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });
    printArr(sortedArr, `- Alphabetical and Ascending Order with Strings`);
}

arraysDemo();