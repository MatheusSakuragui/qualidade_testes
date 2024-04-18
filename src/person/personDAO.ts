import Person from "./person";

class PersonDAO {
    save(person: Person): void {
        localStorage.setItem(person.id.toString(), JSON.stringify(person));
    }

    isValidToInclude(person: Person): string[] {
        const errors: string[] = [];

        if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(person.name)) {
            errors.push("Name must contain at least two parts and consist only of letters.");
        }

        if (person.age < 1 || person.age > 200) {
            errors.push("Age must be between 1 and 200.");
        }

        return errors;
    }
}

export default PersonDAO;
