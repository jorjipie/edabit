// https://edabit.com/challenge/FkcL7Fw9KF74rLCbK

const prime = num => {
    const s = Math.sqrt(num);
    for (let i = 2; i <= s; i++){ 
        if (num % i == 0) { return false; }
    }
    return true;
}

const Test = require('../../test.js');
Test.assertEquals(prime(7), true)
Test.assertEquals(prime(5), true)
Test.assertEquals(prime(12), false) 
Test.assertEquals(prime(777771), false)
Test.assertEquals(prime(207971), true)
Test.assertEquals(prime(100000074281), true)
Test.assertEquals(prime(100000074282), false)
Test.assertEquals(prime(777777777777777), false)

