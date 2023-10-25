// The following tests test the generateText() method to make sure it generates text appropriately.
const generateText = require('./text.js');

describe("testing text generation", () => {

    it("tests text content part 1", () => {

        expect(generateText("GCM", "blue", "70%")).toBe(`<text x="50%" y="70%" font-size="60" text-anchor="middle" fill="blue">GCM</text>`)
    });

    it("tests text content part 2", () => {

        expect(generateText("GCM", "red", "70%")).toBe(`<text x="50%" y="70%" font-size="60" text-anchor="middle" fill="red">GCM</text>`)
    });

    it("tests text content part 3", () => {

        expect(generateText("GCM", "blue", "50%")).toBe(`<text x="50%" y="50%" font-size="60" text-anchor="middle" fill="blue">GCM</text>`)
    });

    it("tests text content part 4", () => {

        expect(generateText("JWM", "blue", "70%")).toBe(`<text x="50%" y="70%" font-size="60" text-anchor="middle" fill="blue">JWM</text>`)
    });

    it("tests text content part 5", () => {

        expect(generateText("NEM", "purple", "85%")).toBe(`<text x="50%" y="85%" font-size="60" text-anchor="middle" fill="purple">NEM</text>`)
    });
});