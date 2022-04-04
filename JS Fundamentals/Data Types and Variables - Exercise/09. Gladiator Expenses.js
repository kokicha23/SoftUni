function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let brokenHelmets = 0
    let brokenSwords = 0
    let brokenShields = 0
    let armourRepairs = 0

    
    for (let i = 1; i <= lostFights; i++) {
        let helmetBrokenThisFight = false
        let swordBrokenThisFight = false
        let shieldIncremented = false

        if (i % 2 === 0) {
            brokenHelmets++
            helmetBrokenThisFight = true
        }

        if (i % 3 === 0) {
            brokenSwords++
            swordBrokenThisFight = true
        }

        if (helmetBrokenThisFight && swordBrokenThisFight) {
            brokenShields++
            shieldIncremented = true
        }

        if (brokenShields % 2 === 0 && shieldIncremented) {
            armourRepairs++;
        }
    }

    let total = (brokenHelmets * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (armourRepairs * armourPrice)
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5)
console.log("\n")
solve(23, 12.50, 21.50, 40, 200)