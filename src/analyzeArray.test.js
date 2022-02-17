import { analyzeArray } from './analyzeArray';

test.skip('Test that it returns the correct average', () => {
    expect(analyzeArray.average([1,8,3,4,2,6])).toBe(4);
});
test.skip('Test that it returns the correct max', () => {
    expect(analyzeArray.max([1,8,3,4,2,6])).toBe(8);
});
test.skip('Test that it returns the correct min', () => {
    expect(analyzeArray.min([1,8,3,4,2,6])).toBe(1);
});
test.skip('Test that it returns the correct length', () => {
    expect(analyzeArray.length([1,8,3,4,2,6])).toBe(6);
});
test('Test that it returns an object', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});