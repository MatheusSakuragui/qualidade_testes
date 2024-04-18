import Triangle from "./triangle";


describe("Triangle classification", () => {
    it("should classify scalene triangle correctly", () => {
        expect(Triangle.classify(3, 4, 5)).toBe("Scalene");
    });

    it("should classify equilateral triangle correctly", () => {
        expect(Triangle.classify(4, 4, 4)).toBe("Equilateral");
    });

    it("should classify isosceles triangle correctly", () => {
        expect(Triangle.classify(4, 4, 5)).toBe("Isosceles");
    });

    it("should return 'Invalid' for triangle with negative side", () => {
        expect(Triangle.classify(-1, 2, 3)).toBe("Invalid");
    });

    it("should return 'Invalid' for triangle with zero side", () => {
        expect(Triangle.classify(0, 2, 3)).toBe("Invalid");
    });

    it("should return 'Invalid' for triangle with sides violating triangle inequality theorem", () => {
        expect(Triangle.classify(1, 1, 3)).toBe("Invalid");
    });
});
