// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License Badge](https://img.shields.io/badge/license-${license}-green)`;
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return '*[License](#license)';
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
    if (!license) {
        return '';
    }

    const descriptions = []
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
${renderLicenseLink(data.license)}
*[Contribution](#contribution)
*[Testing](#testing)


## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection}
${renderLicenseDescription}
`;
}

module.exports = generateMarkdown;