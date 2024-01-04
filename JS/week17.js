/*Set Data type
 * syntax: new Set(Iterable)
 * --object to store Unique values
 * --cannot access elements by index
 * properties
 * -size
 * Methods:
 * -add
 * -delete
 * -clear
 * -has
 */
// let myData = [1,1,1,1,2,3];
// // let myUniqueData = new Set(myData)
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3).add("A");
// console.log(myUniqueData.has("A"));
// console.log(myData);
// console.log(myUniqueData.delete(20));
// console.log(myUniqueData.size);
/**Set vs WeakSeat
 * -the WeakSet is weak,
 * -meaning refrences to objects in a weakSet are held weakly
 * -if no other references to an object stored in the weakset exist
 * -those objects can be garbage collected
 * 
 * Set => can store any data value
 * weakSet => collection of objects only
 * Set => have size property
 * weakSet => does not have size property
 * Set => have keys, values ,entries
 * weakSet => does not have clear , keys values and entries
 * Set => can use forEach
 * weakSet => cannot use for each
 */
// let mySet = new Set([1,1,1,2,3,"A","A"]);
// console.log(mySet);

// //Size
// console.log(mySet.size);
// let iterator = mySet.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// //forEach
// mySet.forEach((el) => {
//     console.log(el);
// });

// let myWeakSet = new WeakSet([{A:1,B:2}]);
// //weak set use cases
/** 
 * Map data type 
 * -syntax : new Map (Iterable with key/value)
 * --Map vs object
 * --map => does not contain key by default
 * --object => has default keys
 * --map => Key can be anything [function ,object ,any primitive data types]
 * --object => String or symbol
 * --map => ordered by insertion
 * --object => not 100% till now 
 * --map => get items by size
 * --object => need to do manually
 * --map => can be directly iterated
 * --object => not directly and need to use object.keys() and so on
 * --map => better performance when add or remove data
 * --object => low performance comparing to map
*/
// let myObject = {10:"number","10":"String"};
// let myEmptyObject = Object.create(null);
// let myMap = new Map();
// myMap.set(10, "Number")
// myMap.set("10", "String")
// myMap.set(true, "Boolean")
// myMap.set({a:1,b:2})
// myMap.set(function doSomething() {},"function")
/**Map methods
 * -set
 * -get
 * -delete
 * -clear
 * -has
 * properties
 * size
 */
// let myMap = new Map([
//     [10,"Number"],
//     ["Name","String"],
//     [false,"Boolean"]
// ]);
// // myMap.set(10,"Number");
// // myMap.set("Name","String");
// console.log(myMap);
// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));
// console.log("#########");

// console.log(myMap.has("Name"));


// console.log("#########");

// console.log(myMap.size);
// console.log(myMap.delete("Name"));
// console.log(myMap.size);
// myMap.clear()
// console.log(myMap.size);
/**
 * -Map vs waekMap
 * weakMap allowa garbage collector to do its tasks but not map
 * 
 * map => key can be an object
 * weakmap =>key can be object only
 */
// let mapUser = {theName: "ElZero"};
// let myMap = new Map();
// myMap.set(mapUser,"Object Value")
// mapUser =null;

// console.log(myMap);

// let weakMapUser = {theName: "ElZero"};
// console.log("#".repeat(10));
// let myWeakMap = new WeakMap();
// myWeakMap.set(weakMapUser,"Object Value")
// weakMapUser =null;
// console.log(myWeakMap);
/**
 * Array Methods
 * ---variable
 * ---string numbers
 * ---set
 * ---using the map function
 * ---arrow function
 * ---shorten the method + use arguments
 * 
 */
