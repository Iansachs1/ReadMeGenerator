// function to generate markdown for README
function generateReadMe(response) {
  const title = response.title;
  const description = response.description;
  const installation = response.installation;
  const usage = response.usage;
  const license = response.license;
  const contributing = response.contributing;
  const tests = response.tests;
  const questions = response.questions;

  return `# ${title}

  ## Description
  
${description}
  
## Table of Contents
  
[1. Description](##-Description)
  
[2. Installation](##-Installation)
  
[3. Usage](##-Usage)
  
[4. License](##-License)
  
[5. Contributing](##-Contributing)
  
[6. Tests](##-Tests)
  
[7. Questions](##-Questions)
  
## Installation
  
${installation}
  
## Usage
  
${usage}
  
## Licenses
  
${license}
  
## Contributing
  
${contributing}
  
## Tests
  
${tests}
  
## Questions
  
${questions}`
}

module.exports = generateReadMe;
