// https://edabit.com/challenge/ACeSvyhYe7Qrtsk5R

const averageWordLength = str => {
    const arr = str.match(/[A-Za-z]+/g);
    return Math.round(arr.reduce((a,c) => a + c.length, 0) / arr.length * 100) / 100;
};

console.log(averageWordLength("Dude, this is so awesome!"));
console.log(averageWordLength('I just planted a young oak tree, wonder how tall it will grow in a few years?'));
