import { add } from '../src/stringCalculator';

test('should return 0 for an empty string', () => {
  expect(add('')).toBe(0);
});

test('should return the number itself when a single number is provided', () => {
    expect(add('1')).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
});
  
test('should return the sum of multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
});

test('should handle new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
});
  
