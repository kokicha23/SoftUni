function addItem() {
    let newTextEl = document.getElementById('newItemText');
    let valueEl = document.getElementById('newItemValue');
    let optionEl = document.createElement('option');
    let menuDropDown = document.getElementById("menu");

    optionEl.text = newTextEl.value;
    optionEl.value = valueEl.value;

    if (newTextEl.value !== '' && valueEl.value !== '') {
        menuDropDown.appendChild(optionEl)
        newTextEl.value = '';
        valueEl.value = '';
    }


}