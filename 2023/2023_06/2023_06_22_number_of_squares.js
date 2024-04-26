//https://edabit.com/challenge/RGQXN4TG2CQoBAReQ 

const numberSquares= n => n < 1 ? 0 : n ** 2 + numberSquares(n - 1);

console.log(numberSquares(5));