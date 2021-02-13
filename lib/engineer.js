const Employee = require('./employee');

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;

        //checks if no parameters are given
        if (this.name === undefined || this.id === undefined || this.email === undefined || this.github === undefined){
            throw new Error("must provide valid arguments");
        }
        // checks if github is not a string
        if (typeof this.github !== "string"){
            throw new Error("Expected parameter 'github' to be a string");
        }
    }
    getRole(){
        return "Engineer"
    }
    getGithub(){
        return `https://github.com/${this.github}/`
    }
}

module.exports = Engineer;