// let font = document.getElementById("fonts");
// let size = document.getElementById("size");
// let color = document.getElementById("colors");
// let text = document.querySelector(".text");




// font.onchange = function () {
//     window.localStorage.setItem("font-family",font.options[font.selectedIndex].text) 
 
    
//     text.style.fontFamily = window.localStorage.getItem("font-family");
   
// }
// size.onchange = function () {
//     window.localStorage.setItem("font-size", size.options[size.selectedIndex].text)
     
//        text.style.fontSize = window.localStorage.getItem("font-size");
//     }
//     color.onchange = function () {
    
//         window.localStorage.setItem("color" , color.options[color.selectedIndex].text)

//         text.style.color = window.localStorage.getItem("color");
//     }
//     text.style.fontFamily = window.localStorage.getItem("font-family");
//     text.style.fontSize = window.localStorage.getItem("font-size");
//     text.style.color = window.localStorage.getItem("color");
//     font.value = window.localStorage.getItem("font-family");
//     size.value = window.localStorage.getItem("font-size");
//     color.value = window.localStorage.getItem("color");
      
     let one = document.querySelector(".one");
     let two = document.querySelector(".two");
     let three = document.querySelector(".three");
     let select = document.querySelector("select");
one.onblur = function () {
    window.sessionStorage.setItem("input-one",one.value);
    
}
two.onblur = function () {
    window.sessionStorage.setItem("input-two",two.value);
    
}
three.onblur = function () {
    window.sessionStorage.setItem("input-three",three.value);
    
}
select.onchange = function () {
    window.sessionStorage.setItem("selection",select.options[select.selectedIndex].text);
    
}


window.onload = function () {
    one.value = window.sessionStorage.getItem("input-one")
    two.value = window.sessionStorage.getItem("input-two")
    three.value = window.sessionStorage.getItem("input-three")
    select.value = window.sessionStorage.getItem("selection")
}
window.onclose = function () {
    one.value = window.sessionStorage.getItem("input-one")
    two.value = window.sessionStorage.getItem("input-two")
    three.value = window.sessionStorage.getItem("input-three")
    select.value = window.sessionStorage.getItem("selection")
}