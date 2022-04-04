function solve() {
  let textArr=document.getElementById('text').value;
   textArr=textArr.split(' ');
  let namingConvention=document.getElementById('naming-convention').value;
      let resultArr=[];
      let wordToAdd="";
  if (namingConvention==="Pascal Case"){
         for (let i=0;i<textArr.length;i++)
         {
           let upperCaseChar=(textArr[i][0]).toUpperCase();
           let theRestOfTheWord=textArr[i].slice(1).toLowerCase();
            wordToAdd=upperCaseChar+theRestOfTheWord;
            resultArr.push(wordToAdd);
            
         }
  }
  else if (namingConvention==="Camel Case")
  {
    for (let i=0;i<textArr.length;i++){    
      let currentWord=textArr[i];
        if (i==0){
          currentWord=currentWord.toLowerCase();
          resultArr.push(currentWord)
          continue;
        }  
        
            let firstChar=currentWord[0];
            currentWord=currentWord.substring(1);
            currentWord=firstChar.toUpperCase()+currentWord.toLowerCase();
            resultArr.push(currentWord)  
    }
  }
else{
  resultArr.push("Error!")
}
 let result=document.getElementById('result');
 result.textContent=resultArr.join('');

}