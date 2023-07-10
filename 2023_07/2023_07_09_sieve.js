/* 
    https://edabit.com/challenge/r4ZHGRs8uoK2HpEFo
    Reused prime seive from 
    https://edabit.com/challenge/sPdaYSjgqpupa2B7q
*/

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
function eratosthenes(n) {
	let sieve = primeSieve(n), arr = [];
    for (let i = 2; i < n; i++) {
        if (sieve[i] != false) { arr.push(i); }
    }
    return arr;
}
console.log(eratosthenes(10));