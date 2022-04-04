import { render } from '../node_modules/lit-html/lit-html.js'
import { listTemplate } from "./listTemplate.js";

let root = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', getTowns)




function getTowns(e) {
    e.preventDefault();

    let towns = document.getElementById('towns').value.split(', ')
    const resultUl = listTemplate(towns)

    render(resultUl, root)

}