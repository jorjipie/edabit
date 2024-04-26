/*
    https://edabit.com/challenge/RdHCBE4GXzdAEFQug
    I could have done this with regex in one line, apparently.
    But I like this.
*/
const splitToQuads = str => {
    let arr = Array(Math.ceil(str.length / 4))
    for (let i = 0; i * 4 < str.length; i++) {
        arr[i] = i * 4 + 4 <= str.length 
            ? str.substring(i * 4, i * 4 + 4) 
            : arr[i] = str.substring(i * 4);
    }
    return arr;
}

const swapQuads = str => 
    str.length < 4 ? str : str.substring(2) + str.substring(0, 2);

const swapTwo = s => splitToQuads(s).map(swapQuads).join('');

console.log(swapTwo("AABBCCDDEEF")); // "BBAADDCCEEF"
