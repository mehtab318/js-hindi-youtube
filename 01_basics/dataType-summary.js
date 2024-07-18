
// JavaScript is a dynamically typed language, which means that data types of
//  variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.




// there are two type of data type in javascript 
// 1. primitive 
// 2.non-primitive 


// *****************primitive*****************

// #primitive (reference) type datatype :- jitne bhi primitive data type hote hai woh call by reference hote hai.jo original
//  data hota hai memory ka woh hume nahi diya jaata, uska sirf reference diya jaata hai (original ka reference diya jaata).
// there are 7 types of primitive datatype
// 1) string => returns string value 
// 2)number => returns number.
// 3) boolean => returns alse and true value 
// 4) null => returns (object) note:- equal to operator (==) and datype operator(===) treats different null value.
// 5)undefined => returns undefined values
// 6)symbol => it returns symbol (it returns symbol DataType) note:- this DataType means for unique function.
// 7)bigint => it returns Bigint(this is for bignumber that is so so big that doesnt store in nmber datatype).


// example of primitive datatype=>

// string 
// const stringValue = "mehtab";
// console.log(typeof stringValue)


// *****************non-primitive*****************
// #non-primitive 


// 1.array
// const myFunction = ["mehtab", "rehman", "nohman"]
// console.log(typeof myFunction)



// 2.object
// let myobj = {
//     name: "mehtabsiddiqui",
//     age: 20,
// }
// console.log(typeof myobj)



// 3.function
// const myfunction = function () {
//     console.log("hello world")
// }
// console.log(typeof myfunction)



///+++++++++++++++++++++++++++++++++++++
// there are two types of memory
// 1.stack(primitive):-


let firstname = "mehtab"

let secondname = firstname
secondname = "rehman"
console.log(secondname)
console.log(firstname)

// 2.heap(non-primitive):-


let userone = {
    email:"user@google.com",
    upi:"99678@ybl",
}

let usertwo = userone
usertwo.email = "mehtabsiddiqui900@gmail.com"
usertwo.upi = "8356089203@ybl"
console.log(userone.email)
console.log(userone.upi)
console.log(usertwo.email)
console.log(usertwo.upi)