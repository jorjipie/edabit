/* https://edabit.com/challenge/jLeqZDXP7W7C7xMk2 */

const differenceWith = (array, values, comparator) => 
	array.filter(e => !values.some(v => comparator(e, v)));

console.log(
    differenceWith(
      [
        ["banana", "cat", "car"],
        ["house", "pajamas", "watch"],
        ["nickle", "dime", "quarter"],
      ],
      [
        ["banana", "cat", "car"],
        ["house", "pajamas", "watch"],
      ],
      (a, b) => a.includes("banana") && b.includes("banana")
    ));