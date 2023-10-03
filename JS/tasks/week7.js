// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = +start.toString()[start/start]; i < start ; i++) {
//     if (start + start * i === exclude) {
//         continue;
//     }
// console.log(start + start * i)    
// }
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// let start = 10;
// let end = 0;
// let stop = 3;
// for (let j = start; j >= stop; j--) {
//     if (j<start) {
//         console.log(end.toString() + j);    

//     } else {
//         console.log(j);    

//     }
// }
// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03
// let start = 1;
// let end = 6;
// let breaker = 2;
// for (let I = start--; I <= end; I++) {
// console.log(start+I);
// console.log(`-- ${breaker}`);  
// console.log(`-- ${end - breaker}`);  
// }
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
// let index = 10;
// let jump = 2;

// for (;;) {
//     console.log(index);
//     index = index - jump;
//     if (index < jump + jump) {
//         break;
//     }
//   // Write Your Code Here
// }

// Output
// 10
// 8
// 6
// 4
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// let counter = letter.length;
// for (let i = letter.length - letter.length; i < friends.length; i++) {
//     if (friends[i][letter.length - letter.length] === letter.toUpperCase()) {
//         continue;
//     } else {
        
//         console.log(`${counter} ${friends[i]} `);    
// counter++;
//     }
// }
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
// let start = 0;
// let swappedName = "elZerO";
// let Output = [];

// for (let i = start; i < swappedName.length; i++) {
//     if (swappedName[i] === swappedName[i].toUpperCase()) {
//        Output.push(swappedName[i].toLowerCase());
//     } else {
//         Output.push(swappedName[i].toUpperCase());

//     }

// }
// console.log(Output.join(""));
// Output
// "ELzERo"
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for (let i =mix[start]; i < mix.length; i++) {
// if (typeof mix[i] === "string") {
//     continue;
// }    
// console.log(mix[i]);
// }
// // Output
// 2
// 3
// 4
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;
// while (index < friends.length) {

//     if (friends[index][index - index] === friends[index - index][index - index] || typeof friends[index] === "number") {
//         index++;
//         continue;
//     }
//     console.log(`${++counter} => ${friends[index]}`);
//     index++;
// }
// // Output
// "1 => Sayed"
// "2 => Mahmoud"