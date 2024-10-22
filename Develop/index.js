// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: "Text?"
    },
    {
        type: 'input',
        name: 'text-color',
        message: "Text color?"
    },
    {
        type: 'list',
        name: 'shape',
        message: "Shape?",
        choices: ['square', 'circle', 'triangle']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: "Shape color?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Generated logo.svg");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule()(questions).then(function (answer) {
        let shape = '';
        if(answer.shape === 'circle'){
            shape = `<circle cx="150" cy="100" r="80" fill="${answer['shape-color']}" />`;
        }else if(answer.shape === 'triangle'){
            shape = `<polygon points="0,200 150,0 300,200" fill="${answer['shape-color']}" />`;
        }else{
            shape = `<rect width="300" height="200" fill="${answer['shape-color']}" />`;
        }
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

            ${shape}

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answer['text-color']}">${answer['text']}</text>

        </svg>
        `;
        writeToFile('logo.svg', svg);
    });
}

// Function call to initialize app
init();
