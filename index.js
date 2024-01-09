// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {

        name: "title",
        message: "What is the title of your project?",
      
    },
    {
        name: "description",
        message: "What is the description of your project?",
    },
    {
        name: "installation",
        message: "What are the installation instructions for your project?",
    },
    {
        name: "usage",
        message: "What is the usage information for your project?",
    },
    {
        name: "contribution",
        message: "What are the contribution guidelines for your project?",
    },
    {
        name: "test",
        message: "What are the test instructions for your project?",
    },
    {
        name: "license",
        message: "What is the license for your project?",
        type: "list",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"]
    }
   
    
];

// TODO: Create a function to write README file
function writeToFile(fileName) {
    inquirer
    .prompt(questions)
    .then((answer) => {
     const dataForMarkdown = generateMarkdown(answer);
        console.log(answer);
        fs.writeFile(fileName, dataForMarkdown, (err) =>
        err ? console.error(err) : console.log('Success!')
    
        );

    })
}
// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md");
    

}

// Function call to initialize app
init();

