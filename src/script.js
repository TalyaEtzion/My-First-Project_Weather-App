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

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let cityName = document.querySelector("#city");

  if (searchInput.value) {
    cityName.innerHTML = `${searchInput.value}`;
  } else {
    cityName.innerHTML = null;
    alert("Please type a city");
  }
}

let searchCity = document.querySelector(".form-group");
searchCity.addEventListener("submit", search);
