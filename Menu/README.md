# Menu Project

## Overview
This project creates a responsive menu interface using HTML, CSS, and JavaScript. 
The menu allows users to filter items by category (All, Breakfast, Lunch, Shakes) and 
dynamically displays the items based on the selected category.

## Features
* Responsive design suitable for various screen sizes.
* Dynamic menu item display based on selected category.
* Stylish user interface with custom fonts and icons.
* Filter buttons to switch between different categories of menu items.

## Technologies Used
* HTML
* CSS
* JavaScript
* Google Fonts
* Font Awesome

## Usage
1. Open the Menu Page:
 Open menu.html in your preferred web browser.
2. Filter Menu Items:
 Click on the filter buttons (All, Breakfast, Lunch, Shakes) to view menu items of the selected category.

## Customization
1. Adding New Menu Items
Update the menu array in menu.js:

const menu = [{
id: 1,
title: "buttermilk pancakes",
category: "breakfast",
price: 15.99,
img: "./img/item-2.jpeg",
desc: `Descripion of the item`},

// Add new items here
];

2. Modifying Styles
CSS:
Edit the menu.css file in the styles directory to customize the look and feel of the menu.

3. Changing Fonts and Icons
* Google Fonts:
Modify the <link> tag in the <head> section of index.html to include different fonts from Google Fonts.
* Font Awesome:
Update the <script> tag in the <head> section to include a different version of Font Awesome if needed.
