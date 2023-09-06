/*
Arithmatic operators
+ addition
-substraction
*multiplication
/Diviion
**exponentiation(ES7)
$Modulus
++ increment[post/pre]
--decrement[post/pre]
*/
// console.log(10 + 20)
// console.log(10 - 20)
// console.log(10 * 20)
// console.log(10 / 2)
// console.log(11 % 2)
// console.log(10 *-20)
// console.log(3 ** 3)
// console.log(10 + "k")
// console.log(10 - "k")
// console.log(typeof NaN)
// var x = 1;
// console.log(++x)

/*
+ Unary plus [return number if its not number]
+ Unary negation [return number if its not number + negates it]
Tests
--normal number
--string number
--string negative number
-string text
-float  
-hexadecimal numerical system=> 0xFF
-NULL
-false
-true
*/
// console.log(+100)
// console.log(+"100")
// console.log(+"100.12")
// console.log(+0xff)
// console.log(+null)
// console.log(+false)
// console.log(+true)
// console.log(-"100")
// console.log(+"k")
// console.log(-100)
// console.log(-"100")
// console.log(-"-100")
// console.log(-"100.12")
// console.log(-0xff)
// console.log(-null)
// console.log(-false)
// console.log(-true)
// console.log(-"k")
/*
Type coercion (type casting)
+
-
"" -2
false-true
*/
// let a ="10",b=20,c=true;
// console.log(+a+b);
// console.log(a - b);
// console.log("" -2);
// console.log(false-true);
// let d="10",e=20;
// console.log(+d+e+c);
// assignment operators
// let a=10;
// a=a+20;
// a=a+70;
// a +=100;
// a-=50;
// a/=50;
// console.log(a)
let a =10;
let b = "20";
let c =80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - +a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
// first line: [++a]=>pre increment [+]=>addition [+b]=>type coercion [b++]=>post increment [+]=>addition [+c]=>type coercion [C++]=>post increment [-]negation [+]=>addition [+a]=>type coercion [a++]=>post increment
// second line: [++a]=>pre increment [+]=>addition [-b]=>type coercion  [+]=>addition [+c]=>type coercion [C++]=>post increment [-]negation [+]=>addition [+a]=>type coercion [a++]=>post increment [+]=>addition [+a]=>type coercion
// second line: [--c]=>pre increment [+]=>addition [+b]=>type coercion  [+]=>addition [--a]=>pre increment [*]=>multiplication [+]=>addition [+b]=>type coercion [b++]=>post increment [-]negation [+b]=>type coercion [*]=>multiplication [+]=>addition  [--a]=>pre increment [-]negation [+true]=>type coercion

let d ="-100";
let e ="20";
let f = 30;
let g = true;
console.log(-d * +e);
console.log(-d + 2 * +e + f + 3 * +true);
