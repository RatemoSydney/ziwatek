function weatherWizard(){
    let apiKey = '{YOUR API KEY}';

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Machakos&appid=${apiKey}&units=metric`,
            forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=Machakos&appid=${apiKey}&units=metric`;
    
    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch( error => {
            console.log(`Error fetching curent weather data: ${error}`);
            alert('Error fetching current weather data. Please try again');
        });
}

function displayWeather(data){
    const tempinfo = document.querySelector('.temp-info'),
        weatherData = document.querySelector('.weather-info'),
        weatherIcon = document.querySelector('#weathericon'),
        town = document.querySelector('.city');
    
    tempinfo.innerHTML = '';
    weatherData.innerHTML = '';

    if(data.cod==='404'){
        weatherData.innerHTML = `<p>${data.message}</p>`
    }else{
        const cityName = data.name,
            temprature = Math.round(data.main.temp),
            description = data.weather[0].description,
            iconCode = data.weather[0].icon,
            iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`,
            tempHTML = `<p>${temprature}°C</p>`,
            weatherHTML = `
                <p>${cityName}</p>
                <p>${description}</p>
            `;
        
        tempinfo.innerHTML = tempHTML;
        weatherData.innerHTML = weatherHTML;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function showImage(){
    const weatherIcon = document.getElementById('weathericon');
    weatherIcon.style.display = 'block';
}

weatherWizard();
