// https://edabit.com/challenge/ztJZiCZeXATC9KDHX

const noDuplicateLetters = phrase => {
  let arr = phrase.split(' ');
  return arr.every(word => {
    let wordArr = word.split('');
    return wordArr.length == set(wordArr).size;
  });
}
console.log(noDuplicateLetters("You can lead a horse to water, but you can't make him drink."));
console.log(noDuplicateLetters("An apple a day keeps the doctor away."));