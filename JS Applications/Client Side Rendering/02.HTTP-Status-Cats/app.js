import { render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
import { createCats } from "./catTempalte.js";

let catsSection = document.getElementById('allCats');
catsSection.addEventListener('click', onClick)
let toBeAppended = createCats(cats)


cats.forEach(x => x.info = false)
render(toBeAppended, catsSection)
function onClick(e) {
    e.preventDefault()

    if (e.target.tagName == 'BUTTON') {

        const elementId = e.target.parentNode.querySelector('.status').id;
      
        const cat = cats.find(c => c.id == elementId)
        cat.info = !cat.info;
        render(toBeAppended, catsSection)
    }
}

 // All('.status')).id;
    // if (e.target.textContent = 'Show status code'){
    //     div.forEach(x=>x.style.display = 'block');
    //     e.target.textContent = 'Hide status code';
    // }else if(e.target.textContent = 'Hide status code'){
    //     div.forEach(x=>x.style.display = 'none');
    //     e.target.textContent = 'Show status code';
    // }