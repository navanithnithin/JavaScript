let a = 10;
let b = 20;
const result = a + b;

// async function getData() {
//   let resultFromServer = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   console.log(await resultFromServer.json());
// }
// console.log(getData());
// console.log(result);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(result);

// const button = document.getElementById("SearchButton");
// const input = document.getElementById("city-input");

// async function getData(data) {
//   const promise = fetch("https://jsonplaceholder.typicode.com/users");
//   return await promise.jsom();
// }

// button.addEventListener("click", async () => {
//   const value = input.value;
//   const result = await getData(value);
//   console.log(result);
// });

localStorage.setItem("name", "Nithin");
const h4Tag = document.getElementById("h4tag");
window.addEventListener("load", () => {
  h4Tag.innerText = localStorage.getItem("name");
});

const getLocation = document.getElementById("locationBtn");
const output = document.getElementById("output");

function gotLocation(position) {
  console.log(position);
}
function failedToGet() {
  console.log("There was a issue");
}
getLocation.addEventListener("click", async () => {
  const result = navigator.geolocation.getCurrentPosition(
    gotLocation,
    failedToGet
  );
});
(() => console.log("i am nitin"))();
