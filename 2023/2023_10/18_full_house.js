// https://edabit.com/challenge/eJtRrrpRZEoaaYgvw

const isFullHouse = arr => {
    if (arr.length != 5) { return false; }
    const set = [...new Set(arr)];
    if (set.length != 2) { return false; }
    const setCounts = set.map(c => arr.filter(d => c == d).length);
    return Math.abs(setCounts[0] - setCounts[1]) == 1;
}
console.log(isFullHouse(["A", "A", "A", "A", "K"]));