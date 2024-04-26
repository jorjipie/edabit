//https://edabit.com/challenge/wRX9cFtAxPZj86Drp
const isSmoothWord = (element, index, array) => {
    if (index == 0) { return true; }
    prevWord = array[index-1];
    return element[0].toLowerCase() == prevWord[prevWord.length - 1].toLowerCase();
}
const isSmooth = s => s.split(' ').every(isSmoothWord);

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"));
console.log(isSmooth("Someone is outside the doorway"));