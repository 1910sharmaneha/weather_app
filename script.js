const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2de08d84d6mshe42000c4198117fp11fd31jsn1927a808992d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather =(city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {

		console.log(response)


		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset

	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")



const cities = ["Kolkota", "Mumbai", "Lucknow", "Jaipur", "Ahemdabad", "Hyderabad"];

// Function to update weather data for a given city
const updateWeatherData = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            // Update table cells with weather data for the city
            const cityRow = document.querySelector(`tr[data-city="${city}"]`);
            cityRow.querySelector(".cloud_pct").textContent = response.cloud_pct;
            cityRow.querySelector(".feels_like").textContent = response.feels_like;
            cityRow.querySelector(".humidity").textContent = response.humidity;
            cityRow.querySelector(".max_temp").textContent = response.max_temp;
            cityRow.querySelector(".min_temp").textContent = response.min_temp;
            cityRow.querySelector(".sunrise").textContent = response.sunrise;
            cityRow.querySelector(".sunset").textContent = response.sunset;
            cityRow.querySelector(".temp").textContent = response.temp;
            cityRow.querySelector(".wind_degrees").textContent = response.wind_degrees;
            cityRow.querySelector(".wind_speed").textContent = response.wind_speed;
        })
        .catch(err => console.error(err));
};

// Update weather data for each city
cities.forEach(city => {
    updateWeatherData(city);
});

