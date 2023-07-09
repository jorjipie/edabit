// https://edabit.com/challenge/96PKn2siDra5D7oPD

function intersection(...a) {
    let results = [];
    for (let i = 0; i < a[0].length; i++) {
        if (a.every(e => 
					e.some(j => JSON.stringify(j) === JSON.stringify(a[0][i])))) { 
						results.push(a[0][i]); }
    }
    return results;
}
console.log(intersection([1,2,3], [3,4,5],[3,6,7]));
console.log(intersection(
    [
      { color: 'red', make: 'toyota' },
      { color: 'blue', make: 'mazda' }
    ],
    [
      { color: 'green', make: 'tesla' },
      { color: 'blue', make: 'mazda' }
    ],
    [
      { color: 'yellow', make: 'ford' },
      { color: 'blue', make: 'mazda' }
    ]
  ));