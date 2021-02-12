const fs = require('fs')
const inquirer = require('inquirer')

//Classes
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managers = [];
const engineers = [];
const interns = [];


const questions = [
    {
        type: 'list',
        name: 'role',
        message: 'What is the employees role?',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the employees name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employees id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        validate: function (email)
        {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        messgae: 'What is the manager\'s office number?',
        when: (data) => (data.role).includes('Manager')
    },
    {
        type: 'input',
        name: 'github',
        messgae: 'What is the engineer\'s Github id?',
        when: (data) => (data.role).includes('Engineer')
    },
    {
        type: 'input',
        name: 'school',
        messgae: 'What school is the intern from?',
        when: (data) => (data.role).includes('Intern')
    },
    {
        type: 'confirm',
        name: 'continue',
        message: 'Do you have another employee to add?'
    }
]


function init(){
    inquirer.prompt(questions).then((data) => {
        if ((data.role).includes("Manager")){
            managers.push(data)
            
        } else if ((data.role).includes("Engineer")){
            engineers.push(data)
            
        } else if ((data.role).includes("Intern")){
            interns.push(data)
            
        }
        if (data.continue === true){
            init();
        }
        console.log(managers);
        console.log(engineers);
        console.log(interns);
    });
}

init();