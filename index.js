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
    'How should a user test your application?',
    'What is your GitHub Username?',
    'What is your Email Address?'
];

const [ title, description, installation, usage, license, contribution, test, github, email ] = questions;

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
            name:'github',
            message: github,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: email,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: title,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: description,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: installation,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: usage,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: license,
            choices: ['MIT', 'GNU GPLv3', 'Apache', 'GNU AGPLv3', 'None'] 
        },
        {
            type: 'input',
            name: 'contribution',
            message: contribution,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: test,
            validate: confirmVal => {
                if (confirmVal) {
                    return true
                } else {
                    console.log('Please enter a valid answer!')
                    return false
                }
            }
        },
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
.catch(err => {
    console.log(err);
});