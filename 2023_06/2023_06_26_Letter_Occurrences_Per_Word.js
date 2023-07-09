// https://edabit.com/challenge/gA9dpoanWY6StiKR9

const findOccurrences = (sentence, letter) => {
    let obj = {};
    sentence.toLowerCase().split(' ').map(word => {
        obj[word] = getOccurences(word, letter.toLowerCase());
    });
    return obj;
}
const getOccurences = (word, letter) => {
    let o = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) { o++; }
    }
    return o;
};

console.log(findOccurrences("Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.", "p"));