const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const questions = [
    {
        type: "input",
        message: "1. Please enter any text for the logo (up to 3 characters): ",
        name: "text"
    },
    {
        type: "input",
        message: "2. Please provide a color for the text (use keywords OR a hexadecimal number): ",
        name: "text-color"
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
        name: "shape-color"
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
</svg>`;

        writeToFile(`./examples/${response.file}.svg`, svg);
    });
}

init();
