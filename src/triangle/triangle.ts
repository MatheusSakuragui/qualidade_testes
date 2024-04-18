class Triangle {
    static classify(side1: number, side2: number, side3: number): string {
        if (
            side1 + side2 <= side3 ||
            side1 + side3 <= side2 ||
            side2 + side3 <= side1 ||
            side1 <= 0 ||
            side2 <= 0 ||
            side3 <= 0
        ) {
            return "Invalid";
        } else if (side1 === side2 && side2 === side3) {
            return "Equilateral";
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    }
}

export default Triangle;
