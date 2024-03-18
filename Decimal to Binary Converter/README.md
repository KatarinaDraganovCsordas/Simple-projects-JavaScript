# Decimal to Binary Converter
This project is a simple web application that converts decimal numbers to 
binary using a recursive algorithm. It provides a visual representation 
of the recursive process through a call stack animation.

## How to Use
1. Input a decimal number in the provided text field.
2. Click the "Convert" button or press Enter.
3. The binary equivalent of the input decimal number will be displayed in the result section.
4. Optionally, for the input value of 5, a call stack animation will be shown
   to visualize the recursive process.

## Algorithm Explanation
The conversion algorithm implemented in this project utilizes a recursive function called decimalToBinary(input). It works as follows:

* If the input is either 0 or 1, it returns the string representation of the input.
* Otherwise, it recursively calls itself with the floor division of the input divided by 2 and concatenates the remainder of the input divided by 2 to the result of the recursive call.
* This process continues until the base case is reached (input equals 0 or 1), and the binary representation is built by concatenating remainders during the recursive backtracking.


  Feel free to reach out with any questions, feedback, or suggestions!
