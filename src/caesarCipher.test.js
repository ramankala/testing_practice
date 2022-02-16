import { caesarCipher } from './caesarCipher';

test('Characters shifted 1 position', () => {
    expect(caesarCipher('apple', 1)).toBe('bqqmf');
});
test('Characters shifted 13 spots', () => {
    expect(caesarCipher('liquor', 13)).toBe('yvdhbe');
});
test('Testing character wrapping from z to a', () => {
    expect(caesarCipher('zebra', 1)).toBe('afcsb');
});
test('Testing character wrapping from z to a', () => {
    expect(caesarCipher('zebra', 1)).toBe('afcsb');
});
test('Testing keeping same case', () => {
    expect(caesarCipher('Fairy', 1)).toBe('Gbjsz');
});
test('Testing keeping same case', () => {
    expect(caesarCipher('faIry', 1)).toBe('gbJsz');
});
test('Testing punctuation', () => {
    expect(caesarCipher('fa!ry', 1)).toBe('gb!sz');
});