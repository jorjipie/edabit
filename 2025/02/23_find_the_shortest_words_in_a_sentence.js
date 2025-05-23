// https://edabit.com/challenge/mYJPkSLLxWthSffR6

function findShortestWords(str) {
	const words = str.split(' ')
        .map(c => c.replace(/[0-9.?%]/g, ""))
        .filter(c => c.length > 0);
    const lengthOfShortest = words.
        reduce((acc, cur) => cur.length < acc ? cur.length : acc, words[0].length);
    return words.filter(c => c.length == lengthOfShortest)
        .map(c => c.toLowerCase()).sort();
}

const Test = require('../../test.js');
Test.assertSimilar(findShortestWords("Strive not to be a success, but rather to be of value."), ['a'])
Test.assertSimilar(findShortestWords("You miss 100% of the shots you don’t take."), ['of'])
Test.assertSimilar(findShortestWords("Life is what happens to you while you’re busy making other plans."), ['is', 'to'])
Test.assertSimilar(findShortestWords("We become what we think about."), ['we', 'we'])
Test.assertSimilar(findShortestWords("The most common way people give up their power is by thinking they don’t have any."), ['by', 'is', 'up'])
Test.assertSimilar(findShortestWords("The best time to plant the tree was 20 years ago. The second best time is now."), ['is', 'to'])
Test.assertSimilar(findShortestWords("Your time is limited, so don’t waste it living someone else’s life."), ['is', 'it', 'so'])
Test.assertSimilar(findShortestWords("You can never cross the ocean until you have the courage to lose sight of the shore."), ['of', 'to'])
Test.assertSimilar(findShortestWords("There is only one way to avoid criticism: do nothing, say nothing, and be nothing."), ['be', 'do', 'is', 'to' ])
Test.assertSimilar(findShortestWords("The only person you are destined to become is the person you decide to be."), ['be', 'is', 'to', 'to'])
Test.assertSimilar(findShortestWords("What lies behind us and what lies before us are tiny matters compared to what lies within us."), ['to', 'us', 'us', 'us'])
Test.assertSimilar(findShortestWords("If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace you are living in the present."), ['at', 'if', 'if', 'if', 'in', 'in', 'in'])
Test.assertSimilar(findShortestWords("Happiness depends upon ourselves."), ['upon'])
Test.assertSimilar(findShortestWords("Chase two rabbits, catch none."), ['two'])
Test.assertSimilar(findShortestWords("Only the truth of who you are, if realized, will set you free."), ['if', 'of'])
Test.assertSimilar(findShortestWords("If you end up with a boring miserable life because you listened to your parents, your teacher, your priest, or some guy on television, then you deserve it."), ['a'])
Test.assertSimilar(findShortestWords("To accomplish great things, we must not only act, but also dream; not only plan, but also believe."), ['to', 'we'])
Test.assertSimilar(findShortestWords("A tiger doesn’t lose sleep over the opinion of sheep."), ['a'])
Test.assertSimilar(findShortestWords("Kindness is a language that the deaf can hear and the blind can see."), ['a'])
Test.assertSimilar(findShortestWords("Being realistic is the most common path to mediocrity."), ['is', 'to'])
Test.assertSimilar(findShortestWords("Bravery means finding something more important than fear."), ['fear', 'more', 'than'])
Test.assertSimilar(findShortestWords("Can you imagine what I would do if I could do all I can?"), ['i', 'i', 'i'])
Test.assertSimilar(findShortestWords("Believe you can and you’re halfway there."), ['and', 'can', 'you'])
Test.assertSimilar(findShortestWords("Remember that happiness is a way of travel, not a destination."), ['a', 'a'])
Test.assertSimilar(findShortestWords("May the best day of your past be the worst day of your future."), ['be', 'of', 'of'])