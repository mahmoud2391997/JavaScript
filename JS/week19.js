/**
 * constructor function
 * -New syntax
 * -inhertance
 * Encapsulation
 * -class fields are public by default
 * gaurd the data against illegal access
 * help to acheive the target without revealing its complex details
 * will reduce humnan errors
 * make the app more flexible and manageable
 * simplifies the app
 * ** prototype
 * object meta data and descriptor
 * writable
 * enumerable
 * configurable [cannot delete  or reconfigure]
 * 
 * define multiple properties
 * check descriptors
 */
const myObject ={
    a:1,
    b:2
}
Object.defineProperties(myObject, {c:{
    
    configurable: true,
    value:3
},d:{
    
    configurable: true,
    value:4
},e:{
    
    configurable: true,
    value:5
}})


for (let prop in myObject) {
    console.log(prop, myObject[prop]);
}
console.log(myObject);
class User {
// static property
   static count = 0;
   #eSalary;

    constructor(i, u,ES) {
        //private
        this.id = i;
        this.username = u ,
        this.#eSalary = ES,

            this.msg =function () {
                return `hello ${this.username} your salary is ${this.salary}`
            }
            User.count++;
    }
    sayHello(){
        return `hello ${this.username}`
    }
     getSalary() {
        return parseInt(this.#eSalary)
    }
    
    writeMsg(){
        return `hello ${this.username} your salary is ${this.salary}`

    }
    updateUsername(newName){
        this.username = newName;
    }
   
    static countMembers(){
        return `${this.count} members created`
    }
}
class Admin extends User{
// static property
    constructor(i, u,p) {
       super(i,u),
         this.permission =p;
    }
    
    
}

let userONe =new User(100,"Elzero",5000)
let adminOne =new Admin(110,"Mahmoud",1)
let userOne = new User(100,"elzero",5000)
let userTwo = new User(101,"",6000)
let userThree = new User(102,"sayed",7000)
let strOne = "Elzero";
let strTwo = new String("Elzero");
User.prototype.sayWelcome = function () {
    return `welcome ${this.username}`

}
Object.prototype.love = "Elzero web school";
String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`
}
let myString = "elzero";
console.log(Object.getOwnPropertyDescriptors(myObject));
console.log(String.prototype);
console.log(userONe.username);
console.log(userONe);
console.log(User.prototype);
console.log(userONe.getSalary());
console.log(userONe.id);
console.log(userONe.username);
console.log("#####");
console.log(adminOne.id);
console.log(adminOne.username);
console.log(adminOne.permission);
userOne.updateUsername("osama")
console.log(userOne.msg());
console.log(userTwo.username);
console.log(userThree.salary);
console.log(userOne instanceof User);
console.log(userOne.constructor === User);
console.log(userThree.writeMsg());
console.log(userThree.writeMsg);
console.log(userOne.username);
console.log(typeof strOne);
console.log(typeof strTwo);
console.log(strOne instanceof String);
console.log(strTwo instanceof String);
console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);
console.log(userOne.count);
console.log(User.count);
console.log(User.countMembers());

// const userOne = {
//     id : 100,
//     username: "Elzero",
//     salary:5000
// }
// const userTwo = {
//     id : 101,
//     username: "hassan",
//     salary:6000
// }
// const userThree = {
//     id : 102,
//     username: "sayed",
//     salary:7000
// }