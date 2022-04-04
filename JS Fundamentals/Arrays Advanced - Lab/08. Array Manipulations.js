function solve(input) {
    let inputArr = input.slice(0);
    let arrToManipulate = inputArr.shift().split(' ').map(Number);

    let operationsArr = inputArr.map((el) => {
        return el.split(' ');
    });

    for (let operationArr of operationsArr) {
        const operation = operationArr.shift();
        let [firstNum, secondNum] = operationArr.map(Number);

        if (operation === 'Add') {
            add(firstNum);
        } else if (operation === 'Remove') {
            remove(firstNum);
        } else if (operation === 'RemoveAt') {
            removeAt(firstNum);
        } else if (operation ==='Insert') {
            insert(firstNum, secondNum);
        }
    }

    console.log(arrToManipulate.join(' '));

    function add(el) {
        arrToManipulate.push(el);
    }

    function remove(el) {
        arrToManipulate = arrToManipulate.filter(elInArr => el !== elInArr);
    }

    function removeAt(index) {
        arrToManipulate.splice(index, 1);
    }

    function insert(el, index) {
        arrToManipulate.splice(index, 0, el);
    }
}

solve(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
solve(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);