const {Circle, Rectangle, Triangle} = require('./lib/shapes');
const colors = require('./lib/colors.js');
const inquirer = require('inquirer');
const fs = require('fs');

let svgWidth = 300;
let svgHeight = 200;

let textValueY = undefined;

let hexCode = undefined;

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
        validate: validateColor,
        filter: filterColor
        
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
        validate: validateColor,
        filter: filterColor
    }
]

async function begin(){
    debugger;
    hexCode = false;
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
    
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${generatedShapeXML}
        <text x="50%" y="${textValueY}" font-size="60" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
    </svg>`

    return XMLMarkup;

}

function saveSVGFile(svgHTML){

    let message = "";

    fs.writeFile("logo.svg", svgHTML, function(error){

        if(error === true){

            message = error

            
        
        } else {

            message = "Generated logo.svg"
        }

        console.log(message);

    });
}

function validateColor(input){

    console.log("validation")
    let basicColor = false;
    
    // I used the Xpert Learning Assistant AI to help me here.
    basicColor = colors.some(color => color.toLowerCase() === input.toLowerCase())

    if (basicColor === true){

        return basicColor

    } else {

        if(hexCode === true){
            
            return hexCode;
        
        } else {

            return "That was an invalid response.  Please try again.  Please enter the name of a color or a six digit hex code."
        }
    }      
}

function filterColor(input){

    console.log("filtration")
    input = input.replace(new RegExp(" ", 'g'), '');
    input = input.toLowerCase();

    const pattern = /^[0-9A-Fa-f]{6}$/

    if(pattern.test(input) === true){
        
        hexCode = true;
        input = "#" + input;
    }

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