const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe2ef0f6bamsh050853be54bdd42p1f8f47jsn5eb89a8cb03b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

var video1=document.getElementById('video1');
video1.onended = function (){
    video1.onplay();
    video1.style.opacity=0;
    video1.style.opacity=1;
}
const getWeather=(city)=>{
    cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {

    console.log(response)

 temp.innerHTML = response.temp
 temp2.innerHTML = response.temp
 feels_like.innerHTML = response.feels_like
 humidity.innerHTML = response.humidity
 humidity2.innerHTML = response.humidity
 min_temp.innerHTML = response.min_temp
 max_temp.innerHTML= response.max_temp
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
