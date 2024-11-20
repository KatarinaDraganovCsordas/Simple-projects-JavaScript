# QR Code Generator
## Overview
This project is a simple web-based QR code generator. Users can input any text or URL 
and the application will generate a corresponding QR code using an external API. 
The project consists of HTML, CSS, and JavaScript files.

## Technologies Used
* HTML for structuring the web page.
* CSS for styling the interface.
* JavaScript for implementing the QR code generation logic.
* API: Uses the QRServer API to generate QR codes.

## How It Works
1. The user inputs a text or URL in the provided input box.
2. When the "Generate QR Code" button is clicked:
* If the input field is not empty, a QR code is generated using the QRServer API, and the generated QR code image is displayed on the web page.
* If the input field is empty, the input box will briefly flash with a red border to indicate an error.
3. The QR code image is displayed in the imgBox container.
