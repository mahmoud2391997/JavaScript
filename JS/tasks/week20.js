// Needed Output
// let dateNow = new Date();
// let birthday = new Date("Sep 23, 97")
// let diff = dateNow - birthday
// console.log(dateNow - birthday + "Seconds");
// console.log(diff /(60 * 1000)+ "Minutes");
// console.log(diff/(60 * 60 * 1000) + "Hours");
// console.log(diff/(60 * 60 * 24 * 1000) + "Days");
// console.log(diff/(60 * 60 * 24 * 30  * 1000) + "Months");
// console.log(diff/(60 * 60 * 24 * 30 * 12 * 1000)  + "Years");
"1247939400 Seconds"
"20798990 Minutes"
"346650 Hours"
"14444 Days"
"481 Months"
"40 Years"
// Needed Output

// var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
// d.setFullYear(1980);
// d.setHours(0);
// d.setSeconds(1);

// console.log(d);
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// Needed Output
// let date = new Date();
// date.setMonth(10,30)
// console.log(date);
// console.log(`Previous Month Is ${date.toLocaleString('en-US', {
//     month: 'long',
//   })} And Last Day Is ${date.getDate()}`);
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// Needed Output
// let birthday = new Date("Sep 23, 97");
// console.log(birthday);
// let date = new Date()
// date.setFullYear(1997)
// date.setMonth(8)
// date.setDate(23)
// date.setHours(0)
// date.setSeconds(0)
// date.setMinutes(0)
// console.log(date);
// let d = new Date();
// console.log(d - 26 * (60 * 60 * 24 * 30 * 12 * 1000));
// console.log(new Date(d - (26 * (60 * 60 * 24 * 30 * 12 * 1000) + 3 * (60 * 60 * 24 * 30 * 1000) + 6 * (60 * 60 * 24 * 1000))));

"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
"Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// Needed Output
// let start = performance.now()
// for (let i = 0; i < 100000 ; i++) {
// console.log(i)    
// }
// let end = performance.now()
// let time = end - start;
// console.log(`Loop Took ${Math.floor(time)} Milliseconds`);
// "Loop Took 1921 Milliseconds."
// Write Your Generator Function Here

// function* generate() {
//     yield 14;
//     yield 154;
//     yield 494;
//     yield 1034;
//     yield 1774;
//     yield 2714;
//     yield 3854;
//     yield 5194;
//     yield 6734;

// };

// let generator = generate();

// console.log(generator.next()); // {value: 14, done: false}
// console.log(generator.next()); // {value: 154, done: false}
// console.log(generator.next()); // {value: 494, done: false}
// console.log(generator.next()); // {value: 1034, done: false}
// console.log(generator.next()); // {value: 1774, done: false}
// console.log(generator.next()); // {value: 2714, done: false}
// console.log(generator.next()); // {value: 3854, done: false}
// console.log(generator.next()); // {value: 5194, done: false}
// console.log(generator.next()); // {value: 6734, done: false}
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
//   }
//   function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
//   }
  
//   // Write Your Generator Function Here
//   function* genAll() {
//     yield* new Set(genNumbers());
//     yield* new Set(genLetters());
//   }
//   let generator = genAll();
  
//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}
// main.js File
import calc from "./mod-one.js";
import * as modOne from "./mod-two.js";
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

