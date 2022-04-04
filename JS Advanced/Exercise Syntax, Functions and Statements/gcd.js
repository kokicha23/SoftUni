function solve(a,b){
let firstNumber=+a;
let secondNumber=+b;
let arr=[];
for (let i=0;i<=9999;i++)
{
    if (a%i==0 && b%i==0)
    {
        arr.push(i)

    }
    
}
console.log(Math.max(...arr))
}
solve(15,5)