// https://edabit.com/challenge/3fS4DBuMZYch3sn7Q

const closestToPage = (chapters, page) => {
	const arr = Object.entries(chapters).map(e => {
		e.push(Math.abs(e[1] - page))
		return e;
	}).sort((a, b) => a[2] - b[2]); 
	
	return arr[0][2] == arr[1][2] 
		? arr[0][1] > arr[1][1] 
			? arr[0][0] 
			: arr[1][0] 
		: arr[0][0];
}

console.log(closestToPage({
    "New Beginnings" : 1,
    "Strange Developments" : 62,
    "The End?" : 194,
    "The True Ending" : 460
  }, 200));