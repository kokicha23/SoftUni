function solve(arr) {
    let finalArr=[];
    for (let i=0;i<arr.length;i++)
    {    
        {
            let line=arr[i].split(",")
            if (line=="add"){     
                     let firstElement=1;
                    finalArr.push(firstElement+i);
            }
            else if (line=="remove"){
                if (finalArr.length==0)
        {
            console.log("Empty")
            break;
            
        }
        else{
            finalArr.pop()
        }
                
            
                
            }
            
            
           
        }
        
    }
    console.log(finalArr.join("\n"))
}
solve(['remove', 
'remove', 
'remove']
)