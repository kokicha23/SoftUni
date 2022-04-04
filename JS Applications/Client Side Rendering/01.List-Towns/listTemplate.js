import { html } from "../node_modules/lit-html/lit-html.js";

export function listTemplate(data){
return html`
<ul>
 ${data.map(town=>html`<li>${town}</li>`)}
</ul>
`
}