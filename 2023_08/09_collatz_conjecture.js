// https://edabit.com/challenge/FeSnj9JdWMRMEfff7

const collatzNumber = n => {
  let steps = 0;
  while (n > 1) {
    steps++;
    n = n & 1 ? n * 3 + 1 : n / 2;
  }
  return steps;
}

let collatz = (a, b) => collatzNumber(a) < collatzNumber(b) ? 'a' : 'b';