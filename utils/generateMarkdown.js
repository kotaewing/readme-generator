const descriptions = require('./descriptions')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const urlFix = license.replace(' ', '_')
    if (license) {
        return `![License Badge](https://img.shields.io/badge/license-${urlFix}-green)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return '* [License](#license)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return '## License';
    } else {
        return '';
    }
}

function renderLicenseDescription(license) {
    const linkFix = license.replace(' ', '-');
    if (!license) {
        return '';
    }
    
    return `
This project is licensed under the ${license} guidelines.  To learn more about this licensing, [click here](https://choosealicense.com/licenses/)
    `;
    
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Testing](#testing)
* [Questions](#questions)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseDescription(data.license)}

## Contributing
${data.contribution}

## Testing
${data.test}

## Questions
If you have any additional questions, you can reach me here:

* GitHub Account - [${data.github}](https://github.com/${data.github})
* Email Address - ${data.email}
`;
}

module.exports = generateMarkdown;

