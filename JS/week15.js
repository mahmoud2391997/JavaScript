/**BOM [Browser object model]
 * localStorage
 *  -setItem
 *  -getItem
 *  -removeItem
 *  -clear
 *  -key
 *  Info
 * -No Expiration Time
 * -HTTP and HTTPS
 * -Private Tab
 */
// set
// window.localStorage.setItem("color","red");
// window.localStorage.fontWeight = " bold";
// window.localStorage["fontSize"]= "20px";

// // get
// console.log(window.localStorage.getItem("color"));
// console.log(window.localStorage.color);
// console.log(window.localStorage["color"]);

// remove one 
// window.localStorage.removeItem("color");

// clear all
// window.localStorage.clear();

// get key

// console.log(window.localStorage.key(0));

// // set color in page
// document.body.style.background = window.localStorage.getItem("color");

// console.log(window.localStorage);
// console.log(typeof window.localStorage);
// let lis = document.querySelectorAll("ul li");
// let exp = document.querySelector(".experiment");
// // window .localStorage.clear();
// if (window.localStorage.getItem("color")) {
//      // if there is color in local storage
//      //[1] Add color to div
//      exp.style.backgroundColor = window.localStorage.getItem("color");
//      //[2] remove active class fromm all lis 
//      lis.forEach((li) => {
//         li.classList.remove("active");
//     });
//     //[3] add active class to current color
//     document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")
//     } else{
        
//         // if no color in local storage
//     console.log("no"); 

// }
// lis.forEach((li) => {
//     li.addEventListener("click",(e) => {
//         // console.log(e.currentTarget.dataset.color);
//         // remove active class from all li
//         lis.forEach((li) => {
//             li.classList.remove("active");
//         });
//         //add active class to current element
//         e.currentTarget.classList.add("active");
//         //add current color to local storage
//         window.localStorage.setItem("color", e.currentTarget.dataset.color)
//         //change div background color
//         exp.style.backgroundColor = e.currentTarget.dataset.color;
//     })
// });
/**BOM [Browser Object Model]
 * Session Storage
 * -setItem
 * -getItem
 * -removeItem
 * -clear
 * -key
 * 
 * Info
 * New Tab = new Session
 * Duplicate Tab = Copy Session
 * New Tab With Url = New session
 */
// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");
// document.querySelector(".name").onblur = function () {
//     // console.log(this.value);
//     window.localStorage.setItem("input-name",this.value);
// }
let input = document.querySelector('.input');
let button = document.querySelector('.button');
let tasks = [];
if(window.localStorage.getItem('tasks')) {
    tasks = tasks.concat(JSON.parse(window.localStorage.tasks));
    tasks.forEach((e) => {
        let title = document.createElement('p');
        title.innerHTML = e;
        let del = document.createElement('span');
        del.innerHTML = "Delete";
        let task = document.createElement('div');
        task.append(title);
        task.append(del);
        document.querySelector('.tasks').append(task);
        del.addEventListener('click', (e) => {
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    })
}
document.forms[0].onclick = function(event){
    event.preventDefault();
}
button.addEventListener('click', (e) => {
    if(input.value == "") {
        return;
    } else {
        tasks = tasks.concat(input.value);
        window.localStorage.setItem('tasks', JSON.stringify(tasks));
        let title = document.createElement('p');
        title.innerHTML = input.value;
        let del = document.createElement('span');
        del.innerHTML = "Delete";
        let task = document.createElement('div');
        task.append(title);
        task.append(del);
        document.querySelector('.tasks').append(task);
        del.addEventListener('click', (e) => {
            console.log(e.currentTarget.previousElementSibling.innerHTML)
            tasks = tasks.filter((element) => element !== `${e.currentTarget.previousElementSibling.innerHTML}`);
            window.localStorage.setItem('tasks', JSON.stringify(tasks));
            e.currentTarget.parentElement.remove();
        })
    }
});
