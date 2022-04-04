function attachGradientEvents() {
    let gradiantElement=document.getElementById("gradient")
    let element=document.getElementById("result")
    const gradiantMouseOverHandler=(e)=>{
               let percent=Math.floor((e.offsetX/e.target.offsetWidth)*100);
               element.textContent=`${percent} %`
    }
    gradiantElement.addEventListener('mousemove',gradiantMouseOverHandler)   
}