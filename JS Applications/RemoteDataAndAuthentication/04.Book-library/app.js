let url = 'http://localhost:3030/jsonstore/collections/books';
let form = document.querySelector('body > form');
form.addEventListener('submit', onSubmit);

let tbody = document.querySelector('body tbody')

document.querySelector('#loadBooks').addEventListener('click', loadBooks);

async function loadBooks() {
    
    let response = await fetch(url);
    let data = await response.json();
    Array.from(tbody.childNodes).map(x=>x.remove())
    for (let key in data){
        let tr = document.createElement('tr');
        let titleTd = createEl('td',{},`${data[key].title}`);   
        let authorTd = createEl('td',{},`${data[key].author}`);
        let actionTd = document.createElement('td');
        let editButton = createEl('button',{onClick:editBook},'Edit');
        let deleteButton = createEl('button',{onClick:deleteBook.bind(null,key)},'Delete');
        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);

        tr.appendChild(titleTd);
        tr.appendChild(authorTd);
        tr.appendChild(actionTd);
        tbody.appendChild(tr)
    }
}

async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    if (formData.get('author')!=="" && formData.get('title')!==""){
        let bodyObj = {
            author: formData.get('author'),
            title: formData.get('title')
        }
    
        await fetch(url, {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyObj)
        });
    }
    formData.set('author',"");
    formData.set('title',"");
    
}
async function editBook(){
    let response = await fetch(url);
    let data = await response.json();
}
async function deleteBook(id,e){
    await fetch(`${url}/${id}`,{
        method: 'DELETE',
    })
    e.target.parentNode.parentNode.remove()
}

function createEl(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            if (typeof value === 'boolean') {
                result[attr] = value;
            } else {
                result.setAttribute(attr, value);
            }
            console.log(result);
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}