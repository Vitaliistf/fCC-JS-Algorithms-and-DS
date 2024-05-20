const convertBtn = document.getElementById("convert-btn");
const number = document.getElementById("number");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => getResult());

const getResult = () => {
  const input = number.value;
  console.log(input);
  if (input === "") {
    output.innerText = "Please enter a valid number";
  } else {
    const num = parseInt(input);
    if (num < 1) {
      output.innerText = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
    } else {
      output.innerText = convertToRoman(num);
    }
  }
}

function convertToRoman(num) {
  let result = "";
  while (num > 0) {
    if (num / 1000 >= 1) {
      result += "M";
      num -= 1000;
    } else if (num / 900 >= 1) {
      result += "CM";
      num -= 900;
    } else if (num / 500 >= 1) {
      result += "D";
      num -= 500;
    } else if (num / 400 >= 1) {
      result += "CD";
      num -= 400;
    } else if (num / 100 >= 1) {
      result += "C";
      num -= 100;
    } else if (num / 90 >= 1) {
      result += "XC";
      num -= 90;
    } else if (num / 50 >= 1) {
      result += "L";
      num -= 50;
    } else if (num / 40 >= 1) {
      result += "XL";
      num -= 40;
    } else if (num / 10 >= 1) {
      result += "X";
      num -= 10;
    } else if (num / 9 >= 1) {
      result += "IX";
      num -= 9;
    } else if (num / 5 >= 1) {
      result += "V";
      num -= 5;
    } else if (num / 4 >= 1) {
      result += "IV";
      num -= 4;
    } else if (num / 1 >= 1) {
      result += "I";
      num -= 1;
    }
  }
  return result;
}