class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string") {
            console.error('not a string');
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (/[1-9]/i.test(name)){
            console.error('no number in name');
            throw new Error("cannot have a number in your name.")
        }

        if (typeof id !== "number" || isNaN(id) || id < 1) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
            }
        

        this.name = name,
        this.id = id,
        this.email = email
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