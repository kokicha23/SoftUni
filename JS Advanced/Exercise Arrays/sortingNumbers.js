function solve(arr) {
    let sortedArr=arr.sort((a,b)=>a-b)
    let finalArr=[];
    for (let i=0;i<arr.length;i+1)
    {  let firstEl=sortedArr.splice(0,1)
        
        finalArr.push(firstEl)
        let nextEl=sortedArr.splice(sortedArr.length-1,1)
        finalArr.push(nextEl)
   
    }
   return finalArr;
 
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])