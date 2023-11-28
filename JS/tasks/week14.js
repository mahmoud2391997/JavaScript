// promptMsg = prompt("Print Number from - to","Example:5-20");
// nums = promptMsg.split("-");
// if (+nums[0] > +nums[1]) {
//     for (let i = +nums[1]; i <= +nums[0]; i++) {
// console.log(i);        
//     }
// } else{
//     for (let i = +nums[0]; i <= +nums[1]; i++) {
// console.log(i);        
//     }
    
// }
// let parent = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// let button = document.createElement("button");
// popUp = function () {
//     h1.textContent = "Welcome"
//     p.textContent = "Welcome to .........."
//     button.textContent = "X"
//     parent.append(h1, p , button);
//     document.body.append(parent);
//     button.addEventListener("click", function () {
//         button.parentElement.remove();
//     })
//     document.body.style.cssText = "font-family: arial, Tahoma"
//     parent.style.cssText = "width:350px; height:150px; background-color:#eee; padding: 20px; border: 1px solid #ccc; margin : 20px auto; position: relative; text-align: center"
//     button.style.cssText = "background-color: red; color: white; width: 30px; height: 30px; border-radius: 50%; border:none; position: absolute; top: -10px;right: -10px"
//     }
// setTimeout(popUp, 5000);
let div = document.createElement ("div");
let Num = 10;
div.textContent = Num;
document.body.append(div);
function countDown() {
        div.innerHTML -= 1
       if (div.innerHTML === "0"){
        clearInterval(counter);
        window.open("https://Elzero.org","_blank","width=400,height=400,left=200,top=200")

       }}
       let counter = setInterval(countDown,1000);
