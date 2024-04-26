/*
    https://edabit.com/challenge/yoRh3uocRGRYgmqHJ
*/

const pairs = arr => {
    let out = [];
    for (let i = 0; i < arr.length / 2; i++) {
        out.push([arr[i], arr[arr.length - 1 - i]])
    }
    return out;
}

console.log(pairs([1, 2, 3, 4, 5, 6, 7]));
//[[1, 7], [2, 6], [3, 5], [4, 4]]

console.log(pairs([1, 2, 3, 4, 5, 6]));