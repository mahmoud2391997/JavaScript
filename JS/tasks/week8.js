function sayHello(theName, theGender) {
    // Your Code Here
    if (theGender === "Male") {
        console.log(`hello Mr ${theName}`);
    } else if (theGender === "Female"){
        console.log(`hello Miss ${theName}`);
    } else {
        console.log(`hello ${theName}`);
    }
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"
  function calculate(firstNum, secondNum, operation) {
    // Your Code Here
    if (secondNum === undefined) {
    console.log("Second Number Not Found");
    } else if (operation === undefined || operation === "add") {
        console.log(firstNum + secondNum);
    } else if (operation === "multiply") {
        console.log(firstNum * secondNum);
    } else if (operation === "subtract") {
        console.log(firstNum - secondNum);
    }
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600
  function ageInTime(theAge) {
    // Your Code Here
    if (10 < theAge < 110) {
        console.log(`${theAge * 12} months`)
    } else {
        console.log("Age is out of range");
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months
function multiply(...params) {
    let result = 1;
    for (let index = 0; index < params.length; index++) {
        if (typeof params[index] === "string") {
        continue;
        } else if (typeof params[index] === "number") {
            params[index] = Math.trunc(params[index])
        }
        result = result * params[index]
    }
    console.log(result);
}
  multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000