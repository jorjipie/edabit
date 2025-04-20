// https://edabit.com/challenge/NekgMswiPasDonSDe

const camelToSnake = str => 
    str.replace(/[A-Z]/g, c => "_" + c.toLowerCase());

const Test = require('../../test.js');

Test.assertEquals(camelToSnake("magicCarrots"), "magic_carrots")
Test.assertEquals(camelToSnake("greatApples for aSmellyRhino"), "great_apples for a_smelly_rhino")
Test.assertEquals(camelToSnake("th1sSh0uldB3FineT00"), "th1s_sh0uld_b3_fine_t00")