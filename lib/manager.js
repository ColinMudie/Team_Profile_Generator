const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber
        // Checks for missing parameters
        if (this.name === undefined || this.id === undefined || this.email === undefined || this.officeNumber === undefined){
            throw new Error("must provide valid arguments");
        }
        // checks if officeNumber is an Integer
        if (typeof this.officeNumber !== "number"){
            throw new Error("officeNumber must be an integer");
        }
        // checks if officenumber is less than or equal to 0
        if (this.officeNumber <= 0) {
            throw new Error("officeNumber cannot be less than or equal to 0");
        }
    }
    getRole(){
        return 'Manager'
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager;