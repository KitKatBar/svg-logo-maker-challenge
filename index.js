const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');
const validateColor = require('validate-color').default;

const questions = [
    {
        type: "input",
        message: "1. Please enter any text for the logo (up to 3 characters): ",
        name: "text",
        validate: async (text) => {
            if (text.length > 3) {
                return 'Please do not enter more than 3 characters!';
            }

            return true;
        }
    },
    {
        type: "input",
        message: "2. Please provide a color for the text (use keywords OR a hexadecimal number): ",
        name: "textColor",
        validate: async (textColor) => {
            if (!validateColor(textColor)) {
                return 'Please enter a valid color!';
            }

            return true;
        }
    },
    {
        type: "list",
        message: "3. Please select a shape: ",
        name: "shape",
        choices: [
            "Circle",
            "Triangle",
            "Square"
            ]
    },
    {
        type: "input",
        message: "4. Please provide a color for the shape (use keywords OR a hexadecimal number): ",
        name: "shapeColor",
        validate: async (shapeColor) => {
            if (!validateColor(shapeColor)) {
                return 'Please enter a valid color!';
            }

            return true;
        }
    },
    {
        type: "input",
        message: "5. Please provide a file name for your generated logo: ",
        name: "file"
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Logo successfully generated!")
    );
}

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Generating logo ...");
        const shape = shapes.createShapeObject(response);

        const svg = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${shape.render()}
    ${shape.renderText()}
</svg>`.trim();

        writeToFile(`./examples/${response.file}.svg`, svg);
    });
}

init();
