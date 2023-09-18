//https://edabit.com/challenge/adJw7Rq3dnDGSZkX5
// Pretty happy with this one relative to the two highest voted solutions so far.

const countIdenticalArrays = (...a) => {
  const s = new Set(a.map(c => c.toString()));
  return s.size < a.length ? (a.length - s.size) + 1 : 0;
}

console.log(countIdenticalArrays([0, 0, 0], [0, 1, 2], [0, 0, 0], [2, 1, 0])); // 2
console.log(countIdenticalArrays([0, 1, 0], [0, 1, 2], [0, 2, 0], [2, 1, 0])); // 0
console.log(countIdenticalArrays([0, 1, 2], [0, 1, 2], [0, 1, 2], [2, 1, 0])); // 3