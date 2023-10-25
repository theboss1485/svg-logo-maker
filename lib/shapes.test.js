const { Shape, Triangle, Circle, Rectangle } = require('./shapes');


/*For the Shape class, I test a created Shape object to make sure that it was actually a Shape object.
I then test the fill color on two different shape objects and the setColor() method on those two Shape
objects.  I also test the XPosition and YPosition properties to make sure they were correct.  I test
the render() method on the Shape class to make sure it throws an error.*/
describe("Testing Shape class", () => {

    let newShape = new Shape(25, 25, "blue");
    let newShape2 = new Shape(25, 25, "green");

    it("tests a new instance of a Shape object to make sure it is a Shape object", () => {
        
        expect(newShape).toBeInstanceOf(Shape);
    });

    it("tests the fill color on the first new Shape instance", () => {
    
        expect(newShape.fillColor).toEqual('blue');
    }); 

    
    it("tests the setColor() method on the first new Shape instance", () => {
    
        newShape.setColor('red');
        expect(newShape.fillColor).toEqual('red');
    }); 

    it("tests a fill color on the second new Shape instance", () => {
    
        expect(newShape2.fillColor).toEqual('green');
    }); 

    it("tests a fill color on the second new Shape instance", () => {
    
        newShape2.setColor('yellow');
        expect(newShape2.fillColor).toEqual('yellow');
    }); 

    it("tests the X Position on the first new Shape instance", () => {
    
        expect(newShape.XPosition).toEqual(25);
    }); 

    it("tests the Y Position on the first new Shape instance", () => {
    
        expect(newShape.YPosition).toEqual(25);
    }); 

    it("tests the Shape render() method", () => {

        let callBackFunction = () => newShape.render();

        let err = new Error("You have called the render() method of the parent Shape class. Please try again.")

        expect(callBackFunction).toThrow(err);
    });
});



/* For the Circle class, I ran most of the same tests as I did for the Shape class, except I also 
tested the Circle class's radius property. For the render() method test, I tested that the Circle class
returns an actual <circle> element, rather than just throwing an error.*/
describe("testing Circle Class methods", () => {

    let newCircle = new Circle(150, 100, "blue", 100);
    let newCircle2 = new Circle(150, 100, "green", 100);

    it("creates a new instance of a Circle object", () => {

        expect(newCircle).toBeInstanceOf(Circle);
    });

    it("sets a fill color on the first new circle", () => {

        expect(newCircle.fillColor).toEqual('blue');
    });

    it("tests the setColor() method on the first new instance", () => {
    
        newCircle.setColor('red');
        expect(newCircle.fillColor).toEqual('red');
    }); 

    it("tests a fill color on the second new circle", () => {
    
        expect(newCircle2.fillColor).toEqual('green');
    }); 

    it("tests the setColor() on the second new circle", () => {
    
        newCircle2.setColor('yellow');
        expect(newCircle2.fillColor).toEqual('yellow');
    }); 

    it("tests the X Position on the first new circle", () => {
    
        expect(newCircle.XPosition).toEqual(150);
    }); 

    it("tests the Y Position on the first new circle", () => {
    
        expect(newCircle.YPosition).toEqual(100);
    }); 

    it("tests the radius on the first new circle", () => {
    
        expect(newCircle.radius).toEqual(100);
    }); 

    it("tests the Circle render() method", () => {

        expect(newCircle.render()).toBe(`<circle cx="150" cy="100" fill="red" r="100"/>`)
    });

    it("gives a test that is slightly similar to the example test from the Module 10 Challenge instructions", () => {

        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" fill="green" r="80"/>');
    });
});


/* Similar to the Circle class, for the Rectangle class, I ran most of the same tests as I did for the Shape class, except I also 
tested the Rectangle class's width and height properties. For the render() method test, I tested that 
the Circle class returns the proper <rect> element, rather than just throwing an error.*/
describe("testing Rectangle Class methods", () => {

    let newRectangle = new Rectangle(0, 0, "blue", 300, 200);
    let newRectangle2 = new Rectangle(0, 0, "green", 300, 200);

    it("creates a new instance of a Rectangle object", () => {

        expect(newRectangle).toBeInstanceOf(Rectangle);
    }); 

    it("sets a fill color on the first new rectangle", () => {

        expect(newRectangle.fillColor).toEqual('blue');
    });

    it("tests the setColor() method on the first new rectangle", () => {
    
        newRectangle.setColor('red');
        expect(newRectangle.fillColor).toEqual('red');
    }); 

    it("tests a fill color on the second new rectangle", () => {
    
        expect(newRectangle2.fillColor).toEqual('green');
    }); 

    it("tests the setColor() method on the second new rectangle", () => {
    
        newRectangle2.setColor('yellow');
        expect(newRectangle2.fillColor).toEqual('yellow');
    }); 

    it("tests the X Position on the first new rectangle", () => {
    
        expect(newRectangle.XPosition).toEqual(0);
    }); 

    it("tests the Y Position on the first new rectangle", () => {
    
        expect(newRectangle.YPosition).toEqual(0);
    }); 

    it("tests the width of the first new rectangle", () => {
    
        expect(newRectangle.width).toEqual(300);
    }); 
    it("tests the height on the first new rectangle", () => {
    
        expect(newRectangle.height).toEqual(200);
    }); 

    it("tests the Rectangle render() method", () => {

        expect(newRectangle.render()).toBe(`<rect x="0" y="0" width="300" height="200" fill="red"/>`)
    });

    it("gives a test that is similar to the example test from the Module 10 Challenge instructions", () => {

        const shape = new Rectangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x="56" y="18" width="188" height="164" fill="blue"/>');
    });
});


/* Similar to the Circle class, for the Triangle class, I ran most of the same tests as I did for the Shape class, except I also 
tested the Rectangle class's width and height properties. For the render() method test, I tested that 
the Circle class returns the proper <circle> element, rather than just throwing an error.  I also ran the example test from the
Module 10 Challenge instructions*/
describe("testing Triangle Class methods", () => {

    let newTriangle = new Triangle(0, 0, "blue", 300, 200);
    let newTriangle2 = new Triangle(0, 0, "green", 300, 200);

    it("sets a fill color on the first new rectangle", () => {

        expect(newTriangle.fillColor).toEqual('blue');
    });

    it("tests the setColor() method on the first new rectangle", () => {
    
        newTriangle.setColor('red');
        expect(newTriangle.fillColor).toEqual('red');
    }); 

    it("tests a fill color on the second new rectangle", () => {
    
        expect(newTriangle2.fillColor).toEqual('green');
    }); 

    it("tests the setColor() method on the second new rectangle", () => {
    
        newTriangle2.setColor('yellow');
        expect(newTriangle2.fillColor).toEqual('yellow');
    }); 

    it("tests the X Position on the first new rectangle", () => {
    
        expect(newTriangle.XPosition).toEqual(0);
    }); 

    it("tests the Y Position on the first new rectangle", () => {
    
        expect(newTriangle.YPosition).toEqual(0);
    }); 

    it("tests the width of the first new rectangle", () => {
    
        expect(newTriangle.width).toEqual(300);
    }); 

    it("tests the height on the first new rectangle", () => {
    
        expect(newTriangle.height).toEqual(200);
    }); 

    it("tests the Triangle render() method", () => {

        expect(newTriangle.render()).toBe(`<polygon points="150, 0 300, 200 0, 200" fill="red" />`)
    });

    // This is the example test that the Module 10 Challenge instructions said should pass.
    it("gives the example test from the Module 10 Challenge instructions", () => {

        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

