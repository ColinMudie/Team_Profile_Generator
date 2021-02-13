const Employee = require('./employee');

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        //checks for no parameters
        if (this.name === undefined || this.id === undefined || this.email === undefined || this.school === undefined){
            throw new Error("must provide valid arguments");
        }
        // checks if school is not a string
        if (typeof this.school !== "string"){
            throw new Error('Expected parameter "school" to be a string');
        }
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern;