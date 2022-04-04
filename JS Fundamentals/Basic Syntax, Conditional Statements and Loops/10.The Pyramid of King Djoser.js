function solve(base, increment) {
    let required_stone = 0
    let required_marble = 0
    let required_lapis = 0
    let required_gold = 0

    let height = 0
    let step = 0

    let area_step = 0
    let area = 0


    for (let i = base; i > 0; i -= 2) {
        height++
        step = i - 2

        if (step < 0) {
            step = 0
        }

        area_step = step ** 2
        area = i ** 2

        required_stone += area_step * increment

        if (i === 1 || i === 2) {
            required_gold += i ** 2
        } else if (height % 5 != 0) {
            required_marble += (area - area_step) * increment
        } else {
            required_lapis += area - area_step
        }

    }


    required_lapis *= increment
    required_gold *= increment
    height *= increment

    console.log(`Stone required: ${Math.ceil(required_stone)}`)
    console.log(`Marble required: ${Math.ceil(required_marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(required_lapis)}`)
    console.log(`Gold required: ${Math.ceil(required_gold)}`)
    console.log(`Final pyramid height: ${Math.floor(height)}`)
}

// solve(11, 1)
console.log("")
// solve(11, 0.75)
console.log("")
solve(12, 1)