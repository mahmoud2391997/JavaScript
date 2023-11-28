/**
 * DOM [Event Simulation]
 * click
 * focus
 * blur
 */
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// window.onload = function () {
//     two.focus();
// }
// one.onblur = function () {
// document.links[0].click();
// }
/**
 * DOM [class list]
 * classList
 * length
 * contains
 * item(index)
 * add
 * remove
 * toggle
 */
// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("mahmoud"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));
// element.onclick = function () {
//     element.classList.toggle("one");
// }
/**
 * DOM
 * cssText
 * removeProperty(propertyName) [Inline, stylesheet]
 * setProperty(propertyName, value, priorty)
 */

// let element = document.getElementById("my-div");
// element.style.color = "red";
// element.style.fontWeight = "bold";
// element.style.cssText = "font-weight: bold; color:green; opacity:0.9";
// element.style.removeProperty("color");
// element.style.setProperty("font-size","40px","important");
// document.styleSheets[0].rules[0].style.removeProperty("line-height");
// document.styleSheets[0].rules[0].style.setProperty("background-color","red");
/**
 * DOM [deal with elements]
 * before[Element || String]
 * after [Element || String]
 * append [Element || String]
 * prepend [Element || String]
 * remove
 */
// let myElement = document.getElementById("my-div");
// let createdP = document.createElement("p");
// myElement.remove();
/**
 * DOM [traversing]
 * nextSibling
 * previousSibling
 * nextElementSibling
 * previousElementSibling
 * parentElement
 */
// let span = document.querySelector(".two");
// console.log(span.parentElement);
// span.onclick = function () {
//     span.parentElement.remove()
// }
/**
 * DOM[cloning]
 * cloneNode(Deep)
 */
// let myP =document.querySelector("p").cloneNode(true);
// let myDiv = document.querySelector("div");

// myP.id = `${myP.id}-clone`
// myDiv.appendChild(myP);
/*
DOM [add event listener]
-addEventListener
-Use without on
-Attach multiple event

search
-capture & bublling JavaScript
-remove EventListener
*/
// let myP =document.querySelector("p");

// myP.onclick = one;
// myP.onclick = two;

// function one () {
//     console.log("Message from Onclick1");
// }
// function two() {
//     console.log("Message from Onclick2");
// }
// window.onload = "osama";

// myP.addEventListener("click", function () {
//     console.log("Message From Onclick1 event");

// });
// myP.addEventListener("click", one

// );
// myP.addEventListener("click", two

// );
// myP.onclick = function () {
    //     let newP = myP.cloneNode(true);
    //     newP.className = `clone`;
    
    //     document.body.appendChild(newP);
    // }
    // let cloned = document.querySelector(".clone");
    // cloned.onclick = function () {
        //     console.log("I am Cloned");
        // }
        // document.addEventListener("click",function (e) {
            //     if (e.target.className === "clone") {
                //         console.log("I'm cloned");
                //     }
                // })
                let body = document.querySelector("body");
                body.style.margin = 0;
                body.style.backgroundColor = "rgb(236,236,236)";
                body.style.fontFamily = "Tahoma, Arial";
                
                let header = document.createElement("header");
                header.className = "website-head";
header.style.display = "flex";
header.style.padding = "20px";
header.style.backgroundColor = "rgb(255,255,255)";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
document.body.appendChild(header);

let logoDiv = document.createElement("div");
logoDiv.className = "logo";
logoDiv.title = "Website logo";
logoDiv.style.fontWeight = "bold";
logoDiv.style.color = "rgb(35,169,110)";
logoDiv.style.fontSize = "26px";

logoDiv.innerText = "Elzero";
header.appendChild(logoDiv);

let list = document.createElement("ul");
list.className = "menu";
list.style.padding = 0;
list.style.margin = 0;
list.style.display = "flex";
list.style.listStyle = "none";
list.style.width = "40%";
list.style.position = "absolute";
list.style.right = 0;
list.style.justifyContent = "space-evenly";
list.style.alignItems = "center";


let listItem1 = document.createElement("li");
let listItem2 = document.createElement("li");
let listItem3 = document.createElement("li");
let listItem4 = document.createElement("li");

listItem1.innerText="Home";
listItem2.innerText="about";
listItem3.innerText="service";
listItem4.innerText="contact";


list.appendChild(listItem1);
list.appendChild(listItem3);
list.appendChild(listItem4);
list.appendChild(listItem2);

header.appendChild(list);
let mainDiv = document.createElement("div");
mainDiv.className = "content";
mainDiv.style.display = "flex";

mainDiv.style.padding = "20px";

mainDiv.style.flexWrap = "wrap";

mainDiv.style.justifyContent = "center";

mainDiv.style.gap = "20px";

mainDiv.style.minHeight = "calc(100vh - 142px)";
mainDiv.style.boxSizing = "border-box";
document.body.appendChild(mainDiv);
let product = document.createElement("div");
product.innerText = "product";
product.className = "product";
product.style.padding = "20px";
product.style.backgroundColor = "white";
product.style.border = "1px solid rgb(221,221,221)";
product.style.width = "calc((100% - 40px) / 3)"
product.style.boxSizing = "border-box"
product.style.textAlign = "center"
product.style.color = "black"
product.style.borderRadius = "6px"

let index = 1;
let productList = [];
let productIndex = [];



for (let i = 1; i < 16; i++) {
    productIndex[i] = document.createElement("span");
    productIndex[i].style.fontSize = "40px";
    productIndex[i].style.color = "black";
    productIndex[i].style.fontWeight = "normal";
    productIndex[i].style.display = "block";
    productIndex[i].style.marginBottom = "10px";
    productIndex[i].style.marginTop = "10px";
    productIndex[i].innerText = i;
    
    productList[i] = product.cloneNode(true);
    productList[i].appendChild(productIndex[i]);
    mainDiv.appendChild(productList[i]);
}

let footer = document.createElement("footer");
footer.className = "footer";
footer.style.backgroundColor = "rgb(35, 169, 110)";
footer.style.fontSize = "26px";
footer.style.width = "100%";
footer.style.textAlign = "center";
footer.style.padding = "20px"
footer.style.color = "white"
footer.innerText = "Copyright 2021"
mainDiv.appendChild(footer);

