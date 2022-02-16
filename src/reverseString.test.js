import { reverseString } from './reverseString';

test('Return a reversed string', () => {
    expect(reverseString('apple')).toBe('elppa');
});
test('Return a reverse string', () => {
    expect(reverseString('pear')).toBe('raep');
});
