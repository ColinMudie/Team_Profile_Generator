const Manager = require('../lib/manager');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("Should create an object with name, id, email, and officeNumber if provided valid arguments", () => {
            const testManager = new Manager('Colin', 1, 'csmudie1@gmail.com', 20);
            expect(testManager.name).toEqual('Colin');
            expect(testManager.id).toEqual(1);
            expect(testManager.email).toEqual('csmudie1@gmail.com');
            expect(testManager.officeNumber).toEqual(20);
        })

        it ("should throw an error if provided no arguments", () => {
            const testManager = new Manager();
            expect(testManager).toThrow();
        });

        it ("should throw an error if 'officeNumber' is not an Integer", () => {
            const testManager = new Manager('Colin', 1, 'csmudie1@gmail.com', '20');
            expect(testManager).toThrow();
        });

        it ("should throw an error if 'officeNumber' is less than or equal to 0.", () => {
            const testManager = new Manager('Colin', 1, 'csmudie1@gmail.com', -1);
            expect(testManager).toThrow();
        });
    });

    describe('getRole', () => {
        it ('should return the objects role as Manager', () => {
            const testManager = new Manager('Colin', 1, 'csmudie1@gmail.com', 20);
            expect(testManager.getRole()).toEqual('Manager');
        });
    });

    describe("getOfficeNumber", () => {
        it('should return the objects "officeNumber"', () => {
            const testManager = new Manager('Colin', 1, 'csmudie1@gmail.com', 20);
            expect(testManager.getName()).toEqual(20);
        });
    });
});