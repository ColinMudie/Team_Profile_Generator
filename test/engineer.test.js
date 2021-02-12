const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    describe("Initialization", () => {
        it("Should create an object with name, id, email, and github if provided valid arguments", () => {
            const testEngineer = new Engineer('Colin', 1, 'csmudie1@gmail.com', 'ColinMudie');
            expect(testEngineer.name).toEqual('Colin');
            expect(testEngineer.id).toEqual(1);
            expect(testEngineer.email).toEqual('csmudie1@gmail.com');
            expect(testEngineer.github).toEqual('ColinMudie');
        })

        it ("should throw an error if provided no arguments", () => {
            const testEngineer = new Engineer();
            expect(testEngineer).toThrow();
        });

        it ("should throw an error if 'github' is not a string", () => {
            const testEngineer = new Engineer('Colin', 1, 'csmudie1@gmail.com', 0);
            expect(testEngineer).toThrow();
        });
    });

    describe('getRole', () => {
        it ('should return the objects role as Intern', () => {
            const testEngineer = new Engineer('Colin', 1, 'csmudie1@gmail.com', 'ColinMudie');
            expect(testEngineer.getRole()).toEqual('Engineer');
        });
    });

    describe("getGithub", () => {
        it('should return the objects "github"', () => {
            const testEngineer = new Engineer('Colin', 1, 'csmudie1@gmail.com', 'ColinMudie');
            expect(testEngineer.getName()).toEqual('ColinMudie');
        });
    });
});