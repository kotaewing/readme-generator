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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();