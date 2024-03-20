const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");


checkBtn.addEventListener("click", () => validatePhoneNumber());
clearBtn.addEventListener("click", () => clearResults());


const validatePhoneNumber = () => {
  const userInput = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");

  
    var phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-.\s]?)\d{3}([-.\s]?)\d{4}$/;

  
    if (userInput === "") {
        alert("Please provide a phone number.");
    } else if (phoneRegex.test(userInput)) {
        resultsDiv.innerText = "Valid US number: " + userInput;
    } else {
        resultsDiv.innerText = "Invalid US number: " + userInput;
    }
}


const clearResults = () => {
    userInput.value = "";
    resultsDiv.innerText = "";
}
