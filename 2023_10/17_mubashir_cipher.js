// https://edabit.com/challenge/J4idWvahCYHPGnsMT
const key = [['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'], ['s', 'v'], ['h', 'x'], 
['i', 'z'], ['r', 'y'], ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']];
const getLetter = char => {
    for (let i = 0; i < key.length; i++) {
        if (char == key[i][0]) { return key[i][1]; }
        if (char == key[i][1]) { return key[i][0]; }
    }
    return char;
}
const mubashirCipher = m => 
    m.split('').map(c => getLetter(c)).join('');

let cipherResult = mubashirCipher("edabit is amazing !");
if (cipherResult != "uqkgzf zv kckizlb !") { 
    console.log(cipherResult);
}