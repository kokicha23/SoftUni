function validateCoordinates(x1, y1, x2, y2) {
    let total1 = Math.sqrt(x1 ** 2 + y1 ** 2);
    let total2 = Math.sqrt(x2 ** 2 + y2 ** 2);
    let total3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    let distances = [total1, total2, total3];
    let valids = [];
    for (let item of distances) {
        let valid = '';
        if (item.toString().includes('.')) { // check for a floating point
            valid = 'invalid'
        } else {
            valid = 'valid'
        }
        valids.push(valid);
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${valids[0]}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${valids[1]}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valids[2]}`);
}