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
            expect(testEmployee).toThrow();
        });
    
        it ("should throw an error if 'name' is not a string", () => {
            const testEmployee = () => new Employee(10, 1, 'csmudie1@gmail.com');
            expect(testEmployee).toThrow();
        });
    
        it ("should throw an error if 'id' is not an integer", () => {
            const testEmployee = () => new Employee('Colin', '1', 'csmudie1@gmail.com');
            expect(testEmployee).toThrow();
        });
    
        it ("should throw an error if 'id' is a negative integer", () => {
            const testEmployee = () => new Employee('Colin', -1, 'csmudie1@gmail.com');
            expect(testEmployee).toThrow();
        });
    
        it ("should throw an error if 'email' is not a string", () => {
            const testEmployee = () => new Employee('Colin', 1, 10);
            expect(testEmployee).toThrow();
        });
    
        it ("should throw an error if 'email' is not a valid email address", () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1');
            expect(testEmployee).toThrow();
        });
    });

    describe("getName", () => {
        it('should return the objects "name"', () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getName()).toEqual('Colin');
        });
    })

    describe("getId", () => {
        it('should return the objects "id"', () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getId()).toEqual(1);
        });
    })

    describe("getEmail", () => {
        it('should return the objects "email"', () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getName()).toEqual('csmudie1@gmail.com');
        });
    })

    describe("getRole", () => {
        it('should return the objects role', () => {
            const testEmployee = () => new Employee('Colin', 1, 'csmudie1@gmail.com');
            expect(testEmployee.getName()).toEqual('Employee');
        });
    })
});
