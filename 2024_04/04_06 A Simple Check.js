//https://edabit.com/challenge/JJFgC5bXCfSe9pF2W


function simpleCheck(a, b) {
    let gt = a, lt = b, d = 0;
    if (b - a > 0) {
        gt = b; 
        lt = a;
    }
	while (lt > 0) {
        if (gt % lt === 0) { d++; }
        lt--;
        gt--;
    }
    console.log(d);
}
simpleCheck(3,5); // 2
simpleCheck(150080, 150032); // 10;