import { Employee, Position } from "./employee";

describe("Employee net salary calculation", () => {
    it("should calculate net salary for DEVELOPER with salary >= 3000", () => {
        const employee = new Employee("John", "john@example.com", 3500, Position.DEVELOPER);
        expect(employee.calculateNetSalary()).toBe(2800);
    });

    it("should calculate net salary for DEVELOPER with salary < 3000", () => {
        const employee = new Employee("John", "john@example.com", 2500, Position.DEVELOPER);
        expect(employee.calculateNetSalary()).toBe(2250);
    });

    it("should calculate net salary for DBA with salary >= 2000", () => {
        const employee = new Employee("John", "john@example.com", 2200, Position.DBA);
        expect(employee.calculateNetSalary()).toBe(1650);
    });

});
