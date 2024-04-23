// Include packages needed for this application
const { Circle, Triangle, Square, createShapeObject } = require('./shapes.js');
const validateColor = require('validate-color').default;

// Test Suite for Circle Class
describe('Circle', () => {
    it('should return a string with the fill=setColor() parameter', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });

    it('should return a string with the fill=setColor() in lowercase', () => {
        const data = {
            text: "",
            textColor: "",
            shape: "Circle",
            shapeColor: "GREEN"
        }

        const shape = createShapeObject(data);
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });

    it('should return a string with the fill=textColor and text parameters', () => {
        const shape = new Circle("SVG", "white", "");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
    });

    it('should return a string with the fill=textColor in lowercase and text in uppercase', () => {
        const data = {
            text: "svg",
            textColor: "WHITE",
            shape: "Circle",
            shapeColor: ""
        }

        const shape = createShapeObject(data);
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
    });
})

// Test Suite for Triangle Class
describe('Triangle', () => {
    it('should return a string with the fill=setColor() parameter', () => {
        const shape = new Triangle();
        shape.setColor("black");
        expect(shape.render()).toEqual('<polygon points="150, 0 250, 173 50, 173" fill="black"/>');
    });

    it('should return a string with the fill=setColor() in lowercase', () => {
        const data = {
            text: "",
            textColor: "",
            shape: "Triangle",
            shapeColor: "BLACK"
        }

        const shape = createShapeObject(data);
        expect(shape.render()).toEqual('<polygon points="150, 0 250, 173 50, 173" fill="black"/>');
    });

    it('should return a string with the fill=textColor and text parameters', () => {
        const shape = new Triangle("SVG", "white", "");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
    });

    it('should return a string with the fill=textColor in lowercase and text in uppercase', () => {
        const data = {
            text: "svg",
            textColor: "YELLOW",
            shape: "Triangle",
            shapeColor: ""
        }

        const shape = createShapeObject(data);
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">SVG</text>');
    });
})

// Test Suite for Square Class
describe('Square', () => {
    it('should return a string with the fill=setColor() parameter', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="75" y="30" width="150" height="150" fill="blue"/>');
    });

    it('should return a string with the fill=setColor() in lowercase', () => {
        const data = {
            text: "",
            textColor: "",
            shape: "Square",
            shapeColor: "BLUE"
        }

        const shape = createShapeObject(data);
        expect(shape.render()).toEqual('<rect x="75" y="30" width="150" height="150" fill="blue"/>');
    });

    it('should return a string with the fill=textColor and text parameters', () => {
        const shape = new Square("SVG", "red", "");
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>');
    });

    it('should return a string with the fill=textColor in lowercase and text in uppercase', () => {
        const data = {
            text: "svg",
            textColor: "RED",
            shape: "Square",
            shapeColor: ""
        }

        const shape = createShapeObject(data);
        expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">SVG</text>');
    });
})
