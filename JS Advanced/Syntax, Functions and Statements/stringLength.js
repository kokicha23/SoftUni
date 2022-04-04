function solve(fristString,secondString,thirdString) {
     let firstCounter=0;
     let secondCounter=0;
     let thirdCounter=0;
    for(let i=0;i<fristString.length;i++)
    {
             firstCounter++;
            

    }
    for(let j=0;j<secondString.length;j++)
    {
            secondCounter++;
    }
    for(let k=0;k<thirdString.length;k++)
    {
            thirdCounter++;
    }
    console.log(firstCounter+secondCounter+thirdCounter)
    let number=firstCounter+secondCounter+thirdCounter;
    console.log(Math.round(number/3))
}
solve("chocolate", "ice cream", "cake")