// https://edabit.com/challenge/NosDHsjwAviEkPDfS

function makeTranspose(arr) {
	let result = [];
    for (let rI = 0; rI < arr[0].length; rI++) {
        let row = [];
        for (let cI = 0; cI < arr.length; cI++) {
            row.push(arr[cI][rI]);
        }
        result.push(row);
    }
    return result;
}