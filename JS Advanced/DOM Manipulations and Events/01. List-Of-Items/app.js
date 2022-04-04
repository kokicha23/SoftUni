function addItem() {
    let inputElement=document.getElementById('newItemText')

    let itemsElement=document.getElementById('items')

   let listElement=document.createElement('li');

   listElement.textContent=inputElement.value;

   itemsElement.appendChild(listElement)

}