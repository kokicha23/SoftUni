function solve(input) {
     
    let sortedArr=input.sort((a,b)=>a.localeCompare(b))
    let current=[];
    let char="";
    for (let i=0;i<sortedArr.length;i++)
    {    current=sortedArr[i].split(" : ")
        if (sortedArr[i][0]!==char)
        {   char=sortedArr[i][0]
            console.log(sortedArr[i][0])
        }
       console.log(`${current[0]}: ${current[1]}`)
       
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)