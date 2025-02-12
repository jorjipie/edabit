// https://edabit.com/challenge/yPa5YwAoqfdJuWK4C

function possiblePath(arr) {
  let layout = [1, 2, "H", 4, 3];
  return arr.every((room, index) => {
    if (index == 0) { return true; } 
      return Math.abs(layout.indexOf(room) - layout.indexOf(arr[index - 1])) <= 1;
  });
}
console.log(possiblePath([1, 2, "H", 4, 3]));
console.log(possiblePath([1, 3, 4]) == false);
console.log(possiblePath(["H", 2, 1, "H", 2]) == false);
console.log(possiblePath([4, 3, 4, "H", 4, "H"]));

