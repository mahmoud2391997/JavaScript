/**
 * BOM [browser object model]
 * intro
 * - window object is the browser object window
 * - window contaain the document object
 * - all global variables and objects and functions are members of window object 
 * ------ test document and console
 * - what can we do with window object?
 * open window
 * close window
 * move window
 * resize window
 * print document
 * run code after period of time once or more
 * fully control the url
 * save data inside browser to use later
 */
/**
 * BOM [Browser objct model]
 * alert(Message) => Need no response only ok available
 * confirm(Message) => Need Response and return a boolean
 * prompt(Message, Deafult Message) => collect data
 */

// alert("test");
// console.log("test");
// let confirmMessage = confirm("are you sure?")
// console.log(confirmMessage);
// if (confirmMessage === true) {
//     console.log("item deleted");
// } else {
//     console.log("item not deleted");
    
// }
// let promptMessage = prompt("good day to you!","write day with three character")
// console.log(promptMessage);
/**
 * BOM [Browser object model]\
 * setTimeout(Function, Timeout, Additional Params)
 * clearTimeout(Identifier)
 */
// setTimeout(function () {
//     console.log("hello");
// },3000)
// setTimeout(function () {
//     console.log("message");
// },3000)

// setTimeout(printMsg,3000,"user" , 26)
// function printMsg(user, age) {
//     console.log(`message for ${user} his age is ${age}`);
// }
// let counter = setTimeout(printMsg,3000)
// function printMsg() {
//     console.log(`message`);
// }
// console.log(counter);
// let btn = document.querySelector("button");

// btn.onclick = function () {
//     clearTimeout(counter);
// }
/**BOM [Browser object model]
 * setInterval(function, milliseconds, additional params)
 * clearInterval(identifier)
 */
// setInterval(function () {
//     console.log(`Msg`);
// },10000);
// setInterval(printMsg,10000,"user",22);
// function printMsg(user, age) {
//     console.log(`${user}'s Msg, his age is ${age}`); 
// }
// let div = document.querySelector("div");
// function countDown() {
//     div.innerHTML -= 1
//    if (div.innerHTML === "0"){
//     clearInterval(counter);
//    }
// }
// let counter = setInterval(countDown,1000);
/**BOM[Browser object model]
 * location object
 * - href Get / Set [URL || Hash || File || Mail]
 * - host
 * - hash
 * - protocol
 * - reload()
 * - replace()
 * - assgin()
//  */
// console.log(location);
// console.log(location.href);
// // location.href = "https://google.com";
// location.href = "#sec02";
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.protocol);
// console.log(location.hash);
// location.replace("https");
/**BOM[Browser object Model]
 * open(URL [Opt], Window Name or target attr [opt],win Features [opt] , history Rep)
 * - close()
 * - window Features
 * --- width [Num]
 * --- height [Num]
 * --- left [Num]
 * --- top [Num]
 * Search
 * - window.open Window features
 */
// setTimeout( function () {
//     window.open("https://google.com","_blank","width=400,height=400,left=200,top=200")
// },2000)
/**BOM[browser object model]
 * history api
 * properties
 * - lenght
 * Methods
 * -back()
 * -forward()
 * -go(Delta) => Postion In history
 * search [ for advanced knowledge]
 * -pushState() + replaceStata()
 */
// console.log(history.go(-1));
/**BOM [Browser object Model]
 *stop()
 * print()
 *  focus()
 *  scrollTo(x,y||options)
 *  scroll(x,y || options)
 *  scrollBy(x,y || options)
 *  */
// let myNewWindow = window.open("https://google.com","","width=500,height=500");
/**BOM [Browser Object Model]
 * Practice => Scroll to top
 * scrollX[Alias => PageXOffset]
 * scrollY[Alias => PageYOffset]
 */
// console.log(window.scrollX === window.scrollY);
let btn = document.querySelector("button");
window.onscroll = function () {
    if (window.scrollY >= 600) {
    btn.style.display = "block";
} else {
    btn.style.display = "none";
    
    }
}
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top:0,
        behavior:"smooth"
    })
}