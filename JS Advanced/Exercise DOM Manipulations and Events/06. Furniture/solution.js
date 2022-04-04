    function solve() {
    let textArea = Array.from(document.querySelectorAll('textarea'));
    Array.from(document.querySelectorAll('button')).forEach(btn => btn.addEventListener('click', generate));
    let table = document.querySelector('tbody');
  
    function generate(event) {
       if (textArea.value!=""){
         if(event.target.textContent==="Generate"){
           let inputAreaText=JSON.parse(textArea[0].value)
           inputAreaText.forEach((el)=>{
             let newRow=document.createElement('tr')
             let td1=document.createElement('td')
             let image1=document.createElement('img') 
             image1.setAttribute('src',`${el.img}`)
             td1.appendChild(image1)

             let td2=document.createElement('td')
             let furnitureName=document.createElement('p')
             furnitureName.textContent=`${el.name}`
             td2.appendChild(furnitureName)

            let td3=document.createElement('td')
            let price=document.createElement('p')
            price.textContent=`${el.price}`
            td3.appendChild(price)

            let td4=document.createElement('td')
            let decorationFactor=document.createElement('p')
            decorationFactor.textContent=`${el.decFactor}`
            td4.appendChild(decorationFactor)
            
           let td5=document.createElement('td')
           let checkBox=document.createElement('input')
           checkBox.setAttribute("type","checkbox")
           td5.appendChild(checkBox)
             newRow.appendChild(td1)
             newRow.appendChild(td2)
             newRow.appendChild(td3)
             newRow.appendChild(td4)
             newRow.appendChild(td5)
             table.appendChild(newRow)
           })
         }else{
            let totalPrice=0;
            let decorationFactor=0;
            let names=[];
            let isChecked=Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            isChecked.forEach((el)=>{
              let mainRow=el.parentNode.parentNode
              names.push(mainRow.children[1].textContent)
              totalPrice+=Number(mainRow.children[2].textContent)
              decorationFactor+=Number(mainRow.children[3].textContent)
            })
            textArea[1].textContent+=`Bought furniture: ${names.join(", ")}\n`
            textArea[1].textContent+=`Total price: ${totalPrice.toFixed(2)}\n`
            textArea[1].textContent+=`Average decoration factor: ${decorationFactor/names.length}`
         }
       }

    };
  };
  // 'Bought furniture: Tablet, Vase\nTotal Price: 2015.00\nAverage decoration factor: 7.6' 
  // 'Bought furniture: Tablet, Vase\nTotal price: 2015.00\nAverage decoration factor: 7.6'