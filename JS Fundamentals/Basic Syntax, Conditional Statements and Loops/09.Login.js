function solve(input) {
    let user = input[0]
    let logged_in = false
    let times_printed = 0
    let password = user.split("").reverse().join("")

    for (let i = 1; i < input.length; i++) {
        const current_password = input[i]

        if (password === current_password) {
            console.log(`User ${user} logged in.`)
            logged_in = true
            break
        }

        times_printed++;
        if (times_printed < 4) {
            console.log("Incorrect password. Try again.")
        }
    }

    if (!logged_in) {
        console.log(`User ${user} blocked!`)
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA'])
solve(['momo', 'omom'])
solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])