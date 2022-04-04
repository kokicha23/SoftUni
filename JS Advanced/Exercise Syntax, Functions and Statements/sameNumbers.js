function solve(number)
{    let arr=[];
    let string=String(number)
    let sum=0;
    for (let i=0;i<string.length;i++)
    {   
        arr.push(string[i])
        sum+=Number(string[i])
    }
const allEqual = arr => arr.every( v => v === arr[0] )
console.log(allEqual(arr))
console.log(sum)
}

solve(2222)