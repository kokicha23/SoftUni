(async function(){
    
    let url = 'http://localhost:3030/jsonstore/collections/students';

    let form = document.querySelector('#form');
    form.addEventListener('submit', onSubmit)
    
    let tbody = document.querySelector('.container #results tbody')
    
    await bodyLoad();
    
    async function bodyLoad() {
        let response = await fetch(url);
        let data = await response.json();
        
        Array.from(tbody.childNodes).map(x=>x.remove())
    
        for (let key in data){
            let tr = document.createElement('tr');
            let firstNameTd = createEl('td',{},`${data[key].firstName}`)
            let lastNameTd = createEl('td',{},`${data[key].lastName}`)
            let facultyTd = createEl('td',{},`${data[key].facultyNumber}`)
            let gradeTd = createEl('td',{},`${data[key].grade}`)
            tr.appendChild(firstNameTd)
            tr.appendChild(lastNameTd)
            tr.appendChild(facultyTd)
            tr.appendChild(gradeTd)
            tbody.appendChild(tr)
        }
    }
    
    async function onSubmit(e) {
        e.preventDefault()
        //making object from the form data :)
        let formData = Object.fromEntries(new FormData(e.currentTarget));
    
        if (!Object.values(formData).some(x => x == "")) {
            await fetch(url, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
        }
        await bodyLoad();
    }
    
function createEl(type, attributes, ...content) {
        const result = document.createElement(type);
    
        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
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
})()
