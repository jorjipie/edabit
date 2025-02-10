// https://edabit.com/challenge/7PS8pQieTWw5vrRYM

function f(n) {
	let count = 0;
	for (let a = 1; a <= n; a++) {
		for (let b = 1; b <= n; b++) {
			if ((Math.sqrt(a * b) % 1) == 0) { count++; }
		}
	}
	return count / n ** 2;
}
console.log(f(2));
console.log(f(100));