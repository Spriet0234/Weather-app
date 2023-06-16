const btn = document.querySelector("#btn");
const temp1 = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const text = document.getElementById("textbox");

console.log(btn);
btn.addEventListener("click", () => {
  fetchApi(text.value);
  console.log("a");
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
      temp1.innerHTML = data.current.temp_f;
    });
};
