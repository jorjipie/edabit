// https://edabit.com/challenge/fJXBeSYwiPbd2Zn8Z

const tidyLink = (url, text, hoverText) => 
    `[${text}](${url}${hoverText != null ? ' \"' + hoverText + '\"' : ''})`;

const Test = require('../../test.js');
Test.assertEquals(tidyLink('https://edabit.com/challenges', 'Challenges', 'Go to the challenges!'), '[Challenges](https://edabit.com/challenges "Go to the challenges!")')
Test.assertEquals(tidyLink('https://www.google.com', 'Google', 'Google Search'), '[Google](https://www.google.com "Google Search")')
Test.assertEquals(tidyLink('https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'Click Me!'), '[Click Me!](https://www.youtube.com/watch?v=dQw4w9WgXcQ)')
Test.assertEquals(tidyLink('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet', 'Markdown Cheatsheet'), '[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)')
Test.assertEquals(tidyLink('https://www.python.org/', 'Python', 'Visit the Python Website!'), '[Python](https://www.python.org/ "Visit the Python Website!")')
Test.assertEquals(tidyLink('https://www.youtube.com/watch?v=O2yPnnDfqpw', 'i just did a bad thing'), '[i just did a bad thing](https://www.youtube.com/watch?v=O2yPnnDfqpw)')
Test.assertEquals(tidyLink('https://www.reddit.com/', 'Reddit', 'the front page of reddit'), '[Reddit](https://www.reddit.com/ "the front page of reddit")')
