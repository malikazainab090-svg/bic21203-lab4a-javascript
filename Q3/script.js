const generateBtn = document.getElementById("generateBtn");
const numberListEl = document.getElementById("numberList");

function generateNumbers() {
  numberListEl.textContent = "";

  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberListEl.appendChild(listItem);
  }
}

generateBtn.addEventListener("click", generateNumbers);
