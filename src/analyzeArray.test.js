import { analyzeArray } from './analyzeArray';

test('Test that it returns the correct average', () => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});
test('Test that it returns the correct max', () => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});
test('Test that it returns the correct min', () => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});
test('Test that it returns the correct length', () => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});
test('Test that it returns an object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});