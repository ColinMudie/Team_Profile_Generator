const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const fs = require('fs')


function generateManagers(managers) {
    let managerCard = '';
    if (managers.length > 0) {
        managers.forEach(element => {
            managerCard = managerCard.concat(`
            <div class="card card-custom manager-card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${element.getName()}</h2>
                <h4 class="card-text manager-text">${element.getRole()}</h4>
                <p class="card-text">ID: ${element.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
                <p class="card-text">Office Number:  ${element.getOfficeNumber()}</p>
            </div>
            </div>
            `)
        });
        return managerCard
    }
}

function generateEngineers(engineers) {
    let engineerCard = '';
    if (engineers.length > 0) {
        engineers.forEach(element => {
            engineerCard = engineerCard.concat(`
            <div class="card card-custom engineer-card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${element.getName()}</h2>
                <h4 class="card-text engineer-text">${element.getRole()}</h4>
                <p class="card-text">ID: ${element.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
                <p class="card-text">Github: <a href="${element.getGithub()}" target="_blank">${element.github}</a></p>
            </div>
            </div>
            `)
        });
        return engineerCard
    }
}

function generateInterns(interns) {
    let internsCard = '';
    if (interns.length > 0) {
        interns.forEach(element => {
            internsCard = internsCard.concat(`
            <div class="card card-custom intern-card" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${element.getName()}</h2>
                <h4 class="card-text intern-text">${element.getRole()}</h4>
                <p class="card-text">ID: ${element.getId()}</p>
                <p class="card-text">Email: <a href="mailto:${element.getEmail()}">${element.getEmail()}</a></p>
                <p class="card-text">School: ${element.getSchool()}</p>
            </div>
            </div>
            `)
        });
        return internsCard
    }
}

function generateHtml(managers, engineers, interns) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid jumbotron-custom">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${generateManagers(managers)}
                ${generateEngineers(engineers)}
                ${generateInterns(interns)}
            </div>
        </div>
    </body>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    </html>
`
}

module.exports = generateHtml;