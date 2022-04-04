window.addEventListener('load', solution);

function solution() {
  let name = document.getElementById("fname");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phone");
  let address = document.getElementById("address");
  let postalCode = document.getElementById("code");
  let submitButton = document.getElementById("submitBTN");
  let obj={}
  
  let continueButton=document.getElementById("continueBTN");
  let editButton=document.getElementById("editBTN");
   
  submitButton.addEventListener("click",MoveTheElements);
  
   let divWithClassActions=document.querySelector('.actions')
   divWithClassActions.addEventListener("click",EditInput)

  

 function MoveTheElements(e){
     e.preventDefault()
     if (name.value!="" && email.value!="" && phoneNumber.value!="" && address.value!="" && postalCode.value!=""){
     let ul=document.getElementById("infoPreview");
     let liForName=document.createElement("li");
     liForName.textContent=`Full Name: ${name.value}`
     ul.appendChild(liForName)
     obj[name.id]=name.value;

     let liForEmail=document.createElement("li");
     liForEmail.textContent=`Email: ${email.value}`
     ul.appendChild(liForEmail)
     obj[email.id]=email.value;

     let liForPhoneNumber=document.createElement("li");
     liForPhoneNumber.textContent=`Phone Number: ${phoneNumber.value}`
     ul.appendChild(liForPhoneNumber)
     obj[phoneNumber.id]=Number(phoneNumber.value);

     let liForAddress=document.createElement("li");
     liForAddress.textContent=`Address: ${address.value}`
     ul.appendChild(liForAddress)
     obj[address.id]=address.value;

     let liForPostalCode=document.createElement("li");
     liForPostalCode.textContent=`Postal coode: ${postalCode.value}`
     ul.appendChild(liForPostalCode)
     obj[postalCode.id]=Number(postalCode.value);
     
      name.value=""
      email.value=""
      phoneNumber.value=""
      address.value=""
      postalCode.value=""
      submitButton.disabled=true;
      editButton.disabled=false;
      continueButton.disabled=false;
      
      console.log(obj)
     }
  }

 function EditInput(e){
  if (e.target.id==="editBTN"){
    let parentDiv=editButton.parentElement.parentElement;
    let parentUl=parentDiv.children[0]

    Object.keys(obj).forEach((e)=> {
      Array.from(document.querySelectorAll('div input')).forEach((el)=>{
            if (e===el.id){
              el.value=obj[el.id]
            }
      })
    })
    
    parentUl.innerHTML=""

   editButton.disabled=true;
   continueButton.disabled=true;
   submitButton.disabled=false;
      }
  else if (e.target.id==="continueBTN"){
   let h3=document.createElement('h3');
   h3.textContent="Thank you for your reservation!";
   document.querySelector('#block').replaceChildren(h3)
     
  }

 }
}
