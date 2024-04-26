// https://edabit.com/challenge/7W8aPMTicPy6jbYr3

function willFit(holds, cargo) {
	return holds.reduce((a, c) => {
		switch (c) {
			case 'S':
				return a + 50;
			case 'M':
				return a + 100;
			case 'L':
				return a + 200;
		}
	}, 0) >= cargo.reduce((a, c) => a + c);
}

console.log(willFit(["M", "L", "L", "M"], [56, 62, 84, 90]));
console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]));
