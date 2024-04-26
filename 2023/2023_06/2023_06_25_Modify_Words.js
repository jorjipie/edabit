// https://edabit.com/challenge/zwjWN6ehCZ3fAqvYo

const editWords = arr => arr.map(w => 
    (w.substring(0, w.length / 2) 
        + '-' + w.substring(w.length / 2))
        .toUpperCase().split('').reverse().join('')); 

console.log(editWords(["new york city"]));
console.log(editWords(["null", "undefined"]));
