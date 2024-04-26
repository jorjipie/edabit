// https://edabit.com/challenge/DkLjrHfry9xgTedG2

function flattenArray(array) {
	if (array == null) { return []; }
	let newArr = [];
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) { newArr = newArr.concat(array[i]); }
		else if (typeof array[i] === 'function') { newArr.push(array[i]()); }
		else { newArr.push(array[i]); }
	}
	return newArr.some(e => Array.isArray(e)) ? flattenArray(newArr) : newArr;
}