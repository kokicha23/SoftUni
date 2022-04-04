function lockedProfile() {

Array.from(document.querySelectorAll('.profile button'))
.forEach((button)=>button.addEventListener('click', change) )
        

function change(e){
  const hiddenEl=e.target.parentElement.querySelector('div')
  let isChecked=e.target.parentElement.querySelector('input[type="radio"][value="unlock"]').checked;
   if (isChecked){
        if(e.target.textContent==="Show more"){
            hiddenEl.style.display='block';
            e.target.textContent='Hide it';
        } else{
            hiddenEl.style.display='none';
            e.target.textContent='Show more';
        }
       
   }
}
  
}























//      let divElements = Array.from(document.querySelectorAll('#main div.profile'));
//      divElements.forEach(x => {
//          let currentBtn = x.querySelector('button');
 
//          currentBtn.addEventListener('click', (e) => {
//              let currentRadioCheck = e.target.parentElement.querySelector('[value="unlock"]'); // .querySelector('input[type="radio"]:checked');
//              let targetBtn = e.target.parentElement.querySelector('button');
//              let divHidden = e.target.parentElement.querySelector('[id*="HiddenFields"]');
//              if (currentRadioCheck.checked) {
//                  if (targetBtn.textContent == 'Show more') {
//                      divHidden.style.display = 'block';
//                      targetBtn.textContent = 'Hide it';
//                  } else {
//                      divHidden.style.display = 'none';
//                      targetBtn.textContent = 'Show more';
//                  }
//              }
//          });
//      });
//  }














