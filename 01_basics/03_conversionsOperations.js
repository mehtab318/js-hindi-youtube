let score = "33abc";
// console.log(typeof score);
// console.log(typeof (score));



// let valueInNumber = Number(score)
// console.log(typeof valueInNumber)
// console.log(valueInNumber)


//  "33" => 33
// "33abc" =>NaN
//true =>   1;false => 0

// ------> this function is for converting string into Boolean id we convert 1(number) into Boolean it will be show [true] and,
// similarly while we convert 0{zero number} into Boolean it will show [false] and if we convert empty string means no value in variale it will show [false]
// let IsLoggedIn = 33;
// let BooleanIsLoggedIn = Boolean(IsLoggedIn)
// console.log(BooleanIsLoggedIn)
// console.log(typeof BooleanIsLoggedIn)

// =>notes for the above function
// 1 => true
// 0 => false
// ""(empty string) => false
// "string" => true
// but if the value is like (33abc not in double quotes) it will show error {means unexpected taken}




// ---> this function is for converting numbrer into string
// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);








// **************OPERATIONS******************

let value = 3
let negValue = -value
// console.log(negValue)

// ***************the below are some of the arithmetic operators of javascript***************
// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 % 2)
// console.log(2 / 2)
// console.log(2 ** 2)



console.log("1" + 2);
console.log("1" + "2");
console.log(1 + "2");
console.log("1" + 3 + 2);//if the string value is first it will treat as string and then will add the other number with it.
console.log(1 + 3 + "2");//if the string value of number is in the last & number is first it will treat means perform addition operation and then will add the string value




let gameCounter = 100;
gameCounter++;
console.log(gameCounter);