import { fetchdata } from './display.js'


const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastDiv = document.querySelector('#forecast');


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=5.56&lon=-0.20&appid=d7b75a0a78c62591e681a8cc2528a462&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=5.56&lon=-0.20&appid=d7b75a0a78c62591e681a8cc2528a462&units=imperial'; 

async function apiFetch() {
  try {
    
    const response = await fetch(url);
    const data = await response.json();
    console.log('Current weather:', data); 
    
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    console.log('Forecast data:', forecastData); 
    
    displayTemp(data);
    displayForecast(forecastData.list);
  } catch (error) {
    console.log('Error:', error);
  }
}

function displayTemp(data) {
    currentTemp.innerHTML = `Temperature: ${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', description);
    captionDesc.textContent = `${description}`;
}

function displayForecast(list) {
  const dailyForecasts = list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
  forecastDiv.innerHTML = '';
  
  dailyForecasts.forEach(day => {
    const date = new Date(day.dt * 1000);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    
    const forecastItem = document.createElement('div');
    forecastItem.classList.add('forecast-day')
    forecastItem.innerHTML = `
      <h3>${dayName}</h3>
      <img src="https://openweathermap.org/img/w/${day.weather[0].icon}.png" 
           alt="${day.weather[0].description}">
      <p>Temp: ${Math.round(day.main.temp)}&deg;F</p>
    `;
    
    forecastDiv.appendChild(forecastItem);
  });
}

apiFetch();

function spotlight(membersData) {
    
    const goldmembers = membersData.filter(member => member.MembershipLevel === 3);
    
    
    const spotlightContainer = document.querySelector('.spotlightContainer'); 
    
    if (!spotlightContainer) {
        console.error('Spotlight container not found!');
        return;
    }
    
    spotlightContainer.innerHTML = ''; 
    
    goldmembers.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add("memberCard");

        const companyLogo = document.createElement("img");
        companyLogo.src = member.image;
        companyLogo.alt = member.name;
        memberCard.appendChild(companyLogo);
        
        const name = document.createElement("h3");
        name.textContent = member.name;
        memberCard.appendChild(name);
        
        const contact = document.createElement("p");
        contact.textContent = `Contact: ${member.PhoneNumber}`;
        memberCard.appendChild(contact);
        
        spotlightContainer.appendChild(memberCard);
    });
}


fetchdata().then(data => {
    spotlight(data); 
});