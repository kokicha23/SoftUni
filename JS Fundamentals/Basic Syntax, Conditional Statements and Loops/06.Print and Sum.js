function solve(num1, num2){
    let total_sum = 0
    let all_numbers = ""
    for(; num1 <= num2; num1++){
        all_numbers += `${num1} `
        total_sum += num1;
    }

    console.log(all_numbers)
    console.log(`Sum: ${total_sum}`)
}

solve(5, 10)
solve(0, 26)
solve(50, 60)