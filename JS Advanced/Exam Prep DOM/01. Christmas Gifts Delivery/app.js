function solution() {
    let name = document.querySelector('input[type="text"]');
    
    let addButton =document.querySelector('.card button')
    
    addButton.addEventListener('click',onClick)
    
    
    let [ulListOfGifts,ulSentGifts, ulDiscardedGifts]=Array.from(document.querySelectorAll('.card ul'))
    
    function onClick(e){
      let li =document.createElement('li');
      li.classList.add('gift')
      li.textContent=name.value

      let sendBtn=document.createElement('button')
      sendBtn.textContent='Send'
      sendBtn.setAttribute('id','sendButton')
      let discardBtn=document.createElement('button')
      discardBtn.textContent='Discard'
      discardBtn.setAttribute('id','discardButton')
     
      let listOfGiftsLi=document.querySelector('.card li')
      console.log(listOfGiftsLi)
      
      sendBtn.addEventListener('click',()=>{
        let li=sendBtn.parentElement;
        ulListOfGifts.removeChild(li)
        li.removeChild(sendBtn)
        li.removeChild(discardBtn)
        ulSentGifts.appendChild(li)

       })

       discardBtn.addEventListener('click',()=>{
        let li=discardBtn.parentElement;
        ulListOfGifts.removeChild(li)
        li.removeChild(sendBtn)
        li.removeChild(discardBtn)
        ulDiscardedGifts.appendChild(li)

       })

      li.appendChild(sendBtn)
      li.appendChild(discardBtn)
      ulListOfGifts.appendChild(li)
      
      name.value="";
      
     

   

    }
}