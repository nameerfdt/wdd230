
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=38.68&lon=-121.15&units=imperial&appid=c5c228cf26f7fad6c4c81bd04c1890f7';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        } 
    } catch (error) {
        console.log(error);
    } 
}
apiFetch()

function displayResults(data){
    currentTemp.innerHTML =`${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = capitalize(data.weather[0].description);
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function capitalize(str) {
    return str.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    })
}