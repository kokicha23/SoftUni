function passwordValidator(password) {

    let validLength = isLengthValid(password);
    let twoDigitsInPass = doesContainTwoDigits(password);
    let noInvalidCharsInPass = noInvalidCharsInStr(password);

    if (validLength && twoDigitsInPass && noInvalidCharsInPass) {
        console.log("Password is valid");
    } else {

        if (!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }  
        
        if (!noInvalidCharsInPass) {
            console.log("Password must consist only of letters and digits");
        }

        if (!twoDigitsInPass) {
            console.log("Password must have at least 2 digits");
        }
        
    }


    function isLengthValid(password) {
        let passwordL = password.length
        return passwordL >= 6 && passwordL <= 10;
    }

    function noInvalidCharsInStr(password) {
        let invalidChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
        for (let i = 0; i < invalidChars.length; i++) {
            if (password.includes(invalidChars[i])) {
                return false;
            }
        }
        return true;
    }

    function doesContainTwoDigits(password) {
        let digits = "1234567890";
        let digitCount = 0;

        for (let i = 0; i < digits.length; i++) {
            if (password.includes(digits[i])) {
                digitCount++;
            }
        }

        if (digitCount >= 2) {
            return true;
        }
        return false;
    } 

}

passwordValidator('logIn');
console.log("\n");
passwordValidator('MyPass123');
console.log("\n");
passwordValidator('Pa$s$s');