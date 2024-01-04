/**
 * what si json ?
 * -javascript object notation
 * -format for sharing data between servers and cliects
 * -json derived from javascript
 * -alternative to xml
 * -file extention is .json
 * 
 * why JSON?
 * -easy to use and read
 * - used by most programming languages and its frameworks
 * - you can convert json object to js object and vice versa
 * 
 * JSON vs XML
 * = text based format  = markuo language
 * =lightweight         = heavier
 * =Dose not use tags   = use tags
 * =shorter             = not short
 * =can use arrays      = cannot use arrays
 * =not support comments = suport comments
 * 
 * 
 * JSON syntax
 * -Data added inside curly braces{ }
 * -Data added with key : value
 * -key should be string wrapped in double quotes
 * -data separated by comma
 * -square brackets [] for arrays
 * curly braces {} for objects
 * 
 * -available data types
 * -String
 * -number
 * -0bject
 * -array
 * -boolean values
 * -null
 * 
 * JSON
 * -API Overview
 * - tools to test API
 * -Preview Github API
 * 
 * JSON
 * -JSON.parse => convert text data to js object
 * -JSON.stringify => convert JS object to JSON
 */
const myJsonObjectFromServer = `{"Username": "Osama","Age": 39}`;
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);
const myJsObject = JSON.parse(myJsonObjectFromServer)
console.log(typeof myJsObject);
console.log(myJsObject);
myJsObject["Username"] = "elzero";
myJsObject["Age"] = 40;
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log( myJsonObjectToServer);
/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");
/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

// setTimeout(() => {
//     console.log("Web API");
//   }, 0);
  
//   function one() {
//     console.log("One");
//   }
//   function two() {
//     one();
//     console.log("Two");
//   }
//   function three() {
//     two();
//     console.log("Three");
//   }
  
//   three();
  
  /*
  =================================
  console.log("One");
  =================================
  function one() {
    console.log("One");
  }
  =================================
  function two() {
    one();
    console.log("Two");
  }
  =================================
  function three() {
    two();
    console.log("Three");
  }
  =================================
  */
  
  console.log("#####");
  console.log("One");
  console.log("Two");
  console.log("Three");
  /*
  To Understand Ajax, Fetch, Promises

  Event Loop + Callback Queue

  Story
  - JavaScript Is A Single Threaded Language "All Operations Executed in Single Thread"
  - Call Stack Track All Calls
  - Every Function Is Done Its Poped Out
  - When You Call Asynchronous Function It Sent To Browser API
  - Asynchronous Function Like Settimeout Start Its Own Thread
  - Browser API Act As A Second Thread
  - API Finish Waiting And Send Back The Function For Processing
  - Browser API Add The Callback To Callback Queue
  - Event Loop Wait For Call Stack To Be Empty
  - Event Loop Get Callback From Callback Queue And Add It To Call Stack
  - Callback Queue Follow FIFO "First In First Out" Rule
*/

console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);

let myVar = 100;
myVar += 100;
/*
  AJAX
  - Asynchronous JavaScript And XML
  - Approach To Use Many Technologies Together [HTML, CSS, Js, DOM]
  - It Use "XMLHttpRequest" Object To Interact With The Server
  - You Can Fetch Data Or Send Data Without Page Refresh
  - Examples
  --- Youtube Studio
  --- Google Drive
  --- Upload Article Photo
  --- Form Check Name

  Test new XMLHttpRequest();
  Request And Response
  Status Code
*/

let req = new XMLHttpRequest();
console.log(req);
/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

// let myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
// myRequest.send();
// console.log(myRequest);

/*
Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};