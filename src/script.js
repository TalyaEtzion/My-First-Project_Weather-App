let now = new Date();
console.log(now);
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
