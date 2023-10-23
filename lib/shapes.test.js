const { Shape } = require('./shapes');

/*
test("description of the test we are running | the unit we are testing", () => {

}) 
*/


describe("Testing Shape class", () => {

    it("creates a new instance of a Shape object", () => {
        // setup 
        let newShape = new Shape();
        // add content | data etc ..
    
        // expecation
        expect(newShape).toBeInstanceOf(Shape);
    }) 

    it("sets a fill color on the new instance", () => {
        // setup 
        let newShape = new Shape(25, 25, 'blue');
        // add content | data etc ..
    
        // expecation
        expect(newShape.fillColor).toEqual('blue');
    }) 
})


describe("testing Circle Class methods", () => {

})