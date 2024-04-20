# Questions
This file contains two JavaScript solutions to create an interactive FAQ section for your website. 
Both solutions utilize JavaScript to toggle the visibility of answers to questions when 
the corresponding question button is clicked. Below is a brief explanation of each solution 
along with instructions on how to use them.

# Solution 1
## Description
The firs solution selects all question elements but individually attaches event listeners to each question. When a question button is clicked, it first removes the show-text class from all other question elements to ensure only one answer is visible at a time. Then, it toggles the show-text class on the clicked question, showing or hiding its answer.

## How to Use
* Include the questions-1.js script in your HTML file.
* Ensure that your HTML structure matches the provided template, with each question having a button with the class question-btn and an answer container with the class question-text.
* Customize the questions and answers by modifying the HTML content within each <article class="question">.

# Solution 2
## Description
The second solution uses event delegation to handle click events on the question buttons. It selects all question buttons using document.querySelectorAll(".question-btn"), then attaches a click event listener to each button. When a button is clicked, it identifies its parent question element and toggles the class show-text on it, which controls the visibility of the answer.

## How to Use
* Include the questions-2.js script in your HTML file.
* Ensure that your HTML structure matches the provided template, with each question having a button with the class question-btn and an answer container with the class question-text.
* Customize the questions and answers by modifying the HTML content within each <article class="question">.
  
