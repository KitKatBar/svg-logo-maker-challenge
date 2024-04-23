class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    getColor() {
        return this.shapeColor;
    }

    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<polygon points="150, 0 250, 173 50, 173" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<rect x="75" y="30" width="150" height="150" fill="${this.shapeColor}"/>`;
    }
}

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

module.exports = { Shape, Circle, Triangle, Square, createShapeObject };
