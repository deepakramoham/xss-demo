const input = document.getElementById("my-input");
const button = document.getElementById("btn");
const display = document.getElementById("display");

button.addEventListener("click", () => {
  display.innerHTML = input?.value;
});
