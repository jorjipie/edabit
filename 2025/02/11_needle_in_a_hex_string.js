// https://edabit.com/challenge/Fev8jkLtDunP9wexv

const firstIndex = (hex, needle) => hex.split(' ')
	.map(h => String.fromCharCode(parseInt(h, 16))).join('').indexOf(needle);

console.log(firstIndex("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world") == 6);