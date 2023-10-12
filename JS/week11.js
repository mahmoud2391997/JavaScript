/*
object
-intro and what is object
-testing window object
-accessing object
*/
let user = {
    // properties
    theName: "mahmoud",
    theAge: 38,
    //Methods
    sayHello: function () {
        return "hello";
    },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
/*
object
-Dig deeper
-Dot notation vs Bracket Notation
-Dynamic property Name
*/
let myVar = "country";
let User = {
    theName : "Mahmoud",
    country:"Egypt",
}
console.log(User.theName);
console.log(User["theName"]);
console.log(User[myVar]);
/*
object
-nested object and trainings
*/
let USER = {
    name : "Mahmoud",
    age : "38",
    skills:["HTML","CSS","JS"],
    available: false,
    addresses:{
        ksa :"Riyadh",
        egypt:{
            one:"Cairo",
            two:"Giza"
        },
    },
    checkAv: function () {
        if (USER.available === true) {
            return "Free for work"
        } else {
            return "Not free";
        }
    }
};
console.log(USER.name);
console.log(USER.age);
console.log(USER.skills);
console.log(USER.skills.join("|"));
console.log(USER.skills[2]);
console.log(USER.addresses.ksa);
console.log(USER.addresses.egypt);
console.log(USER.addresses.egypt.one);
console.log(USER["addresses"].egypt.one);
console.log(USER["addresses"]["egypt"]);
console.log(USER["addresses"]["egypt"]["one"]);
console.log(USER.checkAv());
/*
OBJECT
    -create with new keyword new object();
*/
let USERR = new Object();
console.log(USERR);
USERR.age = 38;
USERR["country"]="Egypt";
USERR.sayHello = function () {
    return "hello";
};
console.log(USERR);
console.log(USERR.age);
console.log(USERR.country);
console.log(USERR.sayHello());
/*
function this keyword

*/
console.log(this);
console.log(this === window);
myVar = 200;
console.log(window.myVar);
console.log(this.myVar);
function sayHello() {
    console.log(this);
    
}
sayHello();
document.getElementById("cl").onclick = function (){
    console.log(this);
}
let use ={
 age : 38,
 ageIndays: function () {
    return this.age * 365;
 },

};
console.log(use.age);
console.log(use.ageIndays());
/*
object
-create object with create method
*/
let userr= {
    age : 40 ,
    doubleAge: function () {
        return userr.age * 2;
    }
}
console.log(userr);
console.log(userr.age);
console.log(userr.doubleAge());
let obj = Object.create({});
obj.a = 100;
console.log(obj);
let copyObj = Object.create(userr);

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());