function solve(input) {
    let arr = input.slice(0);

    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());

    let result = firstNum + lastNum;
    console.log(result);
}

solve(['20', '30', '40']);