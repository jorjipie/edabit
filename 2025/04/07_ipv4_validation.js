// https://edabit.com/challenge/S5nPFF44x7JceXPBn

const isValidIP = str => {
    const octets = str.split('.');
    const rex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})$/i
    if (octets.length != 4 
        || octets.some(octet => !(rex.test(octet))
            || (octet.length > 1 && octet[0] == 0))) { 
        return false; 
    }
    return true;
};

const Test = require('../../test.js');
Test.assertEquals(isValidIP("12.255.56.1"), true, "This is a valid IPv4");
Test.assertEquals(isValidIP("1.2.3.4"), true, "This is a valid IPv4");
Test.assertEquals(isValidIP("1.2.3"), false, "IPv4 contain exactly four octets.");
Test.assertEquals(isValidIP("1.2.3.4.5"), false, "IPv4 contain exactly four octets.");
Test.assertEquals(isValidIP("123.45.67.89"), true, "This is a valid IPv4");
Test.assertEquals(isValidIP("123.456.78.90"), false, "Each octet must be a decimal value between 0 and 255.");
Test.assertEquals(isValidIP("123.045.067.089"), false, "Each octet must be a decimal value between 0 and 255.");
Test.assertEquals(isValidIP(""), false, "An empty string is invalid.");
Test.assertEquals(isValidIP("abc.def.ghi.jkl"), false, "This is not in dot decimal format.");
Test.assertEquals(isValidIP("123.456.789.0"), false, "Each octet must be a decimal value between 0 and 255.");
Test.assertEquals(isValidIP("12.34.56"), false, "IPv4 contain exactly four octets.");
Test.assertEquals(isValidIP("12.34.56 .1"), false, "Check for spaces.");
Test.assertEquals(isValidIP("12.34.56.-1"), false, "Check for invalid characters.");
Test.assertEquals(isValidIP("123.045.067.089"), false, "Each octet must be a decimal value between 0 and 255.");
Test.assertEquals(isValidIP("192.168.1.1"), true, "This is a valid IPv4");
Test.assertEquals(isValidIP("192.168.1.1  "), false, "IPs with trailing spaces are invalid.");
Test.assertEquals(isValidIP("  192.168.1.1"), false, "IPs with leading spaces are invalid.");
Test.assertEquals(isValidIP("0.232.47.227"), true, "This is a valid IPv4");
Test.assertEquals(isValidIP("1e0.1e0.1e0.1e0"), false, "Each octet must be a decimal value between 0 and 255.");