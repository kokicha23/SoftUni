function deleteByEmail() {
    let emailElement=document.querySelector('input[name="email"]');
    let emailCellElements=document.querySelectorAll('tr td:nth-of-type(2)')
    let resultElement=document.getElementById("result")
    //
     let elementdArr=Array.from(emailCellElements)

     let targetedElement=elementdArr.find((x)=>x.textContent==emailElement.value)
     if (targetedElement){
        targetedElement.parentNode.remove();
               resultElement.textContent="Deleted."
     }
     else{
        resultElement.textContent="Not Found."
     }
    // for (let tdElement of emailCellElements)
    // // {
    // //     if (tdElement)
    // //     {      tdElement.parentNode.remove()
    // //            resultElement.textContent="Deleted."
    // //     }
    // //     else 
    // //     {
    // //         resultElement.textContent="Not Found."
    // //     }
    // // }
}   