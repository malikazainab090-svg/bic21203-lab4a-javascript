const userInputEl = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

function checkInput() {
  const trimmedValue = userInputEl.value.trim();

  if (trimmedValue === "") {
    resultEl.textContent = "Please enter a valid number!";
    return;
  }

  const numberValue = Number(trimmedValue);

  if (Number.isNaN(numberValue)) {
    resultEl.textContent = "Please enter a valid number!";
  } else if (numberValue < 10) {
    resultEl.textContent = "The number is lower than 10";
  } else if (numberValue > 10) {
    resultEl.textContent = "The number is higher than 10";
  } else {
    resultEl.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);
