// https://edabit.com/challenge/4z75JHvjRXh8oyrri

const addLetters = arr => {
    const num = arr.reduce((t, l) => t + l.charCodeAt(0) - 96, 0) % 26;
    return String.fromCharCode((num === 0 ? 26 : num) + 96);
}
console.log(addLetters(['a', 'b']));
console.log(addLetters(['x', 'y', 'z']));
console.log(addLetters(['y', 'a']));