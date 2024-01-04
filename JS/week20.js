/**
 * Date and time
 * -date constructor
 * static methods
 * Date.now()
 * -to track time you need starting point
 * -epoch time or unix time in computer science is the number of seconds since january 1, 1970
 * why 1970 [829 days to 136 years]
 * search for
 * year 2038 problem in computer science
 */
// let dateNow = new Date();
// console.log(dateNow);
// console.log(Date.now());
// let seconds = Date.now() /1000;
// console.log(`Seconds ${seconds}`);
// let minutes = seconds / 60;
// console.log(`Minutes ${minutes}`);
// let hours = minutes / 60;
// console.log(`Hours ${hours}`);
// let days = hours / 24;
// console.log(`days ${days}`);
// let years = days / 365;
// console.log(`years ${years}`);
/**
 * Date and time
 * getTime()=> number of milliseconds
 * getDate() => day of the month
 * getFullYear()
 * getMonth()=> Zero Based
 * getHours()
 * getMinutes()
 * getSeconds()
 */
// let dateNow =new Date();
// let birtday = new Date("Oct 25, 82")
// let dateDiff = dateNow - birtday;
// console.log(dateDiff);
// console.log(dateDiff / 1000 / 60 / 60 / 24/ 365);
// console.log(dateNow);
// console.log(dateNow.getTime());
// console.log(dateNow.getDate());
// console.log(dateNow.getFullYear());
// console.log(dateNow.getMonth());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());
// console.log(dateNow.getMinutes());
// console.log(dateNow.getSeconds());
/**
 * Date and Time
 * setTime(milliseconds)
 * SetDate() => day of the month [negative and positive]
 * setFullYear(year, month => optional [0-11], day => optional [1-31])
 * setMounth(Mounth [0-11],Day => optional [1-31])[negative and postive]
 * setHours(hours [0-23],Minutes => optional [0-59],seconds => optional [0-59],MS optional [0-999])
 * setMinutes(Minutes[0-59],seconds => optional [0-59],MS => optional[0-999])
 * setSeconds(Seconds => [0-59],MS=> optional [0-999])
 */
// let dateNow = new Date();
// console.log(dateNow);
// console.log("#".repeat(5));
// dateNow.setTime(0)
// console.log(dateNow);
// console.log("#".repeat(5));
// dateNow.setTime(10000)
// dateNow.setDate(30)
// console.log(dateNow);
// console.log("#".repeat(5));
// dateNow.setFullYear(2020,13)
// console.log(dateNow);
// console.log("#".repeat(5));
// dateNow.setMonth(0)
// console.log(dateNow);
// console.log("#".repeat(5));
/**
 * Date and time
 * new Date(timestamp)
 * new Date(Date String)
 * new Date(numeric Values)
 * 
 * format
 * - "Oct 25 1982"
 * - "10/25/1982"
 * - "1982-10-25" => ISO international Standard
 * - "1982"
 * - "82"
 * - 1982, 9, 25, 2, 10, 0
 * - 1982, 9, 25
 * - "1982-10-25T06:10:00Z"
 * Date.parse("String") //Read Data from A string
 */

// console.log(Date.parse("Oct 25 1982"));

// let date1 = new Date(0);
// console.log(date1);
// let date2 = new Date(404344800000);
// console.log(date2);
// let date3 = new Date("10-25-1982");
// console.log(date3);
// let date4 = new Date("1982-10-25");
// console.log(date4);
// let date5 = new Date("1982-10");
// console.log(date5);
// let date6 = new Date("1982");
// console.log(date6);
// let date7 = new Date("82");
// console.log(date7);
// let date8 = new Date(1982, 9, 25, 2, 10, 0);
// console.log(date8);
// let date9 = new Date(1982, 9, 25);
// console.log(date9);
// let date10 = new Date("1982-10-25T06:10:00Z");
// console.log(date10);
// let date11 = new Date("82");

/**
 * Date and time
 * -Track Operations time
 * Search
 * - performance.now()
 * - performance.mark()
 */
// start time 
// let start = new Date()
// // operation
// for (let i = 0; i < 10000; i++) {
// // document.write(`<div>${i}<div>`)
// let div = document.createElement("div");
// div.appendChild(document.createTextNode(i));
// document.body.appendChild(div)
    
// }// Time End
// let end = new Date();
// // operation duration
// let duration = end - start;

// console.log(duration);
/**
 * Generators
 * generator function run code when required
 * generator function return special object [generator object]
 * generators are iterable
 */
// function* generateNumbers() {
//     yield 1;
// console.log("hello after yield 1");
//     yield 2;
//     yield 3;
//     yield 4;

// }
// let generator = generateNumbers();
// // console.log(typeof generator);
// // console.log(generator);
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// for (let value of generateNumbers()) {
// console.log(value);    
// }
// for (let value of generator) {
// console.log(value);    
// }
/**
 * generator 
 * delegate generator
 */
// function* generateNums() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// function* generateLetters() {
//     yield "A";
//     yield "B";
//     yield "C";

// }
// function* generateAll() {
//     yield* generateNums();
//     yield* generateLetters();
//     yield* [4,5,6];

// }
// let generator = generateAll();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.return("Z"));
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// function* generateNums() {
//         // yield 1;
//         // yield 2;
//         // return "A";
//         // yield 3;
//         // yield 4;
//         let index = 0;
//         while (true) {
//             yield index++;
//         }
//     }
//     let generator = generateNums();
//     console.log(generator.next());
//     console.log(generator.next());
//     console.log(generator.next());
//     console.log(generator.next());
/**
 * Modules
 * -import and export 
 * 
 */
export let a = 10;
export let arr = [1,2,3,4];
export function saySomething(){
    return `something`;
}
export default function sayHello() {
    return `hello`;
}
