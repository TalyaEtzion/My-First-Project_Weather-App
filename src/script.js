let now = new Date();
let hour = now.getHours();
if (hour < 10) {
  hours = `0${hour}`;
}
let minutes = now.getMinutes();
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
  "Saturday",
];
let day = days[now.getDay()];
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hour}:${minutes}`;

function search(city) {
  let apiKey = "4244207618e94ad6ef8d06296ce334b6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let feelsLikeElement = document.querySelector("#feels-like");
  let iconElement = document.querySelector("#icon");

  celsiusTemperature = response.data.main.temp;
  celsiusFeelsTemperature = response.data.main.feels_like;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  descriptionElement.innerHTML = response.data.weather[0].description;
  feelsLikeElement.innerHTML = Math.round(response.data.main.feels_like);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

function displayFahrenheitFeels(event) {
  event.preventDefault();
  let feelsLikeElement = document.querySelector("#feels-like");
  celsiusFeelsLink.classList.remove("active");
  fahrenheitFeelsLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  feelsLikeElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusFeels(event) {
  event.preventDefault();
  celsiusFeelsLink.classList.add("active");
  fahrenheitFeelsLink.classList.remove("active");
  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = Math.round(celsiusFeelsTemperature);
}

let fahrenheitFeelsLink = document.querySelector("#fahrenheit-feels-link");
fahrenheitFeelsLink.addEventListener("click", displayFahrenheitFeels);

let celsiusFeelsLink = document.querySelector("#celsius-feels-link");
celsiusFeelsLink.addEventListener("click", displayCelsiusFeels);

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-bar");
  search(cityInputElement.value);
  cityInputElement.value = cityInputElement.value.trim();
  cityInputElement.value = cityInputElement.value.toUpperCase();

  if (cityInputElement.value) {
    cityInputElement.innerHTML = `${cityInputElement.value}`;
  } else {
    cityInputElement.innerHTML = null;
    alert("Please type a city");
  }
}

let form = document.querySelector(".form-group");
form.addEventListener("submit", handleSubmit);

let celsiusTemperature = null;
search("Luzerne");
