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

// // let theName = this.theName;
// // let theAge = this.theAge;
// // let theTitle = this.theTitle;
// // let theCountry = this.theCountry;
// const {theName,theAge,theCountry} = user;
// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
/**destructuring
 * destructuring object
 * -naming the variables 
 * add new property
 * nested object
 * destructuring the nested object only
 */
// const {theName: n ,theAge: a,theCountry, theColor: c = "Red",skills:{ html : h, css}} = user;
// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(c);
// console.log(h);
// console.log(css);

// const {html : skillOne, css: skillTwo} = user.skills;
// console.log(skillOne);
// console.log(skillTwo);

// const user = {
//     theName : "mahmoud",
//     theAge : 26,
//     theTitle: "developer",
//     theCountry:"egypt",
//     skills: {
//         html:70,
//         css: 80,
//     }
//    };
//    showDetails(user);
//    //    function showDetails(obj) {
//        //     console.log(`your name is ${obj.theName}`);
// //     console.log(`your age is ${obj.theAge}`);
// //     console.log(`your css skill progress is ${obj.skills.css}`);
// //    }
// function showDetails({theName:n,theAge:a,skills:{css:c}}=user) {
//     console.log(`your name is ${n}`);
//     console.log(`your age is ${a}`);
//     console.log(`your css skill progress is ${c}`);
//    }
    //    const user = {
    //        theName : "mahmoud",
    //        theAge : 26,
    //        skills:["HTML","CSS","JavaScript"],
    //        addresses:{
    //         egypt:"ismailia",

    //        }
    //       };
    //     const {theName: n,theAge: a,skills: [one, two ,three],addresses:{egypt:e}} = user;
    //     console.log(`your name is ${n}`);
    //         console.log(`your age is ${a}`);
    //         console.log(`your skills is ${one},${two},${three}`);
    //         console.log(`you live in ${e}`);
let chosen = 3;
let friends =[
    {title: "osama", age:39, available:true, skills:["HTML","CSS"]},
    {title: "AHMED", age:25, available:false, skills:["python","django"]},
    {title: "sayed", age:33, available:true, skills:["php","laravel"]}
]
if (chosen === 1) {
    const [obj,,] = friends;
    const {title,age,available,skills:[,lastSkill]} = obj
    console.log(title);
   console.log(age);
   console.log(available ? "available":"not available");
   console.log(lastSkill);

} else if (chosen === 2){
    const [,obj,] = friends
    const {title,age,available,skills:[,lastSkill]} = obj
    console.log(title);
   console.log(age);
   console.log(available ? "available":"not available");
   console.log(lastSkill);
} else if (chosen === 3) {
    const [,,obj] = friends
    const {title,age,available,skills:[,lastSkill]} = obj
    console.log(title);
   console.log(age);
   console.log(available ? "available":"not available");
   console.log(lastSkill);
}



   
   