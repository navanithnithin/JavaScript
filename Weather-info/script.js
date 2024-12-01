const button = document.getElementById("SearchButton");
const input = document.getElementById("city-input");

async function getData(data) {
  const promise = fetch("https://jsonplaceholder.typicode.com/users");
  return await promise.jsom();
}

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
});
