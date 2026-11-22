const messageEl = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

function changeMessage() {
  messageEl.textContent = "Hello there!";
}

changeBtn.addEventListener("click", changeMessage);
