const checkBtn = document.getElementById("check-btn");
const userInput = document.getElementById("user-input");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  const input = userInput.value;
  if (input === "") {
    alert("Please provide a phone number");
  } else {
    resultsDiv.textContent = telephoneCheck(input) ? `Valid US number: ${input}` : `Invalid US number: ${input}`;
  }
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

const REGEXES = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\)\s{1}\d{3}-\d{4}$/,
    /^\d{3}\s{1}\d{3}\s{1}\d{4}$/,
    /^\d{10}$/,
    /^1{1}\s{1}\d{3}\s{1}\d{3}\s{1}\d{4}$/,
    /^1{1}\s{1}\(\d{3}\)\s{1}\d{3}-\d{4}$/,
    /^1{1}\(\d{3}\)\d{3}-\d{4}$/,
    /^1{1}\s{1}\d{3}-\d{3}-\d{4}$/,
  ];

function telephoneCheck(str) {
  for (let i = 0; i < REGEXES.length; i++) {
    if (REGEXES[i].test(str) !== false) {
      return true;
    }
  }
  return false;
}
