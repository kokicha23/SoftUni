async function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;

    let textArea = document.querySelector('#messages');

    let [authorInput, messageInput] = document.querySelectorAll('#controls input[type="text"]')

    let sendButton = document.querySelector('#submit');
    let refreshButton = document.querySelector('#refresh');

    sendButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', refreshMessages);

    async function sendMessage(e) {
        let dataObj = {
            author: authorInput.value,
            content: messageInput.value,
        };

        await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(dataObj)
        });
        authorInput.value='';
        messageInput.value=''
    }

    async function refreshMessages(e){
       let response = await fetch(url);
       let data = await response.json();
       textArea.textContent='';
       
       for (let id in data){
           textArea.textContent += `${data[id].author}: ${data[id].content}\n`
       }
    } 



}

attachEvents();