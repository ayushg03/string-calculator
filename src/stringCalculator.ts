export function add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }
    const numArray = numbers.split(',').map(num => parseInt(num));
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
  