# US Phone Number Validator
This is a simple web application for validating US phone numbers. It was created as part of the freeCodeCamp certification.

## How to Use
* Input Field: Enter the phone number you want to validate in the provided input field.
* Check Button: Click the "Check" button to validate the entered phone number.
* Clear Button: Click the "Clear" button to clear both the input field and the validation result.

## Functionality
1. The application validates whether the entered phone number follows the US phone number format.
2. It accepts various formats including with or without country code (1), parentheses, dashes, or spaces.
3. Upon validation, it displays whether the entered number is valid or invalid.

## Code Overview
1. The JavaScript code defines event listeners for the check and clear buttons.
2. The 'validatePhoneNumber' function checks if the entered phone number matches the US phone number format using a regular expression.
3. If the input is empty, it alerts the user to provide a phone number.
4. If the input matches the US phone number format, it displays "Valid US number" along with the entered number.
5. If the input does not match the US phone number format, it displays "Invalid US number" along with the entered number.
6. The 'clearResults' function clears both the input field and the result display.

## Contribution
Contributions to this project are welcome. Feel free to submit issues or pull requests.


