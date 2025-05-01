// https://edabit.com/challenge/86Dbfov3HDpKTArwo

const Test = require('../../test.js');

const primorial = n => {
    if (n == 1) { return 2; }
    let product = 2, primorialCount = 1;
    for (let i = 3; primorialCount < n; i += 2) {
        if (isPrime(i)) {
            product *= i; 
            primorialCount++;
        }
    }
    return product;
}

const isPrime = n => {
    let sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) { 
        if (n % i == 0) { 
        return false; }
    }
    return true;
}

Test.assertEquals(isPrime(100), false);
Test.assertEquals(isPrime(13), true);
Test.assertEquals(isPrime(15), false);

Test.assertEquals(primorial(1), 2)
Test.assertEquals(primorial(2), 6)
Test.assertEquals(primorial(3), 30)
Test.assertEquals(primorial(8), 9699690)