/*
Comparison Operators
- == Equal
- != not equal
- === identical
- !== not identical
- > larger than
- >= larger than or equal
- < smaller than
- <= smaller than or equal
*/
console.log(10 == "10"); // compare value only
console.log(10 != "10"); // compare value only
console.log(10 === "10"); // compare value + type
console.log(10 !== "10"); // compare value + type
console.log(10 !== 10); // compare value + type
console.log(10 > 10); // compare value + type
console.log(10 >= 10); // compare value + type
console.log(10 > 20); // compare value + type
console.log(10 < 10); // compare value + type
console.log(10 <= 10); // compare value + type
console.log(10 < 20); // compare value + type
/*
-logical operators
-! not
-&& And
-|| or 
*/
console.log(true);
console.log(!true);
console.log(!(10 == "10"));
console.log(10 == "10" && 10 > 8 && 10 > 50);
console.log(10 == "10" || 10 > 8 || 10 > 50);
/*
Control Flow
-if
-else if
- else
if(Condition){
    //block of code
}
*/


let price = 100;
let discount = false;
let discountAmount = 20;
let country = "ksa";
let student = true;
if (discount == true){
    price -= discountAmount; //price = price -discountAmount
} else if (country === "Egypt"){

    price -= 2 * discountAmount; //price = price -discountAmount

} else if (country === "syria"){
    price -= 3 * discountAmount;
} else {
    price -= 4 * discountAmount;
}


console.log(price);
/*
conditional (Ternary) operator
*/
let Name = "Ahmed";
let gender = "Male";
let age = "30";
if (gender === "Male"){
    console.log("Mr")
} else {
    console.log("Mrs")
}
// condition ? if true : if false
gender === "Male" ? console.log("Mr") : console.log("Mrs");
age < 20 ? console.log(20) : age > 20 && age < 60 ? console.log("between 20 and 60") : age > 60 ?  console.log("more than 30") : console.log("unknown");
/*
Logical or ||
-Null + undefined + any falsy value
-nullish coalescing operator ??
- null + undefined 
*/
let Price = "";
console.log(`the price is ${Price || 200}`);
console.log(`the price is ${Price ?? 200}`);
let a = 10;
a == 10 ? console.log(10) : a >= 10 && age <= 40 ? console.log("10 to 40") : age > 40 ? console.log("> 40") : console.log("unknown");
let st = "elzero Web school";
console.log(st.includes("W"));
console.log(st.substring(0,6) + st.substring(0,6) );

if((st.length * 2).toString() === "34"){
    console.log("good");
}
if(st.includes("W") ? "W" : false === "w"){
    console.log("good");
}
if(st !== "string"){
    console.log("good");
}
if(typeof st.length === "number"){
    console.log("good");
}
if(st.substring(0,6) + st.substring(0,6) === "elzeroelzero"){
    console.log("good");
}
/*
Switch Statment
Switch (expression){
    Case1:
    //code block
    Case2:
    //code block
    Deafult:
    //code block
}
-default ordering
-multiple match
-===
 */
let day = 5;
switch (day) {
    default:
        console.log("unknown day");
        break;
    case 0:
        console.log("Saturday")
        break;
    case 1:
        console.log("sunday")
        break;
    case 2:
        console.log("monday")
        break;
   
}
let job = "owner";
let salary = 0;
if (job === "Manager") {
    salary = 8000;
} else if (job === "Developer" || job === "Designer"){
    salary =7000;
} else if (job === "IT" || job === "Support"){
    salary =6000;
} else {
    salary = 4000;
}
let salary1;
switch (job) {
    case "Manager":
        salary1 = 8000;
        break;
    case "Developer":
    case "Designer":
        salary1 = 7000;
        break;
    case "IT":
    case "Support":
        salary1 = 6000;
        break;
    default:
        salary1 = 4000;
        break;
}
console.log(salary1 === salary)
let holidays = 5;
let money = 0;
if (holidays === 0) {
    money = 5000;
} else if (holidays === 1 || holidays === 2) {
    money = 3000;
} else if (holidays === 3) {
    money = 2000;
} else if (holidays === 4) {
    money = 1000;
} else {
    money = 0;
}
console.log(money);