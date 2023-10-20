const {Circle, Rectangle, Triangle} = require('./lib/shapes');
const colors = require('./lib/colors.js');
const inquirer = require('inquirer');
const fs = require('fs');

let svgWidth = 300;
let svgHeight = 200;

let textValueY = undefined;

const questions = [
    {
        type: "input",
        name: "text",
        message: "To start, what text would you like on your logo?  Please enter up to three characters.",
        default: "GCM",
        validate: validateText
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want the text on your SVG logo to be?  Please enter a color name or a hexadecimal value.\n" +
        "For a list of supported colors, please go to https://www.w3schools.com/tags/ref_colornames.asp.\n" + 
        "For an explanation of hexadecimal color values, please go to https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple",
        default: "Sky Blue",
        filter: filterColor,
        validate: validateColor
    },
    {
        type: "list",
        name: "shape",
        message: "What shape should your SVG logo be?",
        choices: ["circle", "rectangle", "triangle"],
        default: "circle"
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want the shape on your SVG logo to be?  Please enter a color name or a hexadecimal value. \n" +
        "For a list of supported colors, please go to https://www.w3schools.com/tags/ref_colornames.asp. \n" + 
        "For an explanation of hexadecimal color values, please go to https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple",
        default: "Steel Blue",
        filter: filterColor,
        validate: validateColor
    }
]

async function begin(){

    let responses = await askQuestions();
    let svgHTML = generateSVG(responses);
    saveSVGFile(svgHTML);
}


async function askQuestions(){

    let responses = await inquirer.prompt(questions)
    return responses;
}

function generateSVG(responses){

    let generatedShapeXML = undefined;

    switch (responses.shape){

        case "circle":
            const circle = new Circle(svgWidth / 2, svgHeight / 2, responses.shapeColor, svgHeight / 2);
            generatedShapeXML = circle.render();
            textValueY = "56%";
            break;
        case "rectangle":
            const rectangle = new Rectangle(0, 0, responses.shapeColor, 300, 200);
            generatedShapeXML = rectangle.render();
            textValueY = "56%";
            break;
        case "triangle":
            const triangle = new Triangle(0, 0, responses.shapeColor, 300, 200);
            generatedShapeXML = triangle.render();
            textValueY = "70%";
            break;
    }

    let XMLMarkup = 
    
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)">
        ${generatedShapeXML}
        <text x="50%" y="${textValueY}" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
    </svg>`

    return XMLMarkup;

}

function saveSVGFile(svgHTML){

    fs.writeFile("logo.svg", svgHTML, function(error){

        if(error === true){

            console.log(error);
        
        } else {

            console.log("Generated logo.svg")
        } 
    });
}

function validateColor(input){

    let basicColor = false;
    
    // I used the Xpert Learning Assistant AI to help me here.
    basicColor = colors.some(color => color.toLowerCase() === input.toLowerCase())

    if (basicColor === true){

        return basicColor

    } else {

        const pattern = /^[0-9A-Fa-f]{1,6}$/

        if(pattern.test(input) === true){

            return true
        
        } else {

            return "That was an invalid response.  Please try again."
        }
    }      
}

function filterColor(input){
    input = input.replace(new RegExp(" ", 'g'), '');
    input = input.toLowerCase();
    return input;
}

function validateText(input){

    const pattern = /^.{0,3}$/

    if(pattern.test(input) === true){

        return true

    } else {

        return "Please enter between zero and three characters.  Try again."
    }
}

begin();