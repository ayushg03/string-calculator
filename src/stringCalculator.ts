export function add(numbers: string): number {
    if (numbers === '') {
        return 0;
    }
    let delimiter = /[\n,]/;
    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n', 2);
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(num => parseInt(num));
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
    }

    return numArray.reduce((acc, curr) => acc + curr, 0);
}
