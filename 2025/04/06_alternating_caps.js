// https://edabit.com/challenge/fzuGQP9Cmzi3ujj4r

const alternatingCaps = str => {
    let cap = false;
    const rex = /[a-z]/i;
    return str.split('').map((value) => {
        if (!rex.test(value)) { return value; }
        cap = !cap;
        return cap ? value.toUpperCase() : value.toLowerCase();
    }).join('');
};

const Test = require('../../test.js');
Test.assertEquals(alternatingCaps('alternating caps'), 'AlTeRnAtInG cApS')
Test.assertEquals(alternatingCaps("What is your name?"), "WhAt Is YoUr NaMe?")
Test.assertEquals(alternatingCaps('Lorem ipsum dolor sit amet consectetur adipisicing elit.'), 'LoReM iPsUm DoLoR sIt AmEt CoNsEcTeTuR aDiPiSiCiNg ElIt.')
Test.assertEquals(alternatingCaps('OMG this website is awesome!'), 'OmG tHiS wEbSiTe Is AwEsOmE!')
Test.assertEquals(alternatingCaps('The quick brown fox jumps over the lazy dog'), 'ThE qUiCk BrOwN fOx JuMpS oVeR tHe LaZy DoG')
Test.assertEquals(alternatingCaps('The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes.'), 'ThE iNtEnT iS tO pRoViDe PlAyErS wItH a SeNsE oF pRiDe AnD aCcOmPlIsHmEnT fOr UnLoCkInG dIfFeReNt HeRoEs.')