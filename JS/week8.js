/*
function
-what is function?
-user-defined function
-syntax + basic usage
-example from real life
-parameter + argument
-practical example
*/
function sayHello(userName, age) {
    if (age < 20) {
        console.log(`App is not suitable for you`);
    } else {
        console.log(`hello ${userName} your age is ${age}`);
    }

}
sayHello("mahmoud",26);
sayHello("osama",19);
/*
function advanced example
*/
function generateYears(start, end,) {
    for (let index = start; index <= end; index++) {
        
console.log(index);
if (index === 2015) {
    return `interruptting`;            
}        
}
}
generateYears(1997,2023)
function calc(num1, num2) {
    return num1 + num2;
}
let result = calc(10,20);
console.log(result+10);
/*
function
-return
-automatic semicolon insertion [no line terminator allowed]
-interrupting
*/
/*
function
- default function parameters
-function parameters default[undefined]
-old strategies [condition +logical or]
-ES6 Methods
*/
function sayHi(userName = "unknown", age = "unknown") {
    // if (age === undefined) {
        //     age = "unknown"}
        // age = age || "unknown";
        return console.log(`hello ${userName} your age is ${age}`);

        
    }
    sayHi();
    
    /*
    function
    - rest parameters
    -only one allowed
    -must be last element
    */
   function calcu(...numbers) {
       let result = 0;
       for (let index = 0; index < numbers.length; index++) {
           console.log(numbers[index]);
           result += numbers[index];
    }
    return `final result is ${result}`;
       
}
console.log(calcu(10,20,30,40));
/*
function
- parameters
- default
- rest
-loop
-condition
*/
function showInfo(us = "Un", ag = "Un" ,rt = 0, show = "yes", ...sk) {
    document.write(`<div>`);
    document.write(`<h2>Welcome, ${us}</h2>`);
    document.write(`<p>Age: ${ag}</p>`);
    document.write(`<p>Hour Rate: ${rt}</p>`);
    if (show === "yes") {
        if(sk.length > 0){
            document.write(`<p> skills:${sk.join(" | ")}</p>`);
        } else {
            document.write(`<p> skills:No skills</p>`);
        }
    } else {
        console.log("skills are hidden");
    }
    document.write(`</div>`);
}
showInfo("mahmoud",38,20,"yes","problem solving");
function showDetails(a,b,c) {
    let name;
    let age;
    let status
    if (typeof a === "string") {
        name = a;
    } else if (typeof a === "number") {
        age = a;
    }
    else if (typeof a === "boolean") {
        status = a;
    }
    if (typeof b === "string") {
        name = b;
    } else if (typeof b === "number") {
        age = b;
    }
    else if (typeof b === "boolean") {
        status = b;
    }
    if (typeof c === "string") {
        name = c;
    } else if (typeof c === "number") {
        age = c;
    }
    else if (typeof c === "boolean") {
        status = c;
    }
    if (status === true) {
        status = "you are available for hire"
    } else {
        status = "you are not available for hire"

    }
    console.log(`hello ${name},your age is ${age},${status}`);
}
showDetails("osama" ,38 , true);
showDetails(38 , true,"osama" );
showDetails(38 ,"osama" , true);
showDetails(false, "osama" ,38 );