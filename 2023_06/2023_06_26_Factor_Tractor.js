/*  https://edabit.com/challenge/zWf4ayT7nbTsxYgRe
    Reusing Prime Sieve from //https://edabit.com/challenge/sPdaYSjgqpupa2B7q   */

const primeSieve = max => {
    let sieve = Array(max);
    sieve[1] = false;
    for (var i = 2; i < Math.sqrt(max+1); i++) {
        for (var ii = i + i; ii < max+1; ii += i) {
            sieve[ii] = false;
        }
    }
    return sieve;
};

const getPrimes = num => {
    const sieve = primeSieve(num);
    let arr = [];
    for (let i = 2; i < num; i++) {
        if (sieve[i] != false) { arr.push(i); }
    }
    return arr;
}

const primeFactorize = num => {
    const primes = getPrimes(num + 1);
    let factors = [], 
        primeIndex = 0;
        
    while (num > 1 && primeIndex < primes.length) {
        if (num % primes[primeIndex] == 0) { 
            num /= primes[primeIndex];
            factors.push(primes[primeIndex]);
        }
        else { primeIndex++; }
    }
    return factors;
};
console.log(primeFactorize(19));
console.log(primeFactorize(77));
console.log(primeFactorize(2532));