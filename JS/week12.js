/*
-what is DOM
-Dom selectors
---Find element by id
---find element by tag name
---find element by class name
---find element by css selectors
---find element by collection
-------title
-------body
-------images
-------forms
-------links
*/
// let myIdElement = document.getElementById("my-div");
// let myTagElement = document.getElementsByTagName("p");
// let myClassElement = document.getElementsByClassName("my-span");
// let myQueryElement = document.querySelector(".my-span");
// let myQueryAllElement = document.querySelectorAll(".my-span");
// console.log(myIdElement);
// console.log(myTagElement[1]);
// console.log(myClassElement[1]);
// myTagElement[1].innerHTML = "Test";
// console.log(myQueryElement);
// console.log(myQueryAllElement[1]);
// console.log(document.title);
// console.log(document.body);
// console.log(document.forms[0].one.value);
// console.log(document.links[1].href);
/*
DOM [Get / set Elements Content and attributes]
-innerHTML
-TextContent 
-Change attributes directly
-Change Attributes with methods
---getAttribute
---setAttribute
 Search
-innerText
*/
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = "Text From <span>Main.js</span> File";
// myElement.textContent = "Text From <span>Main.js</span> File";
// document.images[0].src = "https://google.com";
// document.images[0].alt = "alternate";
// document.images[0].title = "picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";
// let myLink = document.querySelector(".link");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// myLink.setAttribute("href", "https://google.com")
// myLink.setAttribute("title", "twitter")
/*
DOM [CHECK Attributes]
-Element.attributes
-Element.hasAttribute
-Element.hasAttributes
-Element.removeAttributes
*/
// console.log(document.getElementsByTagName("p")[0].attributes);
// let myP =document.getElementsByTagName("p")[0];
// if (myP.hasAttribute("data-src") ) {
//     if (myP.getAttribute("data-src") === "") {
//         myP.removeAttribute("data-src");
//     } else {
//         myP.setAttribute("data-src","New Value")
//     }
// } else {
//     console.log("Not Found");

// }
// if (document.getElementsByTagName("div")[0].hasAttribute()) {
//     console.log("has attributes");
// } else {
//     console.log("div has no attributes")
// }
// if (myP.hasAttribute()) {
//     console.log("has attributes");
// }
/*
DOM [Create Elements]
-createElement
-createComment
-createTextNode
-createAttribute
-appendChild
*/
// let myElement = document.createElement("div");
// console.log(myElement);
// let myAttr = document.createAttribute("data-custom");
// let myText = document.createTextNode("Product One");
// let myComment = document.createComment("This is Div");

// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-test", "testing");
// myElement.appendChild(myComment);
// myElement.appendChild(myText);
// document.body.appendChild(myElement);
/*
DOM [create elements]
-practice product with heading and paragraph
*/
// let myMainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product title");
// let myParagraphText = document.createTextNode("Product Description");

// // Add heading text
// myHeading.appendChild(myHeadingText);

// // add heading to main element 
// myMainElement.appendChild(myHeading);

// // add paragraph text
// myParagraph.appendChild(myParagraphText);

// // add paragraph to my main element
// myMainElement.appendChild(myParagraph);

// myMainElement.className = "product";
// document.body.appendChild(myMainElement);
/*
DOM [Deal with Children]
-children
-childNodes
-firstchild
-lastchild
-firstElementChild
-lastElementChild
*/
// let myElement =document.querySelector("div");
// console.log(myElement);
// console.log(myElement.children[0]);
// console.log(myElement.childNodes);
// console.log(myElement.childNodes[0]);
// console.log(myElement.firstElementChild);
/*
DOM [Events]
-Use Events On HTML
- use events on JS
--onClick
--oncontextmenu
--onmouseenter
--onmouseleave

--onload
--onscroll
--onresize

--onfocus
--onblur
--onsubmit
*/
// let myButton = document.getElementById("btn");
// myButton.onmouseleave = function () {
//     console.log("Clicked");
// }
// window.onresize = function () {
//     console.log("scroll");
// }
/*
DOM [Events]
-validate form practice
-prevent default
*/
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");
document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;
    console.log(userInput.value);
    console.log(userInput.value.length);
    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
        console.log("valid user name");
    }
    if (ageInput.value !== "") {
        ageValid = true;
        console.log("valid age");

    }
    if (userValid === false || ageValid === false) {
        e.preventDefault();
        
    }
}

document.links[0].onclick = function (events) {
    console.log(events);
    events.preventDefault();
}