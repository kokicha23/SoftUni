function solve() {
    let currentStop;
    let nextStop;
    let spanElement = document.querySelector('.info');
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule/';
      
    async function depart() {
        if (!currentStop) {
            let data;
            const response = await fetch(baseUrl);
            try {
                data = await response.json();
            } catch (e) {
                errorHandling();
                return;
            }
            if (!Object.keys(data).length) {
                errorHandling();
                return;
            }

            currentStop = data[Object.keys(data)[0]];
        }
        let nextStopData;
        const nextStopResponse = await fetch(`${baseUrl}${currentStop.next}`);
        try {
            nextStopData = await nextStopResponse.json();
        } catch (e) {
            errorHandling();
            return; 
        }

        spanElement.textContent = `Next stop ${nextStopData.name}`;

        departButton.disabled = true;
        arriveButton.disabled = false;
        nextStop = nextStopData; 

    }

    async function arrive() {
        currentStop = nextStop;
        spanElement.textContent = `Arrive at ${currentStop.name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;

    }

    function errorHandling() {
        spanElement.textContent = `Error`;
        departButton.disabled = true;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();