const name = "mehtab siddiqui"
const repocount = 50
// console.log(name + repocount) note:- this is the bad way to declatre and concatinat string

// console.log(`hello my name is ${name} nd my repocount is ${repocount}`) 
// by string interpolition method we can declate string easily and this string is readable for others also

const gamename = new String('mehtab-hc')
// console.log(gamename[0])
// console.log(gamename.__proto__)
// console.log(gamename.length)
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(2))
// console.log(gamename.indexOf('t'))

const newstring = gamename.substring(0, 4)
console.log(newstring)


const anotherstring = gamename.slice(-8, 4) //we can give values in .slice in negative values
console.log(anotherstring)
