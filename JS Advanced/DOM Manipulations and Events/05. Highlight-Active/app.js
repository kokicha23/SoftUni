function focused() {
    document.querySelectorAll("div div input").forEach((e)=>{
       e.addEventListener('focus', function (e){
           e.target.parentNode.className="focused"
       })
       e.addEventListener("blur",function(e){
           e.target.parentNode.className="blured"
       })
      
    })
    
    
}