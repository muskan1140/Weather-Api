let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityValue = document.getElementById("city");
let key = "e65718361f616ddf978d951dcd399c43";

//Function to fetch weather details from api and display them
let getWeather = async() =>  {
  let cityName = cityValue.value;
  if (cityName.length === 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  } 
  else {
    console.log("danish",cityName)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    await fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        cityValue.value = "";
        result.innerHTML = `<h2>${data.name}</h2>
        
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
            <div>
                <h4 class="title">min</h4>
                <h4 class="temp">${data.main.temp_min}&#176;</h4>
            </div>
            <div>
                <h4 class="title">max</h4>
                <h4 class="temp">${data.main.temp_max}&#176;</h4>
            </div>
        </div>
        `;
      })
      //If city name is NOT valid
      .catch(() => {
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
   }


  };
searchBtn.addEventListener("click", getWeather);
// window.addEventListener("load", getWeather);
