function solve(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let slicedElements = undefined;

        if (i <= k) {
            slicedElements = arr.slice(0, i);
        } else {
            slicedElements = arr.slice(i - k, i);
        }

        let sum = slicedElements.reduce((sum, el) => {
            return sum + el;
        }, 0);

        arr.push(sum);
    }

    console.log(arr.join(' '));

}

solve(6, 3);
solve(8, 2);