// function to generate markdown for README
function generateReadMe(response) {
  const title = response.title;
  const description = response.description;
  const installation = response.installation;
  const usage = response.usage;
  const license = response.license;
  const contributing = response.contributing;
  const tests = response.tests;
  const email = response.email;
  const githubUserName = response.githubUserName;

  let badgeLink = null;

  if (license === "Apache") {
    badgeLink ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  
  } if (license === "Boost") {
    badgeLink ="[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  
  } if (license === "BSD3") {
    badgeLink ="[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  
  } if (license === "BSD2") {
    badgeLink ="[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  
  } if (license === "MIT") {
    badgeLink ="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  
  } if (license === "Mozilla") {
    badgeLink ="[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
 
  } 

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
  
${badgeLink}
  
## Contributing
  
${contributing}
  
## Tests
  
${tests}
  
## Questions

If you have any questions, please reach out to me through email or via github:

${email}

https://github.com/${githubUserName}
`
}

module.exports = generateReadMe;
