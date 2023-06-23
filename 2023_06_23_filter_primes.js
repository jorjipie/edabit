//https://edabit.com/challenge/sPdaYSjgqpupa2B7q

function primeSieve(max) {
    let sieve = Array(max);
    sieve[1] = false;
    for (var i = 2; i < Math.sqrt(max+1); i++) {
        for (var ii = i + i; ii < max+1; ii += i) {
            sieve[ii] = false;
        }
    }
    return sieve;
}
function filterPrimes(arr) {
	let sieve = primeSieve(Math.max(...arr));
    return arr.filter(e => sieve[e] != false);
}
console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27]));