enum Position {
    DEVELOPER = "DEVELOPER",
    DBA = "DBA",
    TESTER = "TESTER",
    MANAGER = "MANAGER",
}

class Employee {
    name: string;
    email: string;
    salary: number;
    position: Position;

    constructor(name: string, email: string, salary: number, position: Position) {
        this.name = name;
        this.email = email;
        this.salary = salary;
        this.position = position;
    }

    calculateNetSalary(): number {
        let discountPercentage: number;

        switch (this.position) {
            case Position.DEVELOPER:
                discountPercentage = this.salary >= 3000 ? 0.2 : 0.1;
                break;
            case Position.DBA:
            case Position.TESTER:
                discountPercentage = this.salary >= 2000 ? 0.25 : 0.15;
                break;
            case Position.MANAGER:
                discountPercentage = this.salary >= 5000 ? 0.3 : 0.2;
                break;
            default:
                discountPercentage = 0;
                break;
        }

        return this.salary * (1 - discountPercentage);
    }
}

export { Employee, Position };
