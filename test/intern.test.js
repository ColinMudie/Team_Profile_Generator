const Intern = require('../lib/intern');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("Should create an object with name, id, email, and school if provided valid arguments", () => {
            const testIntern = new Intern('Colin', 1, 'csmudie1@gmail.com', 'CMU');
            expect(testIntern.name).toEqual('Colin');
            expect(testIntern.id).toEqual(1);
            expect(testIntern.email).toEqual('csmudie1@gmail.com');
            expect(testIntern.school).toEqual('CMU');
        })

        it ("should throw an error if provided no arguments", () => {
            const testIntern = new Intern();
            expect(testIntern).toThrow();
        });

        it ("should throw an error if 'school' is not a string", () => {
            const testIntern = new Intern('Colin', 1, 'csmudie1@gmail.com', 0);
            expect(testIntern).toThrow();
        });
    });

    describe('getRole', () => {
        it ('should return the objects role as Intern', () => {
            const testIntern = new Intern('Colin', 1, 'csmudie1@gmail.com', 'CMU');
            expect(testIntern.getRole()).toEqual('Intern');
        });
    });

    describe("getSchool", () => {
        it('should return the objects "school"', () => {
            const testIntern = new Intern('Colin', 1, 'csmudie1@gmail.com', 'CMU');
            expect(testIntern.getName()).toEqual('CMU');
        });
    });
});