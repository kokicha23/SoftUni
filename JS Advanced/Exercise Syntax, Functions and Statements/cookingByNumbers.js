function solve(number,opr1,opr2,opr3,opr4,opr5)
{   let numberToModify=+number;
  let arr=[];
  arr.push(opr1,opr2,opr3,opr4,opr5);
  
  for (let i=0;i<arr.length;i++)
  {   
      let line=arr[i].split(" ");
      
      if(line=="chop"){
          numberToModify=numberToModify/2;
          console.log(numberToModify)
      }
      else if(line=="dice"){
          numberToModify=Math.sqrt(numberToModify)
          console.log(numberToModify)
      }
      else if(line=="spice"){
          numberToModify=numberToModify+1;
          console.log(numberToModify)
      }
      else if (line=="bake"){
               numberToModify=numberToModify*3;
               console.log(numberToModify)
      }
      else if (line=="fillet"){
          let twentyPercentsOfTheNumber=numberToModify*20/100;
          numberToModify=numberToModify-twentyPercentsOfTheNumber;
          console.log(numberToModify);
      }
      
      
      
  }
 
}
solve(9,"dice","spice","chop","bake","fillet")