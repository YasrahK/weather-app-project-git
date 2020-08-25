function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let cityTyped = document.querySelector("#city-display");
    cityTyped.innerHTML = `${response.data.name}`;
    let tempDisplay = document.querySelector("#current-temperature");
    tempDisplay.innerHTML = `${temperature}°C`;
    let description = document.querySelector("#description");
    description.innerHTML = response.data.weather[0].description;
    let wind = document.querySelector("#wind-speed");
    let humidity = document.querySelector("#humidity");
    let visibility = document.querySelector("#visibility");
    let feelsLike = document.querySelector("#feels-like");
  
    wind.innerHTML = `Wind Speed <br /> ${Math.round(
      response.data.wind.speed
    )}m/s`;
    humidity.innerHTML = `Humidity <br /> ${response.data.main.humidity}%`;
    visibility.innerHTML = `Visibility <br /> ${response.data.sys.visibility}mi`;
    feelsLike.innerHTML = `Feels Like <br /> ${response.data.main.feels_like}°`;
  }
  function search(city) {
    let units = "metric";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemp);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    let currentCity = document.querySelector("#input-place").value;
    search(currentCity);
  }
  
  let selectCity = document.querySelector("#search-city");
  selectCity.addEventListener("submit", handleSubmit);
  search("Chicago");
  //Bonus
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let units = "metric";
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  
    axios.get(apiUrl).then(showTemp);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let button = document.querySelector("#current-location");
  button.addEventListener("click", getCurrentLocation);
  
  /*function cityName(event) {
    event.preventDefault();
    let searchValue = document.querySelector("#input-place");
    let h1 = document.querySelector("#city-display");
    if (searchValue.value) {
      h1.innerHTML = `${searchValue.value} <br /> Partly Cloudy <br />`;
    } else {
      alert("please enter the city");
    }
  }
  let selectCity = document.querySelector("#search-city");
  selectCity.addEventListener("submit", cityName);
  */
  //feature 1
  
  let currentDate = new Date();
  let dateTime = document.querySelector("#display-date");
  let date = currentDate.getDate();
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[currentDate.getDay()];
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[currentDate.getMonth()];
  dateTime.innerHTML = `${day} <br /> ${month} ${date}, ${year} <br /> ${hours}:${minutes}`;
  
  //feature 3(bonus)
  
  /*function changeCelcius(event) {
    event.preventDefault();
  
    let fTemp = document.querySelector("#current-temperature");
    let weatherUnit = document.querySelector("#weather-unit");
    let cConversion = Math.round(((fTemp.innerHTML - 32) * 5) / 9);
    fTemp.innerHTML = `${cConversion}`;
    weatherUnit.innerHTML = "C";
  
    let celciusButton = document.querySelector("#celcius");
    celciusButton.style.display = "none";
    fahrenheitButton.style.display = "inline-block";
  }
  
  let celciusButton = document.querySelector("#celcius");
  celciusButton.addEventListener("click", changeCelcius);
  
  //////////////////////////////////////////////
  
  function changeFahrenheit(event) {
    event.preventDefault();
  
    let cTemp = document.querySelector("#current-temperature");
    let weatherUnit = document.querySelector("#weather-unit");
    let fConversion = Math.round(((cTemp.innerHTML - 32) * 5) / 9);
    cTemp.innerHTML = `${fConversion}`;
    weatherUnit.innerHTML = "F";
  
    celciusButton.style.display = "inline-block";
    fahrenheitButton.style.display = "none";
  }
  
  let fahrenheitButton = document.querySelector("#fahrenheit");
  fahrenheitButton.addEventListener("click", changeFahrenheit);*/
  