/*
loop
- for
for ([1] [2] [3]){
    //block of code
}
*/
let myFriends = [1,2,"osama","ahmed","sayed","ali","amira"];
let names = [];
for(let i = 0; i < myFriends.length; i++){
    if(typeof myFriends[i] === 'string'){
        names.push(myFriends[i])
        }
    }
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}
/*
nested loops
*/
let products = ["keyboard","mouse",10,20,"pen","pad",30,40,"monitor"];
let colors = ["red","green","black"];
let models = [2020, 2021];
for (let index = 0; index < products.length; index++) {
console.log(products[index]);
for (let j = 0; j < colors.length; j++){
    console.log(`-${colors[j]}`);

}
for (let k = 0; k < models.length; k++){
    console.log(`--${models[k]}`);

}

}
/*
loop control
-break
-continue
-label
*/
mainLoop:
for (let I = 0; I < products.length; I++) {
    if (typeof products[I] === "number") {
        continue;       
    }
    console.log(products[I]);
    nestedLoop:for (let j = 0; j < colors.length; j++){
        console.log(colors[j]);
        if(colors[j] === "green"){
            break mainLoop;
        }
    }
    
}
let productss = ["keyboard","mouse","pen","pad","monitor","iphone"];
for (let J = 0; J < products.length; J++) {
    console.log(products[J]);
    
}
let showCount = 5;
document.write(`<h1>Show ${showCount} Products</h1>`)
for (let ii = 0; ii < showCount; ii++) {
    document.write(`<div>`);
    document.write(`<h3>[${ii + 1}] ${productss[ii]}</h3>`)
    for (let jj = 0; jj < colors.length; jj++) {
        document.write(`<p>${colors[jj]}</p>`)
        
    }
    document.write(`</div>`);
}
/*
loop
-while
*/
let index = 0;
while (index < 10) {
    console.log(index)
    index+=1;
}
do {
    console.log(index)
    index+=1; 
} while (false);
/*
loop challenge
*/
let admins = ["ahmed","osama","sayed","stop","samera"];
let employees = ["amgad","samah","ameer","omar","othman","amany","samia","anwar"];

let counter = 1;

document.write(`<div> we have ${admins.indexOf("stop")} admins`);
document.write(`</div>`);

document.write(`<hr>`);
for (let II = 0; II < admins.indexOf("stop"); II++) {
    document.write(`<div>The admin for team ${II + 1} is ${admins[II]}`);
document.write(`<h3>Team Members</h3>`);

for (let JJ = 0; JJ < employees.length; JJ++) {
    if (admins[II][0] === employees[JJ][0]) {
        document.write(`<p>- ${counter} ${employees[JJ]} </p>`);
        counter++;
            }
    
}
document.write(`</div>`);

}



