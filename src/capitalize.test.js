import {capitalize} from './capitalize';

test('capitalize first letter of word', () => {
    expect(capitalize('capitalize')).toBe('Capitalize');
});
test('capitalize first letter of word', () => {
    expect(capitalize('apple')).toBe('Apple');
});