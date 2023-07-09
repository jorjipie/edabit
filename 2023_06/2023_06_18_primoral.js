/* https://edabit.com/challenge/NavpMQj44kMQ6bXo7 */

function isDivisible(num, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] == 0) { return true; }
    }
    return false;
}
function nextPrime(primes) {
    let nextNum = primes[primes.length - 1] + 1;
    while (isDivisible(nextNum, primes)) { nextNum++; }
    return nextNum;
}
function primorial(n) {
    let primes = [2];
    while (n > primes.length) { primes.push(nextPrime(primes)); }
    console.log(primes);
    return primes.reduce((ac, cv) => ac * cv, 1);
}
console.log(primorial(100));