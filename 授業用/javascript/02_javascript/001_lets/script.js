const button = document.getElementById("toggle");
const box = document.getElementById("box");

let isPaddingOn = false;

button.addEventListener("click", () => {
  isPaddingOn = !isPaddingOn;
  render();
});

function render() {
  box.className = `box ${isPaddingOn ? "padding-on" : ""}`;
}
