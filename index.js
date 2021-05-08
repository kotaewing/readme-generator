// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Please enter a description for your project',
    'How will a user install your project?',
    'How will a user use your project?',
    'What kind of license is your project licensed under?',
    'What are the contribution guidelines for your project?',
    'How should a user test your application?'
];

const [ title, description, installation, usage, license, constribiton, test ] = questions;

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err)
            return
        }
        console.log('File Created Successfully!')
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: title
        },
        {
            type: 'input',
            name: 'description',
            message: description
        }
    ])
}

// Function call to initialize app
init()
.then(readmeData => {
    return generateMarkdown(readmeData);
})
.then(pageMarkdown => {
    return writeToFile(pageMarkdown);
})