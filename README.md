# SVG Logo Maker Challenge - What's Your Shape?
  
## Description

Ever wanted to make your logos for your business?  Well now you can with this easy-to-use SVG logo maker application.  While the length of the text and the shapes are limited, it offers a wide variety of colors that can make your business stand out!  So why not give it a try today and see what you can make?

The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

        
## Installation

Please follow these commands for installation.

1. Clone the repo into your local system.

HTTPS:
```
git clone https://github.com/KitKatBar/svg-logo-maker-challenge.git
```

SSH:
```
git clone git@github.com:KitKatBar/svg-logo-maker-challenge.git
```

2. Download all the required modules for this application.

```
npm i
```

The above should install all the modules used in this application, but if it doesn't work you can do the installations separately using these commands below (make sure to do ALL of them).

```
npm i inquirer@8.2.4
```

```
npm i jest@24.9.0
```

```
npm i validate-color --save
```

## Usage

This project automatically generates a SVG logo consisting of text, text color, a shape and the shape color.  The user will be prompted with several questions for input.  To get test input, please see the [Tests](#tests) section of this README.

Additionally, I have provided a walkthrough video demonstrating how to use this program.  Click on [this link](https://drive.google.com/file/d/1ps7iYXFsbqvFB8ol70hnjE6tZt1LGvkB/view) to access the video.
        
## Credits

Licenses Badges & Links: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

Our instructor Drew Hoang for introducing us the Node.js and OOP this week.  He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was built using the MIT License. Please refer to the LICENSE in the repo for more information.
          
## How to Contribute

You can contribute to this project by suggesting or providing more shape options!

## Tests

In order to test this SVG logo generator, you can copy and paste these answers for their respective prompts.  The prompts have been numbered for your convenience.

  1. Please enter any text for the logo (up to 3 characters):
  ```
  SVG
  ```
  
  2. Please provide a color for the text (use keywords OR a hexadecimal number):
  ```
  white
  ```
  
  3. Please select a shape:
  ```
  Circle
  ```
  
  4. Please provide a color for the shape (use keywords OR a hexadecimal number):
  ```
  green
  ```
  
  5. Please provide a file name for your generated logo:
  ```
  circle (or feel free to call it whatever you want)
  ```
  
Included also are some test suites for your convenience.  They will test to make sure that the generated shape string returned matches the inputted values (text, text color and shape color).  These tests will also adjust the user input in case they enter, for example, lowercase for the text (adjusted to uppercase) and uppercase for the colors (adjusted to lowercase).  While this will not affect the generated SVG logo, it is good practice to maintain consistency for each of the parameters.  Additionally, there are also validation checks for user input, which includes making sure the user enters 3 characters or less for the text and checking whether the color entered is a valid color.

## Questions

This project was created by KitKatBar.
    
Click on [this link](https://github.com/KitKatBar) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: katriel_chiu@msn.com