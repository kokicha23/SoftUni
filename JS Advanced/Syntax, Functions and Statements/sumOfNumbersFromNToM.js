function solve(startNumber,endNumber) {
    let sum=0;
    let N=Number(startNumber)
    let M=Number(endNumber)
    for(let i=N;i<=M;i++)
    {
        sum+=Number(i);
    }
    console.log(sum)
}
solve(1,5)