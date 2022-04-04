async function attachEvents() {
    let [person, phone] = document.querySelectorAll('input[type="text"]');
    [person, phone].map(e=>e.required=true);
    let createButton = document.querySelector('#btnCreate')
    createButton.addEventListener('click', createPhoneBook)
    let parentUl = document.querySelector('#phonebook');
    let loadButton = document.querySelector('#btnLoad');
    loadButton.addEventListener('click', loadPhoneBooks);
    let url = 'http://localhost:3030/jsonstore/phonebook';
   
    async function loadPhoneBooks() {
        let response = await fetch(url);
        let data = await response.json();
        Array.from(parentUl.childNodes).map(x=>x.remove());
        for (let key in data) {
            let li = createEl('li', '', `${data[key].person}: ${data[key].phone}`)
            let deleteButton = createEl('button', '', 'Delete');
            deleteButton.data = `${key}`;
            deleteButton.addEventListener('click', deletePhoneBook)
            li.appendChild(deleteButton)
            parentUl.appendChild(li)
        }
    }
    async function deletePhoneBook(e) {
        await fetch(`${url}/${e.target.data}`, {
            method: 'DELETE'
        })
        e.target.parentElement.remove()
    }
    async function createPhoneBook() {
       try{ 
        if (phone.value!=='' && person.value!==''){
        let dataObj = {
            person: person.value,
            phone: phone.value
        };
        await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataObj)
        })
        
        [person, phone].map(e=>e.value="")
        
       } else {
          return alert('Please fill all the required fields ( Person and Phone )')
       }
       
       } catch(e){
            alert(e.message)
       }
        
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
}

attachEvents();