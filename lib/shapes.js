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
        return `<polygon points="0, 0 150, 260 300, 0"  fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<rect x="50" y="10" width="200" height="200"  fill="${this.shapeColor}"/>`;
    }
}

function createShapeObject(data) {
    switch(data.shape) {
        case "Circle":
            return new Circle(data["text"], data["text-color"], data["shape-color"]);
        case "Triangle":
            return new Triangle(data["text"], data["text-color"], data["shape-color"]);
        case "Square":
            return new Square(data["text"], data["text-color"], data["shape-color"]);
    }
}

module.exports = { Shape, createShapeObject };
