function addItem() {
    let itemsElement=document.getElementById("items")
    let inputElement=document.getElementById('newItemText')
    
    let liElement=document.createElement('li')
    liElement.textContent=inputElement.value ;
    
    itemsElement.appendChild(liElement)
    inputElement.value="";
    let deleteElement=document.createElement('a')
    deleteElement.href='#';
    deleteElement.textContent='[Delete]'
    liElement.appendChild(deleteElement)
    itemsElement.appendChild(liElement)

    deleteElement.onclick = (e) => {
        liElement.remove()
    };
}