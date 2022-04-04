function solve(input) {
    let sortedProductList = input.slice(0).sort();

    let arrL = sortedProductList.length;

    for (let i = 0; i < arrL; i++) {
        console.log(`${i + 1}.${sortedProductList[i]}`);
    }
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);