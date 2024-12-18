# Product Page
This repository contains the code for a simple HTML product page that displays a product with image 
switching functionality, size and color selection, and a "Buy now" button. 
The page also has a responsive layout, a built-in gallery feature, and uses JavaScript to update the 
product image based on user input.

## Features
* Image Gallery: Users can view multiple images of the product by clicking on buttons below the product image.
* Dynamic Size and Color Selection: Users can select the product size and color using radio buttons.
* Quantity Selection: Users can specify the quantity they want to purchase.
* JavaScript Interaction: The gallery feature is interactive, updating the main product image when different buttons are clicked.

## Structure
The page has a layout divided into:

* Gallery Section: Contains the main product image with controls to switch images.
* Details Section: Contains product details (price, discount), size and color options, and a quantity input with a "Buy now" button.

## Setup
- Prerequisites
* A basic web server or a browser to view HTML files.
- Steps
1. Clone or download the repository.
2. Open product.html in a web browser.
   
## Usage
1. Open the HTML file in a browser.
2. Click on the buttons under the main image to switch between different product images.
3. Select the desired size and color using the radio buttons.
4. Enter the desired quantity and click "Buy now" to simulate a purchase action.

## Technologies
* HTML: For structure and layout.
* CSS: For styling and responsive design.
* JavaScript: For interactive elements like image switching.
* FontAwesome: For icons.
* Google Fonts: To import the Quicksand font.

## File Descriptions
* product.html: The main HTML file containing the structure of the product page.
* styles/product.css: The CSS file that styles the page, making it responsive and visually appealing.
* scripts/product.js: JavaScript file (if further separated) to handle interactions like updating the main image in the gallery when different controls are clicked.

## Code Highlights
JavaScript for Image Switching
In the <script> tag of the HTML file, a JavaScript function is written to handle the gallery image switching functionality. This code dynamically updates the src attribute of the productImg element based on the selected button and adds an active class for visual feedback.

This readme provides an overview and guide to using the product page. For additional customization, adjust the CSS and JavaScript files as needed.
