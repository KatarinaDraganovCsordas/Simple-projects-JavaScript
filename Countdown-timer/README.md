# Countdown timer project
This project implements a simple countdown timer for a giveaway event. It dynamically calculates 
the time remaining until a specified future date and updates the countdown display in real-time. 
When the countdown reaches zero, it displays an expiration message.


## File structure
countdown-timer/
├── countdown-timer.html
├── styles/
│   └── countdown-timer.css
└── scripts/
    └── countdown-timer.js

## Customization
To customize the countdown timer for your own event:

1. Modify the future date in countdown-timer.js:
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
Change the parameters of the Date object to your desired future date and time.

2. Update the giveaway text in index.html:
<h3>OLD FURNITURE GIVEAWAY</h3>
