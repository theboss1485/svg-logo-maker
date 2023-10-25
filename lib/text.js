

/* I used the documentation at https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts to help with writing this file. 

I put the generateText() function in a separate file because I needed to import this function for my text.test.js file.  Having this function
in index.js caused a warning to appear when running the tests, because if I imported index.js, the inquirer package would be run automatically.
I wanted to avoid this warning. */
function generateText(actualText, textColor, YValue){

    let text = `<text x="50%" y="${YValue}" font-size="60" text-anchor="middle" fill="${textColor}">${actualText}</text>`
    return text;
}

module.exports = generateText;