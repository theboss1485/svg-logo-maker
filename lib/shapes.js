
/* This is the parent Shape class and it isn't meant to be instantiated.  This is evidenced by the error that is thrown if the 
render() method of the Shape class is called. Each Shape passes back the XPosition, YPosition, and fillColor parameters to the 
parent Shape class for instantiation.*/
class Shape{

    constructor(XPosition, YPosition, fillColor){

        this.XPosition = XPosition;
        this.YPosition = YPosition;
        this.fillColor = fillColor;
    }

    render(){

    throw new Error("You have called the render() method of the parent Shape class. Please try again.");
    }


    /* I implemented a setColor method on each shape class precisely because of the example test given in the test instructions.
    The instructions said that the example test should pass. */
    setColor(fillColor){

        this.fillColor = fillColor;
    }
}

/* For the circle class, the XPosition and YPosition parameters are used as the center of the circle. */
class Circle extends Shape{

    constructor(XPosition = 150, YPosition = 100, fillColor = "blue", radius = 80){
        super(XPosition, YPosition, fillColor);
        this.radius = radius;
    }
    
    render(){

       return `<circle cx="${this.XPosition}" cy="${this.YPosition}" fill="${this.fillColor}" r="${this.radius}"/>`
    }

    setColor(fillColor){

        super.setColor(fillColor);
    }
}

// For the Rectangle class, the XPosition and YPosition parameters are used as the top left corner of the shape.
class Rectangle extends Shape{

    constructor(XPosition = ((300 - 188) / 2), YPosition = ((200 - 164) / 2), fillColor = "red", width = 188, height = 164){
        super(XPosition, YPosition, fillColor);
        this.width = width;
        this.height = height;
    }
    render(){

        return `<rect x="${this.XPosition}" y="${this.YPosition}" width="${this.width}" height="${this.height}" fill="${this.fillColor}"/>`
    }

    setColor(fillColor){

        super.setColor(fillColor);
    }
}

// For the Rectangle class, the XPosition and YPosition parameters are used in the calculation of the three points.
class Triangle extends Shape{

    constructor(XPosition = ((300 - 188) / 2), YPosition = ((200 - 164) / 2), fillColor = "green", width = 188, height = 164){
        super(XPosition, YPosition, fillColor);
        this.width = width;
        this.height = height;
    }
    render(){
        return `<polygon points="${300 / 2}, ${this.YPosition} ${this.width + this.XPosition}, ${this.height + this.YPosition} ${this.XPosition}, ${200 - this.YPosition}" fill="${this.fillColor}" />`
    }
    
    setColor(fillColor){

        super.setColor(fillColor);
    }

}

/* The Shape class is exported for testing purposes, and the three child shape classes are exported
for the purposes of the main program file, index.js.*/
module.exports = { Shape, Circle, Rectangle, Triangle};