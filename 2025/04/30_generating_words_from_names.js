//https://edabit.com/challenge/tGehcXPRmrepQPGQW

/* and this is why it's important to write good tests. */ 

const anagram = (name, arr) => 
    name.replace(' ', '').length == arr.join('').length;

const Test = require('../../test.js');
Test.assertEquals(anagram("Justin Bieber", ["injures", "ebb", "it"]), true)
Test.assertEquals(anagram("Natalie Portman", ["ornamental", "pita"]), true)
Test.assertEquals(anagram("Emma Watson", ["mows", "meant", "a"]), true)
Test.assertEquals(anagram("Daniel Radcliffe", ["clarified", "elf", "and"]), true)
Test.assertEquals(anagram("Tom Hiddleston", ["tenths", "mood", "lid"]), true)
Test.assertEquals(anagram("Blake Lively", ["key", "veal", "bill"]), true)
Test.assertEquals(anagram("Ryan Reynolds", ["yonder", "sly", "ran"]), true)
Test.assertEquals(anagram("Kristen Stewart", ["trinkets", "war", "set"]), true)
Test.assertEquals(anagram("Chris Pratt", ["chirps", "rat"]), false)
Test.assertEquals(anagram("Jeff Goldblum", ["jog", "meld", "bluffs"]), false)
Test.assertEquals(anagram("Taylor Swift", ["stratify", "ow"]), false)
Test.assertEquals(anagram("Adam Levine", ["medieval", "man"]), false)
Test.assertEquals(anagram("Blake Shelton", ["betoken", "all", "she"]), false)
Test.assertEquals(anagram("Miley Cyrus", ["lyric", "my", "suer"]), false)
Test.assertEquals(anagram("Matt Damon", ["madman"]), false)
Test.assertEquals(anagram("Graham Norton", ["graham", "not", "or"]), false)
Test.assertEquals(anagram("Graham Norton", ["graham", "not", "or"]), false)