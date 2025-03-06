// https://edabit.com/challenge/i94xogDsjvsKep64Q

const morseToDots = {
  ".-":"A", "-...":"B", "-.-.":"C", "-..":"D", ".":"E", "..-.":"F",
  "--.":"G", "....":"H", "..":"I", ".---":"J", "-.-":"K", ".-..":"L",
  "--":"M", "-.":"N", "---":"O", ".--.":"P", "--.-":"Q", ".-.":"R",
  "...":"S", "-":"T", "..-":"U", "...-":"V", ".--":"W", "-..-":"X",
  "-.--":"Y", "--..":"Z", "-----":"0", ".----":"1", "..---":"2",
  "...--":"3", "....-":"4", ".....":"5", "-....":"6", "--...":"7",
  "---..":"8", "----.":"9", "-.-.--":"!", "   ":" ", "..--..":"?",
  ".-.-.-":".", ".----.":"'", "---...":":", "--..--":",", " ":""
};

const decodeMorse = str => str.split(' ').map((e, i, a) => {
    let char = morseToDots[e];
    return char == null ? a[i-1] == '' ? null : ' ' : char;
  }).join('');




const Test = require('../../test.js');
Test.assertEquals(decodeMorse(". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."), "EDABBIT CHALLENGE")
Test.assertEquals(decodeMorse(".... . .-.. .--.   -- .   -.-.--"), "HELP ME !")
Test.assertEquals(decodeMorse("-.-. .... .- .-.. .-.. . -. --. ."), "CHALLENGE")
Test.assertEquals(decodeMorse(".----   .- .--. .--. .-.. .   .- -. -..   .....   -.-. .... . .-. .-. -.-- --..--   --...   ... .- -. -.. .-- .. -.-. .... . ... --..--   ..---   - .- -... .-.. . ... --..--   ----.   .. -. ...- .. - . -..   --. ..- -.-- ...   -.-.--   - .... .- - .----. ...   ... ---   -.-. --- --- .-.. .-.-.- .-.-.- .-.-.-"), "1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT'S SO COOL...")
Test.assertEquals(decodeMorse("-.. .. -..   -.-- --- ..-   --. --- -   -- -.--   -- .- .. .-..   ..--.."), "DID YOU GOT MY MAIL ?")
Test.assertEquals(decodeMorse("- .-- ---   - .... .. -. --. ...   - ---   -.- -. --- .--   ---...   ..   ..-. --- .-. --. . -   - .... . --   ---... -.-."), "TWO THINGS TO KNOW : I FORGET THEM :C")


//1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THAT'S SO COOL...
//1 APPLE AND 5 CHERRY, 7 SANDWICHES, 2 TABLES, 9 INVITED GUYS ! THATS SO COOL...