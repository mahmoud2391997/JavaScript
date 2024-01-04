/**
 * Regular expression
 * -Email
 * -IP
 * -phone
 * -URL
 */
// let str1 = "10 20 100 1000 5000";
// let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";
// let invalidEmail = "Osama@@@gmail...com";
// let validEmail = "o@nn.sa";
// let ip ='192.168.2.1';//IPv4
// let url = 'elzero.org';
// let url1 = 'elzero.org/';
// let url2 = 'https://elzero.org/';
// let url3 = 'http://www.elzero.org/';
// let url4 = 'https://.elzero.org/';
// let url5 = 'https://elzero.org/';
// let url6 = 'https://elzero.org/?facebookid=fdsjfhdskfdklvklvfkl';
/**
 * RegEx
 * syntax 
 * /pattern/modifier(s);
 * new RegEx("pattern","modifier(s)");
 * Modifiers => Flags
 * i => case-insenstive
 * g => global
 * m => Multilines
 * 
 * Search Methods
 * -Match(Pattern)
 * Match
 * --Matches A string against a regular expression pattern
 * --Returns an array with the matches 
 * --Returns null If no Match is found
 */

// let myString = "Hello Elzero web school I love elzero";
// let regex = /elzero/ig;
// console.log(myString.match(regex));

/**
 * Regular expression
 * ranges
 * -part1
 * (X|Y)=> X or Y
 * [0-9] => 0 => 9
 * [^0-9] => Any Character not 0 to 9
 * practice
 * -part1
 * [a-z]
 * [^a-z]
 * [A-Z]
 * [abc]
 * [^abc]
 */
// let tld = "Com Net Org Info Code Io"
// let tldRe = /(info|org|io)/ig;
// console.log(tld.match(tldRe));
// let nums = "12345678910"
// let numsRe = /[0-2]/g;
// console.log(nums.match(numsRe));
// let Notnums = "12345678910"
// let notNumsRe = /[^0-2]/g;
// console.log(Notnums.match(notNumsRe));
// let specialNums = "1!2@3#4$5%678910"
// let specialNumsRe = /[^0-9]/g;
// console.log(specialNums.match(specialNumsRe));
// let practice = "Os1 Os10s Os2 Os8 Os8Os"
// let practiceRe = /Os[5-9]Os/g;
// console.log(practice.match(practiceRe));
// let myString = "AaBbcdefG123!1234%^&*";
// let atozSmall = /[a-z]/g;
// let NotatozSmall = /[^a-z]/g;
// let atozCapital = /[A-Z]/g;
// let NotatozCapital = /[^A-Z]/g;
// let aAndCAnde = /[ace]/g;
// let NotaAndCAnde = /[^ace]/g;
// let lettersCapsAndSmall = /[a-zA-Z]/g;
// let NotlettersCapsAndSmall = /[^a-zA-Z]/g;
// let specials = /[^a-zA-Z0-9]/g;
// console.log(myString.match(atozSmall));
// console.log(myString.match(NotatozSmall));
// console.log(myString.match(atozCapital));
// console.log(myString.match(NotatozCapital));
// console.log(myString.match(aAndCAnde));
// console.log(myString.match(NotaAndCAnde));
// console.log(myString.match(lettersCapsAndSmall));
// console.log(myString.match(NotlettersCapsAndSmall));
// console.log(myString.match(specials));
/**
 * regular expression
 * character classes
 * . => matches any character , except newline or other line terminators.
 * \w = matches word characters.[a-z,A-Z,0-9 and underscore]
 * \W => matches non word characters
 * \d => matches digits from 0 to 9.
 * \D => matches non-digits from 0 to 9.
 * \s => matches whitespace character.
 * \S => matches non whitespace character.
 */
// let email = "0@@@g...com o@g.com o@g.net A@Y.com O-g.com 0@s.com 1@1.com";
// let dot = /./g;
// let word = /\W/g;
// let validEmail = /\w@\w.(com|net)/g
// console.log(email.match(dot));
// console.log(email.match(word));
// console.log(email.match(validEmail));

/**
 * regular expression
 * characters classes
 * \b => matches at the beginning or end of a word
 * \B => matches Not at the beginning\end of a word
 * Test Method
 * pattern.test(input)
 */


// let names = "sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed "
// let re = /(\bspam|spam\b)/ig;
// console.log(names.match(re));
// console.log(re.test(names));
// console.log(re.test("osama"));
// console.log(re.test("1spam"));
/**
 * regular expression
 * quantifiers
 * n+ => One or More
 * n* => zero or More
 * n? => zero or One
 */
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.com osama@mail.ru"// All Emails
// // let mailsRe = /\w+@\w+.(com|net)/gi;
// let mailsRe = /\w+@\w+.\w+/gi;
// console.log(mails.match(mailsRe));
// let nums = "0110 10 150 05120 350 00"//0 numbers or No 0
// let numsRe = /0\d+0/ig;
// console.log(nums.match(numsRe));
// let urls = "https://google.com http://www.website.net web.com" //http + https
// let urlRe = /(https?:\/\/)?(www.)?\w+.\w+/ig;
// console.log(urls.match(urlRe));
/**
 * regular expression
 * quantifiers
 * n{x} => number of
 * n{x,y} => range
 * n{x,} => at least
 * 
 */
// let serials = "S100S S3000S S50000S S950000S";
// console.log(serials.match(/S\d{3}S/ig));//S[Three number]S
// console.log(serials.match(/S\d{4,5}S/ig));//S[four or five numbers]S
// console.log(serials.match(/S\d{4,}S/ig));//S[at least four]S
/**
 * regular expression
 * quantifiers
 * $ => End with something
 * ^ => start with something
 * ?= => followed by something
 * ?! => not followed by something
 */
// let myString = "We love programming";
// let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";
// console.log(/ing$/ig.test(myString));
// console.log(/^we/ig.test(myString));
// console.log(/^\s/ig.test(names));
// console.log(/lZ$/ig.test(names));
// console.log(names.match(/\d\w{5}(?=Z)/gi));
// console.log(names.match(/\d\w{8}(?!Z)/gi));
/**
 * regular expression
 * -replace 
 * -replaceAll
 */
// let txt = "we love programming and @ because @ is amazing";
// console.log(txt.replace("@","javaScript"));
// console.log(txt.replaceAll("@","javaScript"));
// let re = /@/gi; 
// console.log(txt.replaceAll(re,"javaScript"));
/*
regular expression
-input form validation practice
*/
// document.getElementById("register").onsubmit = function () {
//     let phoneInput = document.getElementById("phone").value;
//     let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/
//     let validationResult = phoneRe.test(phoneInput);
//     if (validationResult === false) {
//         return false;
//     }
//     return true;
// }
// let url = 'elzero.org';
// let url2 = 'http://elzero.org';
// let url3 = 'https://elzero.org';
// let url4 = 'https://www.elzero.org/';
// let url5 = 'https://elzero.org:8000/articles.php?id=100&cat=topics';
// let re = /(https?:\/\/(www.)?)?\w+.\w+(:\d+\/\w+.\w+\D+\w+\D+)?/ig;
// console.log(url.match(re));
// console.log(url2.match(re));
// console.log(url3.match(re));
// console.log(url4.match(re));
// console.log(url5.match(re));
