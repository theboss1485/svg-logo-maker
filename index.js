const {Circle, Rectangle, Triangle} = require('./lib/shapes.js');
const colors = require('./lib/colors.js');
const generateText = require('./lib/text.js')
const inquirer = require('inquirer');
const fs = require('fs');

let svgWidth = 300;
let svgHeight = 200;

let textValueY = undefined;

let hexCode = undefined;

// These are the questions that the program asks the user.
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

// This is the 'main' function of the application.  The program runs it to start the application.
async function begin(){
    
    hexCode = false;
    let responses = undefined

    try{

        responses = await askQuestions();

    } catch(error){

        console.log(error.message)
    }
    
    let svgHTML = generateSVG(responses);
    saveSVGFile(svgHTML);
}

// This function asks the user questions during the execution of the program.
async function askQuestions(){

    let responses = await inquirer.prompt(questions)
    return responses;
}


// This function takes the user's question responses and generates the SVG logo with them.
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
    
    /* I put the SVG string together this way because I was having issues with the SVG string not being indented properly. */
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> \n\t`+
        `${generatedShapeXML} \n\t` +
        `${generateText(responses.text, responses.textColor, textValueY)} \n` +
    `</svg>`

    return XMLMarkup;
}

// This function saves the new SVG logo to the file "logo.svg".
function saveSVGFile(svgHTML){

    fs.writeFile("./examples/logo.svg", svgHTML, function(error){

        if(error){

            console.log(error.message)

        } else {

            console.log("Generated logo.svg")
        }
    });
}

/* This function checks if the color the user passed in is either a named color or a hex color value.
If it isn't either of those, the program asks the user to try again.*/
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

/* This function removes white space from the users input and then makes it lowercase. This is to avoid any potential issues with passing it into
the SVG file.  Additionally, the function uses a regular expression to check if the user's input is a hex value.  I had the hex value check in this function
because the filter function is called before the validate function in inquirer. I needed to check if the user's input was a hex code during the filtration
function because I needed to add a pound sign (#) to the input if it was in fact a hex code. If I had checked if the user's input was a hex code during the validation 
function, the filtration function would have already been called, and thus it would have been too late to add the pound sign.*/
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

// This function validates the text the user entered take make sure it is at least one and no more than three characters.
function validateText(input){

    const pattern = /^.{1,3}$/

    if(pattern.test(input) === true){

        return true

    } else {

        return "Please enter between one and three characters.  Try again."
    }
}

begin();

module.exports = generateText;