// https://edabit.com/challenge/2eDHKWPt7tDCzCJa3

function orderedMatrix(rows, cols) {
	let matrix = Array(rows), cellIndex = 1;
    for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
        matrix[rowIndex] = Array(cols);
        for (let colIndex = 0; colIndex < cols; colIndex++) {
            matrix[rowIndex][colIndex] = cellIndex;
            cellIndex++;
        }
    }
    return matrix;
}
console.log(orderedMatrix(4,5));