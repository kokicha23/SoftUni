function solve(elementsArray) {
    let sum=0;
    let inverseSum=0;
    let concat="";
    for (let i=0;i<elementsArray.length;i++)
    {
         sum+=Number(elementsArray[i]);
         inverseSum+=1/elementsArray[i];
         let string=String(elementsArray[i]);
         concat+=string;
         
    }
    console.log(sum);
    console.log(inverseSum)
    console.log(concat)

}
solve([1, 2, 3])