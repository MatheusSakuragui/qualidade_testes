import Person from "./person";
import PersonDAO from "./personDAO";


describe("Person validation", () => {
    const personDAO = new PersonDAO();

    it("should return error for invalid name", () => {
        const person = new Person(1, "John", 25);
        expect(personDAO.isValidToInclude(person)).toContain("Name must contain at least two parts and consist only of letters.");
    });

    it("should return error for invalid age", () => {
        const person = new Person(1, "John Doe", 0);
        expect(personDAO.isValidToInclude(person)).toContain("Age must be between 1 and 200.");
    });

});
