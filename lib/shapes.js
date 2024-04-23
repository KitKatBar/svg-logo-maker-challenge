// Shape Class
class Shape {
    // Takes in parameters of text, textColor and shapeColor
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    // Getter & Setter for shape color (get isn't necessary, but good practice to have)
    getColor() {
        return this.shapeColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    // Renderer for text and text color
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

// Circle Class - Shape is the parent class
class Circle extends Shape {
    // Call the parent constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // Renderer for the shape size and color
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

// Triangle Class - Shape is the parent class
class Triangle extends Shape {
    // Call the parent constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // Renderer for the shape size and color
    render() {
        return `<polygon points="150, 0 250, 173 50, 173" fill="${this.shapeColor}"/>`;
    }
}

// Square Class - Shape is the parent class
class Square extends Shape {
    // Call the parent constructor
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    // Renderer for the shape size and color
    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"/>`;
    }
}

// Helper function that creates the specified shape object based on the user selection
function createShapeObject(data) {
    switch(data.shape) {
        case "Circle":
            return new Circle(data.text.toUpperCase(), data.textColor.toLowerCase(), data.shapeColor.toLowerCase());
        case "Triangle":
            return new Triangle(data.text.toUpperCase(), data.textColor.toLowerCase(), data.shapeColor.toLowerCase());
        case "Square":
            return new Square(data.text.toUpperCase(), data.textColor.toLowerCase(), data.shapeColor.toLowerCase());
    }
}

// Export our classes and function to be used in the other file
module.exports = { Shape, Circle, Triangle, Square, createShapeObject };
