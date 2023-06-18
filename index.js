const btn = document.querySelector("#btn");
const temp1 = document.getElementById("temp1");
const temp2 = document.getElementById("temp2");
const input = document.getElementById("textbox");
const cityText = document.getElementById("city");
const image = document.getElementById("image");
const condition = document.getElementById("condition");

const successCallback = (position) => {
  console.log(position);
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  fetchApi(`${position.coords.latitude},${position.coords.longitude}`);
};

const errCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function errorCallback(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchApi(input.value);
    console.log("a");
  }
});

var obj;
const fetchApi = (a) => {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=212c89b60bc64680b47191900231606&q=${a}&aqi=no`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.current);
      temp1.innerHTML = `${data.current.temp_f} F`;
      temp2.innerHTML = `${data.current.temp_c} C`;
      cityText.innerHTML = `${data.location.name}, ${data.location.region}`;
      console.log(data.current.condition.icon);
      image.src = data.current.condition.icon;
      condition.innerHTML = data.current.condition.text;
    });
};
