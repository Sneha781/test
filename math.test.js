// tests/math.test.js

const { add, subtract, multiply, divide } = require('../math');

describe("Math Functions", () => {
    test("adds 2 + 3 to equal 5", () => {
        expect(add(2, 3)).toBe(5);
    });

    test("subtracts 7 - 4 to equal 3", () => {
        expect(subtract(7, 4)).toBe(3);
    });

    test("multiplies 3 * 4 to equal 12", () => {
        expect(multiply(3, 4)).toBe(12);
    });

    test("divides 10 / 2 to equal 5", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("throws error when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
});



