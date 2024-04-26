// https://edabit.com/challenge/ztJZiCZeXATC9KDHX

const noDuplicateLetters = phrase => phrase.split(' ').every(word => {
  let wordArr = word.toLowerCase().split('');
  return wordArr.length == new Set(wordArr).size;
});

console.log(noDuplicateLetters("You can lead a horse to water, but you can't make him drink."));
console.log(noDuplicateLetters("An apple a day keeps the doctor away."));