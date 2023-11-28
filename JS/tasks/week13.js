// let insertt = document.querySelector(".insert");
// let removee = document.querySelector(".remove");
// let classess = document.querySelector(".output");
// let currentt = document.querySelector("[title = 'current']");
// insertt.onblur = function () {
//     let arrayOfClass =  insertt.value.trim().toLowerCase().split(" ");
//     if (arrayOfClass = "") {
        
//     } else {
//         for (let i = 0; i < arrayOfClass.length; i++) {

//             currentt.classList.add(arrayOfClass[i]);
//             let classes = document.createElement("span");
//             classes.style.backgroundColor = "orange";
//             classes.className = arrayOfClass[i];
//     classes.style.color = "white";
//     classes.style.margin = "5px";
//     classes.innerText = arrayOfClass[i];
//     classess.appendChild(classes);
    
    
    
    
//     }
//     }
    

// console.log(arrayOfClass);

// }
// removee.onblur = function () {
//     currentt.classList.remove(removee.value);
// let removedClass = document.querySelector(`.${removee.value}`);
// removedClass.remove();
// }
// let paragraph = document.querySelector("p");
// paragraph.remove();

// let element = document.querySelector(".our-element");
// let start = document.createElement("div");
// start.className = "start";
// start.title = "Start Element";
// start.setAttribute("data-value" , "Start");
// start.innerText = "Start";
// element.before(start);
// let end = document.createElement("div");
// end.className = "end";
// end.title = "End Element";
// end.setAttribute("data-value" , "End");
// end.innerText = "end";
// element.after(end);

// let div = document.querySelector("div");
// console.log(div.lastChild.nodeValue.trim());
// [...document.body.children].forEach(
//     el => (el.onclick = _ => console.log(`this is ${el.localName}`))
// );
