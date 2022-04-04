function solve(group_people, group_type, week_day) {
    let price = 0

    if (week_day === "Friday") {
        if (group_type === "Students") {
            price = 8.45
        } else if (group_type === "Business") {
            price = 10.90
        } else if (group_type === "Regular") {
            price = 15
        }
    } else if (week_day === "Saturday") {
        if (group_type === "Students") {
            price = 9.80
        } else if (group_type === "Business") {
            price = 15.60
        } else if (group_type === "Regular") {
            price = 20
        }
    } else if (week_day === "Sunday") {
        if (group_type === "Students") {
            price = 10.46
        } else if (group_type === "Business") {
            price = 16
        } else if (group_type === "Regular") {
            price = 22.50
        }
    }

    let total = price * group_people;
    if (group_type === "Students" && group_people >= 30) {
        total -= total * 0.15
    } else if (group_type === "Business" && group_people >= 100) {
        total -= price * 10
    } else if (group_type === "Regular" && (group_people >= 10 && group_people <= 20)) {
        total -= total * 0.05
    }

    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")