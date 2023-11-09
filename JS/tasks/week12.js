// console.log(document.querySelector(".element"));
// console.log(document.querySelector("#elzero"));
// console.log(document.querySelectorAll(".element"));
// console.log(document.querySelectorAll("#elzero"));
// console.log(document.querySelector("div"));
// console.log(document.querySelector("div[name=js]"));
// console.log(document.querySelectorAll("div[name=js]"));
// console.log(document.querySelectorAll("div"));
// console.log(document.getElementById("elzero"));
// console.log(document.getElementsByClassName("element"));
// console.log(document.getElementsByName("js"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes[1]);
// console.log(document.body.children[0]);
// for (let index = 0; index < document.images.length; index++) {
//     document.images[index].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//     document.images[index].alt = "elzero logo"
//     document.images[index].style = "background-color : blue;"
// }
// let input = document.querySelector("input");
// let result = document.getElementsByClassName("result")[0]
// console.log(input);
// console.log(result);
// input.oninput = function () {
//     result.innerHTML = `${input.value} USD = ${(input.value * 15.6).toFixed(2)}  EGP`
// }
// document.body.firstElementChild.setAttribute("title",document.body.firstElementChild.className)
// let elementTwo = document.querySelector(".two");
// elementTwo.setAttribute("title", elementTwo.className);
// let elementOne = elementTwo.innerHTML;
// elementTwo.innerHTML = document.body.firstElementChild.innerHTML;
// document.body.firstElementChild.innerHTML = elementOne;
// let img =document.querySelectorAll("img");
// for (let index = 0; index < document.images.length; index++) {
    
// if (img[index].hasAttribute("alt")) {
// img[index].alt = "old";
// }    else {
//     img[index].alt = "elzero new";

// }
// }
let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");
submit = document.querySelector("[type='submit']")

form[0].onsubmit = function (el) {
el.preventDefault();
document.querySelectorAll(".box").forEach(el => el.remove());
for (let i = 1; i <= elNum.value; i++) {
    let myEl = document.createElement(type.value);
    let myText = document.createTextNode(text.value);
    myEl.className = "box";
    myEl.title = "Element";
    myEl.id = `id-${i}`;
    myEl.style.display = "inline-block";
    myEl.style.width = "200px";
    myEl.style.margin = "20px";
    myEl.style.padding = "10px";
    myEl.style.color = "white";
    myEl.style.backgroundColor = "blue";
    myEl.style.textAlign = "center";
    myEl.style.borderRadius = ".5rem";
    myEl.appendChild(myText);
    results.appendChild(myEl);


}
}