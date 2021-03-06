const Employee = require('../lib/employee');

describe("Employee Class", () => {
    describe("Initialization", () => {
        it ("should create an object with name, id, and email, if provided valid arguments", () => {
            const testEmployee = new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.name).toEqual('Colin');
            expect(testEmployee.id).toEqual(1);
            expect(testEmployee.email).toEqual('csmudie1@gmail.com');
        });
    
        it ("should throw an error if provided no arguments", () => {
            const testEmployee = () => new Employee();
            expect(testEmployee).toThrow(Error("must provide valid arguments"));
        });
    
        it ("should throw an error if 'name' is not a string", () => {
            const testEmployee = () => new Employee(10, 1, 'csmudie1@gmail.com');
            expect(testEmployee).toThrowError(Error("Expected parameter 'name' to be a non-empty string"));
        });

        it ("should throw an error if 'name' contains a number", () => {
            const testEmployee = () => new Employee('Colin9', 1, 'csmudie1@gmail.com');
            expect(testEmployee).toThrow(Error("Name cannot contain a number or any special characters"));
        });
    
        it ("should throw an error if 'id' is not an integer", () => {
            const testEmployee = () => new Employee('Colin', '1', 'csmudie1@gmail.com');
            expect(testEmployee).toThrow(Error("id must be an integer"));
        });
    
        it ("should throw an error if 'id' is a negative integer", () => {
            const testEmployee = () => new Employee('Colin', -1, 'csmudie1@gmail.com');
            expect(testEmployee).toThrow(Error("id cannot be 0 or a negative number"));
        });
    
        it ("should throw an error if 'email' is not a string", () => {
            const testEmployee = () => new Employee('Colin', 1, 10);
            expect(testEmployee).toThrow(Error("Expected parameter 'email' to be non-empty string"));
        });
    
        it ("should throw an error if 'email' is not a valid email address", () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1');
            expect(testEmployee).toThrow(Error("Expected parameter 'email' to follow standard email format"));
        });
    });

    describe("getName", () => {
        it('should return the objects "name"', () => {
            const testEmployee = new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getName()).toEqual('Colin');
        });
    })

    describe("getId", () => {
        it('should return the objects "id"', () => {
            const testEmployee = new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getId()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it('should return the objects "email"', () => {
            const testEmployee = new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getEmail()).toEqual('csmudie1@gmail.com');
        });
    })

    describe("getRole", () => {
        it('should return the objects role as Employee', () => {
            const testEmployee = new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getRole()).toEqual('Employee');
        });
    })
});
