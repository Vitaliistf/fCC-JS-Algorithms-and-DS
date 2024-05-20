const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.onclick = checkForPalindrome;

function checkForPalindrome() {
  const input = textInput.value;
  if (input === "") {
    window.alert("Please input a value");
  } else if (isPalindrome(input)) {
    result.textContent = input + " is a palindrome";
    result.style.color = "#9fd3c7";
  } else {
    result.textContent = input + " is not a palindrome";
    result.style.color = "#f95959";
  }
}

function isPalindrome(input) {
  input = input.replace(/[^a-z\d]/gi, "").toLowerCase();
  return input === input.split("").reverse().join("");
}