// console.log(Array.from("mahmoud"));
// console.log(Array.from("12345", function (n) {
//     return +n + +n;
// }));
// console.log(Array.from("12345",  (n) => +n + +n));
// let myArray =[1,1,1,2,3,4];
// let mySet = new Set(myArray);
// console.log(Array.from(mySet));
// console.log([...new Set(myArray)]);
// function af() {
//     return Array.from(arguments);
// }
// console.log(af("mahmoud","mohamed","elsayed"));
/**
 * Array Methods
 * -Array.copyWithin(Target, Start =>optional,End =>Optional)
 * "Copy part of an array to another location in the same array"
 * -any negative value will count from the end
 * -target
 * ---index to copy part to
 * ---if at or greater than array length nothing will be copied
 * --start
 * ---index to start copying from
 * ---if ommited = start from index 0
 * --End
 * -index to end copying from
 * -not including end
 * -if ommited=reach the end
 */
// let myArray = [10,20,30,40,50,"A","B"];

// myArray.copyWithin(1,-2,-1); //[10,"A",30,40,50,"A","B"]

// console.log(myArray);
/**
 * Array Methods
 * --Array.some(CallbackFunction(Element, index, Array),this argument)
 * ---CallbackFunc => Function to run on every element on the given array
 * ----Element => the current element to process
 * ----index => index of current element 
 * ----Array => the current array working with
 * ---- this argument => value to use as this when executin callbackFunc
 * ---
 * Using
 * -check if element exists in array
 * check if number in range
 */
// let myArray = [1,2,3,4,5,6,7,10];
// let num = 10;
// let check = myArray.some(function (e) {
//     console.log("test");
//     return e>5;
// })
// let check = myArray.some(function (e) {
//     return e>this;
// },num)
// let check = myArray.some((e) = e>5
// )

// console.log(check);
// function chechValues(arr, val) {
//     return arr.some(function (e) {
//         return e === val
//     })
// }
// console.log(chechValues(myArray,20));
// console.log(chechValues(myArray,5));

// let range ={
//     min:10,
//     max: 20,
// }
// let checkNumberInRange = myArray .some(function (e) {
//     return e >= this.min && e <= this.max;
// },range)
// console.log(checkNumberInRange);
/**
 * Array Methods
 * -Array.every(CallbackFunc(Element, Index, Array),This argument)
 * ---CallbackFunc => function to run on every element on the given Array
 * ------element => the current element to process
 * ------index => index of current element
 * ------Array => the current array working with
 * ---this argument => value to use as this when executing CallbackFunc
 */
// const locationn ={
//     20:"place 1",
//     30:"place 2",
//     10:"place 3",
//     40:"place 4",
// }
// let mainLocation = 15;
// let locationsArray = Object.keys(locationn)
// let locationArrayNum = locationsArray.map((n) => +n);
// let check = locationArrayNum.every(function (e) {
//     return e < this
// }, mainLocation)
// console.log(check);
/**\
 * Spread Operator => ...Iterable
 *"Allow Iterable to expand in place"
*/
// Spread with string => expand string
// console.log("mahmoud");
// console.log(..."mahmoud");
// // concatnate arrays
// let myArray1 = [1,2,3];
// let myArray2 = [4,5,6];
// let allArrays = [...myArray1,...myArray2];
// console.log(allArrays);
// // copy array
// let copiedArray = [...myArray1];
// console.log(copiedArray);
// //push inside array
// let allFriends = ["osama", "ahmed", "sayed"];
// let newFriend = ["sameh","mahmoud"];
// allFriends.push(...newFriend)
// console.log(allFriends);
// // use math object
// let myNums =[10,20,-100,100,1000,500]
// console.log(Math.max(...myNums));
// //spread with object => merge objects
// let objOne = {
//     a:1,
//     b:2
// };
// let objTwo = {
//     c:3,
//     d:4
// };
// console.log({...objOne,...objTwo,e:5});
/**
 * Map and set + what you learn => challenge
 * requirment
 * -you cant use numbers or true or false
 * -don't use array indexes
 * -you cannot use loop
 * -you cant use any higher order function
 * -only one line solution inside console
 * -if you use length => then only one time 
 * hints
 * you can use * operator only in calculation
 * -set 
 * spread operator
 * math object methods
 */



let n1 = [10,30,10,20];
let n2 = [30,20,10];

console.log(Math.max(...new Set(n2)) * [...n1,...n2].length);
