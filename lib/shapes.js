class Shape{

    constructor(XPosition, YPosition, fillColor){

        this.XPosition = XPosition;
        this.YPosition = YPosition;
        this.fillColor = fillColor;
    }

    render(){

        try{

            throw new Error("You have called the render() method of the parent Shape class." +
            "Please try again.");
        
        } catch(err){

            console.log(err.message)
        }
    }
}

class Circle extends Shape{

    constructor(XPosition, YPosition, fillColor, radius){
        super(XPosition, YPosition, fillColor);
        this.radius = radius;
    }
    
    render(){

       return `<circle cx="${this.XPosition}" cy="${this.YPosition}" fill="${this.fillColor}" r="${this.radius}"/>`
    }
}

class Rectangle extends Shape{

    constructor(XPosition, YPosition, fillColor, width, height){
        super(XPosition, YPosition, fillColor);
        this.width = width;
        this.height = height;
    }
    render(){

        return `<rect x="${this.XPosition}" y="${this.YPosition}" width="${this.width}" height="${this.height}" fill="${this.fillColor}"/>`
    }
}

class Triangle extends Shape{

    constructor(XPosition, YPosition, fillColor, width, height){
        super(XPosition, YPosition, fillColor);
        this.width = width;
        this.height = height;
    }
    render(){
        return `<polygon points="${this.XPosition},${this.height} ${this.width / 2},${this.YPosition} ${this.width},${this.height}" fill="${this.fillColor}"/>`
    } 

}

module.exports = { Shape, Circle, Rectangle, Triangle};