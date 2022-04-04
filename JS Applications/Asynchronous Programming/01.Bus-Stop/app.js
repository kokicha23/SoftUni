async function getInfo() {
  const stopId = document.getElementById('stopId').value;
  const nameDiv = document.getElementById('stopName')
  const busesUl = document.getElementById('buses');

  let url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

  try {

    let response = await fetch(url);
    busesUl.replaceChildren("")
    if (response.status !== 200) {
      throw new Error('Error');
    }
    let data = await response.json();
    nameDiv.textContent = data.name;

    Object.entries(data.buses).forEach(b => {
      let liElement = document.createElement('li');
      liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`;
      busesUl.appendChild(liElement);
    })
  } catch (error) {
    nameDiv.textContent = 'Error';
  }
}