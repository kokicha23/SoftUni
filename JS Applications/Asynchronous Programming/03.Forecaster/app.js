async function attachEvents() {
    let inputCity = document.getElementById('location');
    let forecastDiv = document.getElementById('forecast');
    let checkButton = document.getElementById('submit');
    let currentDiv = document.getElementById('current');
    let upcomingDiv = document.getElementById('upcoming');
    let currentConditionLabel = document.querySelector(`#current .label`)
    let upcomingConditionLabel = document.querySelector(`#upcoming .label`)


    checkButton.addEventListener('click', showInfo);
    let baseUrl = 'http://localhost:3030/jsonstore/forecaster';

    let locationResponse = await fetch(`${baseUrl}/locations`)
    let locationData = await locationResponse.json();

    async function showInfo(e) {
        try {
            let foundCity = locationData.find(x => x.name === inputCity.value);

            if (!foundCity) {
                throw new Error('Error');
            }

            let forecastResponse = await fetch(`${baseUrl}/today/${foundCity.code}`);
            let forecastData = await forecastResponse.json();
            let threeDayForecastResponse = await fetch(`${baseUrl}/upcoming/${foundCity.code}`)
            let threeDayForecastData = await threeDayForecastResponse.json();

            currentConditionLabel.textContent = 'Current Condition';
            upcomingConditionLabel.textContent = 'Three-day forecast';
            currentDiv.querySelectorAll('.forecasts').forEach(x => x.remove())

            let forecastsDiv = document.createElement('div');
            forecastsDiv.className = 'forecasts';
            let conditionSymbolSpan = document.createElement('span');
            conditionSymbolSpan.className = 'condition symbol';
            switch (forecastData.forecast.condition) {
                case 'Sunny': conditionSymbolSpan.textContent = '☀'; break;
                case 'Partly sunny': conditionSymbolSpan.textContent = '⛅'; break;
                case 'Overcast': conditionSymbolSpan.textContent = '☁'; break;
                case 'Rain': conditionSymbolSpan.textContent = '☂'; break;
            }

            let conditionSpan = document.createElement('span');
            conditionSpan.className = 'condition';

            let citySpan = document.createElement('span');
            citySpan.className = 'forecast-data';
            citySpan.textContent = `${forecastData.name}`

            let degreesSpan = createElement('span', `${forecastData.forecast.low}°/${forecastData.forecast.high}°`, ['class', 'forecast-data']);
            let weatherSpan = createElement('span', `${forecastData.forecast.condition}`, ['class', 'forecast-data']);

            conditionSpan.appendChild(citySpan);
            conditionSpan.appendChild(degreesSpan);
            conditionSpan.appendChild(weatherSpan);

            forecastsDiv.appendChild(conditionSymbolSpan);
            forecastsDiv.appendChild(conditionSpan);

            currentDiv.appendChild(forecastsDiv);
            upcomingDiv.querySelectorAll('.forecast-info').forEach(x => x.remove())
            let threeDayForecastDiv = createElement('div', '', ['class', 'forecast-info'])

            for (let i = 0; i < threeDayForecastData.forecast.length; i++) {


                let threeDayForecastSpan = createElement('span', '', ['class', 'upcoming']);
                let threeDayForecastSymbolSpan = createElement('span', '', ['class', 'symbol']);

                switch (threeDayForecastData.forecast[i].condition) {
                    case 'Sunny': threeDayForecastSymbolSpan.textContent = '☀'; break;
                    case 'Partly sunny': threeDayForecastSymbolSpan.textContent = '⛅'; break;
                    case 'Overcast': threeDayForecastSymbolSpan.textContent = '☁'; break;
                    case 'Rain': threeDayForecastSymbolSpan.textContent = '☂'; break;
                }

                let threeDayForecastDegreesSpan = createElement('span', `${threeDayForecastData.forecast[i].low}°/${threeDayForecastData.forecast[i].high}°`, ['class', 'forecast-data'])
                let threeDayForecastWeatherSpan = createElement('span', `${threeDayForecastData.forecast[i].condition}`, ['class', 'forecast-data']);

                threeDayForecastSpan.appendChild(threeDayForecastSymbolSpan);
                threeDayForecastSpan.appendChild(threeDayForecastDegreesSpan);
                threeDayForecastSpan.appendChild(threeDayForecastWeatherSpan);
                threeDayForecastDiv.appendChild(threeDayForecastSpan);

            }
            upcomingDiv.appendChild(threeDayForecastDiv);

        } catch (e) {

            currentConditionLabel.textContent = 'Error';
            upcomingConditionLabel.textContent = 'Error';
            currentDiv.querySelectorAll('.forecasts').forEach(x => x.remove())
            upcomingDiv.querySelectorAll('.forecast-info').forEach(x => x.remove())
        }

        forecastDiv.style.display = 'block';
    }

    function createElement(type, textContent, attributes = []) {
        let element = document.createElement(type);

        if (textContent) {
            element.textContent = textContent;
        }

        for (let i = 0; i < attributes.length; i++) {
            let x = attributes[i];
            let attribute, value;

            if (Array.isArray(x)) {
                attribute = x[0];
                value = x[1];
            } else {
                attribute = attributes[i];
                value = attributes[i + 1];
                i++;
            }

            if (attribute === 'class') {
                element.classList.add(value);
            } else {
                element.setAttribute(attribute, value);
            }
        }

        return element;
    }
}

attachEvents();