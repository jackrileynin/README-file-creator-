// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
      'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
      'None': '',
  };

  return licenseBadges[license] ; 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
      'MIT': '[MIT License](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)',
      'GPL 3.0': '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)',
      'None': '',
  };

  return licenseLinks[license] ; 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSections = {
      'MIT': `This project is licensed under the ${renderLicenseLink("MIT")}`,
      'Apache 2.0': `This project is licensed under the ${renderLicenseLink("Apache 2.0")}`,
      'GPL 3.0': `This project is licensed under the ${renderLicenseLink("GPL 3.0")}`,
      
      'None': 'This project is not licensed.',
  };

  return licenseSections[license] ;
} 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Test
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me at ${data.email} or visit my GitHub page:
  [${data.github}](
  
  `;

}

module.exports = generateMarkdown;
