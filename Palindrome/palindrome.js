const textInputElement = document.getElementById("text-input");
const checkBtnElement = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome() {
  const textInputElement = document.getElementById("text-input");
  const resultDiv = document.getElementById("result");

  if (textInputElement.value === "") {
    alert("Please input a value");
  } else {
    const inputValue = textInputElement.value.toLowerCase().replace(/[^a-zA-Z]/g, '');
    const reversedValue = inputValue.split('').reverse().join('');
    
    if (inputValue === reversedValue) {
      resultDiv.textContent = `${textInputElement.value} is a palindrome`;
    } else {
      resultDiv.textContent = `${textInputElement.value} is not a palindrome`;
    }
  }
}

checkBtnElement.addEventListener('click', checkPalindrome);
