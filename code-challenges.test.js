// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ("leetCode", ()=> {
  test("given a string return a coded message converting 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", ()=> {
    expect(leetCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(leetCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(leetCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// Ran test. Test failed. Error: leetCode is not defined

// b) Create the function that makes the test pass.

// Input is a string.
// Create a function that take in the string
// Create a new string using .split to separate each character in the string
// Iterate through that split string using .map and find each letter (a,A,e,E,i,I,o,O) and use .replace to replace each of those characters with their corresponding number (4,3,1,0)
//Return the newString and join all characters and new numbers together

const leetCode = (string)=>{
  let stringSplit = string.split("")
  let newString = stringSplit.map(value => {
    return value = value.replace(/['a','A']/g,'4'),
    value = value.replace(/['e','E']/g,'3'),
    value = value.replace(/['i','I']/g,'1'),
    value = value.replace(/['o','O']/g,'0')
  }) return newString.join("")
}

// console.log(leetCode(secretCodeWord1))
// console.log(leetCode(secretCodeWord2))
// console.log(leetCode(secretCodeWord3))

// Ran test again. Test passed!

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe ("singleLetter", ()=> {
  test("given an array of words and a single letter, return all words that contain that letter", ()=> {
    expect(singleLetter(arrayOfWords1,letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(singleLetter(arrayOfWords2,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

// Ran test. Test failed. Error: singleLetter is not defined

// b) Create the function that makes the test pass.

// Input is an array and a string
// Create a function that takes in an array and strings
// Filter out the strings in lowercase OR uppercase and return the value that includes the string match


const singleLetter = (array,string)=> {
    let newArray = array.filter(value => {
        return value.includes(string) || value.includes(string.toUpperCase())
      })
      return newArray
}
console.log(singleLetter(arrayOfWords1,letterA))
console.log(singleLetter(arrayOfWords2,letterE))

// Ran test again. Test passed!

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe ("fullHouse", ()=> {
  test("given an array of 5 numbers determine whether it is a full house of exactly one pair and one three of a kind ", ()=> {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

// Ran test. Test failed. Error: fullHouse is not defined

// b) Create the function that makes the test pass.

// Input is an array
// Create a function that takes in an array
// Create an object which holds the count of each value in the array
// Recognize two of the same value, or three of the same value
// Conditional if there are two of the same value and three of the same value
    // Return true
    // Otherwise return false

const fullHouse = (array) => {
  let countObject = {}
  for(let x of array){
    countObject[x] = (countObject[x] || 0) + 1
  }
  let vals = Object.values(countObject)
  if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
    return true
  }
  return false
}

// console.log(fullHouse(hand1))
// console.log(fullHouse(hand2))
// console.log(fullHouse(hand3))

// Ran test. Test passed!

// Ignore this. I attempted using slice, splice, indexOf, includes based on soemthing I saw online...but did not get the pair incorporated

// const isFullHouse = array => {
//    let copy = array.slice()
//    for(let i = 0; i < arr.length; ){
//       let remove = copy.splice(i, 1)[0]
//       if(copy.includes(remove)){
//          copy.splice(copy.indexOf(remove), 1)
//          if(copy.includes(remove)){
//             return true
//          }
//       }else{
//          i++
//       }
//    }
//    return false
// }
// console.log(isFullHouse(hand1))
// console.log(isFullHouse(hand2))
// console.log(isFullHouse(hand3))
