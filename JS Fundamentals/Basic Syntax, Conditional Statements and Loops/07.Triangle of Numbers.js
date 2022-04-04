function solve(n){
    let num_string = ""
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            num_string += `${i} `
        }

        console.log(num_string)
        num_string = ""
    }
    
    console.log("")
}

solve(3)
solve(5)
solve(6)