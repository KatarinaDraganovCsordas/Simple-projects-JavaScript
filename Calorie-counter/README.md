# Calorie Counter

This simple JavaScript application allows users to track their daily calorie intake and expenditure. 
Users can input their daily budget, add entries for meals and snacks 
and track exercise to calculate the remaining calories in their budget. 
The application provides information on the surplus or deficit of consumed calories, 
as well as a breakdown of budgeted, consumed, and burned calories.

## Features
* Add Entry: Users can add entries for meals, snacks, and exercise by selecting
  the appropriate category from the dropdown menu and clicking the "Add Entry" button.
  This dynamically adds input fields for entry name and calories.

* Calculate Calories: After entering the necessary information,
  users can click the "Calculate Calories" button to compute the remaining
  calories based on their budget, consumed calories, and burned calories through exercise.

* Clear Form: The "Clear Form" button allows users to reset the form,
  clearing all input fields and results.

## Input Validation
The application performs input validation to ensure the accuracy of entered data. 
Invalid inputs, such as exponential notation (e.g., 1e5), trigger an alert message, 
preventing calculation errors.

## Usage
1. Enter your daily calorie budget in the provided input field.
2. Use the dropdown menu to select the category (e.g., breakfast, lunch, dinner, snacks, exercise).
3. Click the "Add Entry" button to add entry fields for the selected category.
4. Enter the name and calories for each entry.
5. Repeat the process for additional entries.
6. Click the "Calculate Calories" button to see the remaining calories and other information.
7. To start over, click the "Clear Form" button.
   
## Notes
The application uses simple HTML, CSS, and JavaScript.
Ensure to enter valid numerical values for calories, and avoid using exponential notation.
The application dynamically updates the UI based on user input.
Feel free to customize and enhance the code according to your needs. Happy calorie tracking!
