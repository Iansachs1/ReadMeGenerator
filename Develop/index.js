//included node packages
const fs = require("fs");
const util = require("util");

//3rd party node packages
const inquirer = require("inquirer");

//write file as a promise
const thenableWriteFile = util.promisify(fs.writeFile);

//generate readMe function
const generateReadMe = require("./utils/generateMarkdown.js");

inquirer
    .prompt([
        {
            name: "title",
            message: "What is the title of this project?"
        },

        {
            name: "description",
            message: "Write detailed description of your project."
        },

        {
            name: "installation",
            message: "Provide installation guidelines for this project"
        },

        {
            name: "usage",
            message: "What is this project used for? provide information on how to use it"
        },
        
        {
            name: "license",
            message: "Type any of the following to license your project: Apache, Boost, BSD3, BSD2, MIT, Mozilla"
        },
        
        {
            name: "contributing",
            message: "How can someone contribute to this project"
        },
        
        {
            name: "tests",
            message: "What testing was done on this project? How can someone test this project themselves?"
        },
        
        {
            name: "email",
            message: "Enter your email so people can reach out if they have questions on your project."
        },
        
        {
            name: "githubUserName",
            message: "Enter your github username so people can reach out if they have questions on your project. and to help with licensing."
        },
    ])
    .then(function (response) {
        return generateReadMe(response);
    })
    .then(function (innerReadMe) {
        return thenableWriteFile("./testReadMe.md", innerReadMe)
    })
    .then(function () {
        console.log("readMe Generated!");
    })
    .catch(function (error) {
        console.log("Uh oh... Something went wrong", error);
    });
