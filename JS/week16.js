/**
 * Destructuring
 * "is a javaScript expression that allows us to extract data from arrays,objects,andmaps and set them into new, distinct variables"
 * Destructuring array
 */
// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;
// let friends = ["ahmed", "sayed", "ali", "maysa"];
//  [a,b,c,d,e] = friends;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let [x,y,,z] =friends;
// console.log(x);
// console.log(y);
// console.log(z);
/**
 * Destructuring array advanced examploes
 */
// let friends = ["ahmed", "sayed", "ali", ["shady","amr",["mohamed","gamal"]]];
// // console.log(friends[3][2][1]);
// // let [,,,[a,,[,b]]] = friends
// console.log(a);
// console.log(b);
/**
 * destructuring array => swapping variables
 */
// let book ="video";
// let video = "book";
// // let stash = book;
// // book = video;
// // video = stash;
// [book,video] = [video,book]
// console.log(book);
// console.log(video);
/**
 * Destructuring object
 */
const user = {
 theName : "mahmoud",
 theAge : 26,
 theTitle: "developer",
 theCountry:"egypt"
}
// let theName = this.theName;
// let theAge = this.theAge;
// let theTitle = this.theTitle;
// let theCountry = this.theCountry;
const {theName,theAge,theCountry} = user;
console.log(theName);
console.log(theAge);
console.log(theCountry);