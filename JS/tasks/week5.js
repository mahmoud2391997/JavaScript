console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(typeof -50 == typeof +"-40"); // true
console.log(typeof 10 == typeof -"-40"); // true
console.log(typeof "10" != typeof 10); // true
console.log(typeof 20 != false); // true
let num1 = 10;
let num2 = 20;

console.log(num2 > num1); // true
console.log(num2 >= num1); // true
console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 !== num2); // true
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b === a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
// Test Case 1
let num44 = 9; // "009"

// Test Case 2
let num444 = 20; // "020"

// Test Case 3
let num4 = 110; // "110"
num4 < 10 ? console.log("00" + num4) : num4 >= 10 && num4 <= 100 ? console.log("0" + num4) : num4 > 100 ? console.log(num4) : console.log("unknown");
let num11 = 9;
let str = "9";
let str2 = "20";

// Output
num11 == str ? console.log("{num1} Is The Same Value As {str}") :  console.log("unknown");
num11 !== str ? console.log("{num1} Is The Same Value As {str} But Not The Same Type") :  console.log("unknown");
num11 !== str2 ? console.log("{num1} Is Not The Same Value Or The Same Type As {str2}") : console.log("unknown");
str !== str2 ? console.log("{str} Is The Same Type As {str2} But Not The Same Value") : console.log("unknown");
let num111 = 10;
let num22 = 30;
let num3 = "30";

// Needed Output
if(num3 > num111 && num3 !== num111){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
}
if(num3 > num111 && num22 == num3 && num3 !== num111 ){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
}
if(typeof num3 != typeof num2 && num3 !== num111){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");
}

// Edit What You Want Here

let numb1 = 11;
let numb2 = 10;
let numb3 = 11;
let numb4 = 33;
console.log(numb1 + numb2);
/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (numb1 > numb2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (numb1 > numb2 && numb1 < numb4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (numb1 > numb2 && numb1 === numb3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((numb1 + numb2) < numb4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((numb1 + numb3) < numb4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((numb1 + numb2 + numb3) < numb4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (numb4 - (numb1 + numb3) + numb2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
/*
// You Need To Remove Spaces And Make First Letter Capital => Friday

let day = "Friday";
let day = "Saturday";
let day = "Sunday";
// Output => "No Appointments Available"

let day = "Monday";
let day = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day = "World";
// Output => "Its Not A Valid Day"
*/
let day = "   friday  ";
day = "Friday";
day = "Saturday";
day = "Sunday";
day = "Monday";
// day = "Thrusday";
// day = "Tuesday";
// day = "Wednesday";

switch (day) {
  case "   friday  ":
    console.log(day.charAt(3).toUpperCase() + day.substring(4,11));
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("no appointments available");
    break;
  case "Monday":
  case "Thrusday":
    console.log("10:00 to 12:00");
    break;
  case "Tuesday":
    console.log("10:00 to 11:00");
    break;
  case "Wednesday":
    console.log("10:00 to 12:30");
    break;
  default:
    console.log("invalid day");
    break;
}