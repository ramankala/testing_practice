import { calculator } from './calculator';

test('testing the addition function', () => {
    expect(calculator.add(1,1)).toBe(2);
});
test('testing the addition function', () => {
    expect(calculator.add(10,19)).toBe(29);
});
test('testing the subtraction function', () => {
    expect(calculator.subtract(1,1)).toBe(0);
});
test('testing the subtraction function', () => {
    expect(calculator.subtract(10,1)).toBe(9);
});
test('testing the multiplication function', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});
test('testing the multiplication function', () => {
    expect(calculator.multiply(5,9)).toBe(45);
});
test('testing the division function', () => {
    expect(calculator.divide(9,3)).toBe(3);
});
test('testing the division function', () => {
    expect(calculator.divide(25,5)).toBe(5);
});