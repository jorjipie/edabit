// https://edabit.com/challenge/H8JABWQfYFN4ZSAxE

function uniqueAbbrev(abbs, words) {
    for (let i = 0; i < abbs.length; i++) {
        if (words.filter(word => word.substring(0, abbs[i].length) === abbs[i]).length != 1) { 
            return false; 
        }
    }
    return true;
}

console.log(uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]));
console.log(uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]));