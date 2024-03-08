
function proseccNumeral(result, symbol, symbolValue) {
  while(result.value >= symbolValue) {
    result.numeral += symbol;
    result.value -= symbolValue;
  }
}

function convertToRoman(number) {
  let result = {
    value: number,
    numeral: ""
  };

  proseccNumeral(result, "M", 1000);
  proseccNumeral(result, "CM", 900);
  proseccNumeral(result, "D", 500);
  proseccNumeral(result, "CD", 400);
  proseccNumeral(result, "C", 100);
  proseccNumeral(result, "XC", 90);
  proseccNumeral(result, "L", 50);
  proseccNumeral(result, "XL", 40);
  proseccNumeral(result, "X", 10);
  proseccNumeral(result, "IX", 9);
  proseccNumeral(result, "V", 5);
  proseccNumeral(result, "IV", 4);
  proseccNumeral(result, "I", 1);

  return result.numeral;
}


function convertAndDisplay() {
  const inputElement = document.getElementById('numberInput');
  const resultElement = document.getElementById('result');

  const inputValue = parseInt(inputElement.value);

  if (!isNaN(inputValue)) {
    const romanNumeral = convertToRoman(inputValue);

    resultElement.textContent = `Roman Numeral: ${romanNumeral}`;
  }
}


let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
