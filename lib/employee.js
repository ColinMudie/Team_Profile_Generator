class Employee {
    constructor(name, id, email) {
        this.name = name,
        this.id = id,
        this.email = email
        // checks for empty arguments
        if (this.name === undefined || this.id === undefined || this.email === undefined){
            throw new Error("must provide valid arguments");
        }
        // checks for name to be a string
        if (typeof this.name !== "string" || this.name === '') {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        // checks name for any numbers or specials characters and stop it if it finds them.
        if (/[^A-z]+/.test(this.name)){
            throw new Error("Name cannot contain a number or any special characters");
        }
        //checks id to be an integer
        if (typeof this.id !== "number"){
            throw new Error("id must be an integer");
        }
        // checks id for 0 or a negative numeber
        if (this.id <= 0){
            throw new Error("id cannot be 0 or a negative number");
        }
        // checks if email is a string
        if (typeof this.email !== "string" || this.email === ''){
            throw new Error("Expected parameter 'email' to be non-empty string");
        }
        // checks email for correct email format
        if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(this.email)){
            throw new Error("Expected parameter 'email' to follow standard email format");
        } 
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee