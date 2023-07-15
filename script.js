const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '151bbae4d0msh1c131c6070af453p12f6c2jsn4e2313857887',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct;
            temp.innerHTML = response.temp;
            temp2.innerHTML = response.temp;
            feels_like.innerHTML = response.feels_like;
            humidity.innerHTML = response.humidity;
            humidity2.innerHTML = response.humidity;
            min_temp.innerHTML = response.min_temp;
            max_temp.innerHTML = response.max_temp;
            wind_speed.innerHTML = response.wind_speed;
            wind_speed2.innerHTML = response.wind_speed;
            wind_degrees.innerHTML = response.wind_degrees;
            sunrise.innerHTML = response.sunrise;
            sunset.innerHTML = response.sunset;
        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shangai', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        sh_cloud.innerHTML = response.cloud_pct;
        sh_temp.innerHTML = response.temp;
        sh_feels.innerHTML = response.feels_like;
        sh_humid.innerHTML = response.humidity;
        sh_min.innerHTML = response.min_temp;
        sh_max.innerHTML = response.max_temp;
        sh_speed.innerHTML = response.wind_speed;
        sh_degrees.innerHTML = response.wind_degrees;
        sh_rise.innerHTML = response.sunrise;
        sh_set.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        lo_cloud.innerHTML = response.cloud_pct;
        lo_temp.innerHTML = response.temp;
        lo_feels.innerHTML = response.feels_like;
        lo_humid.innerHTML = response.humidity;
        lo_min.innerHTML = response.min_temp;
        lo_max.innerHTML = response.max_temp;
        lo_speed.innerHTML = response.wind_speed;
        lo_degrees.innerHTML = response.wind_degrees;
        lo_rise.innerHTML = response.sunrise;
        lo_set.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        ko_cloud.innerHTML = response.cloud_pct;
        ko_temp.innerHTML = response.temp;
        ko_feels.innerHTML = response.feels_like;
        ko_humid.innerHTML = response.humidity;
        ko_min.innerHTML = response.min_temp;
        ko_max.innerHTML = response.max_temp;
        ko_speed.innerHTML = response.wind_speed;
        ko_degrees.innerHTML = response.wind_degrees;
        ko_rise.innerHTML = response.sunrise;
        ko_set.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        bo_cloud.innerHTML = response.cloud_pct;
        bo_temp.innerHTML = response.temp;
        bo_feels.innerHTML = response.feels_like;
        bo_humid.innerHTML = response.humidity;
        bo_min.innerHTML = response.min_temp;
        bo_max.innerHTML = response.max_temp;
        bo_speed.innerHTML = response.wind_speed;
        bo_degrees.innerHTML = response.wind_degrees;
        bo_rise.innerHTML = response.sunrise;
        bo_set.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));