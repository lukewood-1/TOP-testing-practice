import { calculator } from './calculator.js';

test('Calculator: Addition', () => {
	expect(calculator.add(1,2)).toBe(3);
});

test('Calculator: Subtraction', () => {
	expect(calculator.subtract(5,3)).toBe(2);
});

test('Calculator: Multiplication', () => {
	expect(calculator.multiply(2,10)).toBe(20);
});

test('Calculator: Division', () => {
	expect(calculator.divide(20,2)).toBe(10);
});
