// https://edabit.com/challenge/CwRXhTncGii8dupn9

const roundNumber = (num, n) => num % n < n / 2 ? num - num % n : num + n - num % n;

console.log(roundNumber(33, 25));
console.log(roundNumber(46, 7));
console.log(roundNumber(133, 14));