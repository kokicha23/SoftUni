import { html, render } from "../node_modules/lit-html/lit-html.js";

export function createCats(data) {
    return html`
    <ul>${data.map(cat => html`

    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`)}
    
</ul>`

}



