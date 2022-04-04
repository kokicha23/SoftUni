function solve(arr,delimiter) {
    let finalArr=[];
    for(let i=0;i<arr.length;i++)
    {
        let line=arr[i].split(",")
         finalArr.push(line)
    }
    console.log(finalArr.join(delimiter))
}
solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_')