function validate() {
    let inputElement=document.getElementById("email")
    console.log(inputElement)
    inputElement.addEventListener('change',function(e){
        for (let i=0;i<e.length;i++)
        {
            if (e[i]!=="@")
        {
            e.target.parentNode.className="error"
        }
        }
        
    })
}