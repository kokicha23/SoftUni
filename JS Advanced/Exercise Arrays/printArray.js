function solve(arr,numberOfRotations) {
    
    
    
    for (let i=0;i<numberOfRotations;i++)
    {   let lastElement=arr.slice(arr.length-1,arr.length)
       arr.pop()
       arr.unshift(lastElement)
    }
    console.log(arr.join(" "))
    
}
solve (['1', 
'2', 
'3', 
'4'], 
2)