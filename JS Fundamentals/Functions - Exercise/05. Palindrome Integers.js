function palindromeInts(numArr) {

    const isPalindrome = num => {
        let reversedNum = Number(num.toString().split("").reverse().join(""));
        return reversedNum === num;
    }

    for (let num of numArr) {
        console.log(isPalindrome(num));
    }
}

palindromeInts([123,323,421,121]);
palindromeInts([32,2,232,1010]);