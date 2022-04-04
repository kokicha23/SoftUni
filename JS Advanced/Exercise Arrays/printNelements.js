function solve(arr,N) {
    N=+N;
    let finalArr=[];
    for(let i=0;i<arr.length;i+=N)
    {
        let line=arr[i].split(",")
        finalArr.push(line)
    }
    return finalArr;
}
solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2)