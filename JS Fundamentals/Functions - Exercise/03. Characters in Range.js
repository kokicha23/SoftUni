function charInRange(char1, char2) {

    let codeArr = getAsciiCode([char1, char2])
    let resultCharArr = [];

    for (let i = codeArr[0] + 1; i < codeArr[1]; i++) {
        resultCharArr.push(String.fromCharCode(i));
    }

    console.log(resultCharArr.join(" "));

    function getAsciiCode(charArr) {
        let asciiCodeArr = [];

        for (let char of charArr) {
            asciiCodeArr.push(char.charCodeAt(0));
        }
        
        asciiCodeArr = [getArrMinNum(asciiCodeArr), getArrMaxNum(asciiCodeArr)];
        return asciiCodeArr;
    }

    function getArrMaxNum(arr) {

        let firstElement = arr[0];
        let maxElement = firstElement;

        for (num of arr) {
            if (firstElement < num) {
                maxElement = num;
            }
        }

        return maxElement;
    }

    function getArrMinNum(arr) {

        let firstElement = arr[0];
        let minElement = firstElement;

        for (num of arr) {
            if (firstElement > num) {
                minElement = num;
            }
        }

        return minElement;
    }
}

charInRange("a", "d");
charInRange("#", ":");
charInRange("C", "#");