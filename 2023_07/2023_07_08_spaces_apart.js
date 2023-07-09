function spaceApart(arr) {
    if (arr.some(i => i < 0)) { return "invalid"; }
    let firstIndex = -1, acc = 0;
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '1' && firstIndex == -1) { firstIndex = i; }
        else if (arr[i] === '1') { return acc; }
        else if (firstIndex != -1 && typeof arr[i] == 'number') { acc += arr[i]; }
    }
    return "invalid";
}

console.log(spaceApart(["2", "a", 1, "1", 1, 3, 49, "1"]));