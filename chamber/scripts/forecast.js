
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.68&lon=-121.15&cnt=32&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetchFuture(){
    try{
        const response = await fetch(forecastURL);
        if (response.ok) {
            const forecastData = await response.json();
            displayFuture(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
}
apiFetchFuture()


function displayFuture(data){
    const card = document.createElement('div');
    for (let i = 6; i < data.list.length; i +=8){

        const forecast = data.list[i];

        const tempElement = document.createElement('div');
        tempElement.innerHTML = `${forecast.main.temp.toFixed(0)}&deg;F`;

        const dateElement = document.createElement('div');
        const date = forecast.dt_txt.substring(0,10);
        dateElement.innerHTML = `Forecast for: ${date}`;

        const iconElement = document.createElement('img');
        const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        iconElement.setAttribute('src', iconsrc);

        const descElement = document.createElement('div');
        let desc = capitalize(forecast.weather[0].description);
        descElement.textContent = desc;

        // Append each forecast entry to the respective container element
        card.appendChild(dateElement);
        card.appendChild(tempElement);
        card.appendChild(iconElement);
        card.appendChild(descElement);
        document.getElementById('weatherForecast').appendChild(card);
    }
}

function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}