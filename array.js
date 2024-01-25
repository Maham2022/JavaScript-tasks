// Array Manipulation
// a. Create an array named numbers containing the integers from 1 to 5.
let numbers = [1,2,3,4,5]
console.log('Numbers=',numbers);
// b. Add the number 6 to the end of the array.
numbers.push(6);
console.log('push=',numbers);
// c. Remove the first element of the array.
numbers.shift();
console.log('remove=',numbers);
// d. Reverse the array.
numbers.reverse();
console.log('reverse=', numbers);

// e. Join the array elements into a string with a comma as the separator.
let str = numbers.join(',');
console.log('comma seperator=',str);

// f. Use the map function to create a new array (squaredNumbers) containing the square of each number in the numbers array.
let squaredNumber = numbers.map((m1)=>{
    return m1*m1;
})
console.log(squaredNumber);

// String Manipulation

// a. Create a string variable named message with the value "Hello, World!". 
let message = "Hello World!";
console.log('create =',message);
// b. Extract and log the substring "Hello" from the message.
let mySubString = message.substring(0,5);
console.log(mySubString)

// c. Convert the entire string to uppercase.
let upperCaseString = message.toUpperCase()
console.log('upper case=',upperCaseString);
// d. Check if the string contains the word "World" (case-insensitive).
let worldExistOrNot = upperCaseString.toLocaleLowerCase().includes("world")
console.log(worldExistOrNot)

// e. Replace "World" with your name in the string.
let nameReplacedString = message.toLocaleLowerCase().replace("World", "Maham")
console.log(nameReplacedString)

// f. Use the map function to create an array of characters from the string.
let characterArray = message.split('').map(val => val.toLocaleLowerCase())
console.log(characterArray)


//Math operations

// a. Calculate square root of 25.
let squareRoot = Math.sqrt(25)
console.log('square root=',squareRoot)

// b. Generate a random number between 1 and 10 (inclusive).
let randomNums = Math.floor(Math.random() * 10)+1;
console.log('random numbers=',randomNums)

// c. Round 3.14159 to the nearest integer.
const toRoundNum = 3.14159;
const roundedNum = Math.round(toRoundNum)
console.log('root=',roundedNum)

//set operations

// a. Create two sets, set1 and set2, each containing three unique elements.
let set1 = new Set(["o", "b", "a"])
let set2 = new Set(["a", "a" ,"t"])

// b. Calculate the union of set1 and set2.
let unionSets = new Set([...set1 , ...set2]);
console.log('union=',unionSets)

// c. Check if set1 is a subset of set2.
let isSet1Subset = [...set1].every( val => set2.has(val))
console.log('set is=',isSet1Subset)

// d. Remove an element from set2.
set2.delete("a")
console.log('delete is=',unionSets);

// e. Convert set1 to an array.
let set1Array = [...set1]
console.log('set1 array is=',set1Array)

//map functions 

// a. Create an array named originalArray containing at least three numbers.
const originalArray = [1,3,5,7]
console.log('original array=',originalArray)
// b. Use the map function to create a new array (doubledArray) containing each number doubled.
const doubleArray = originalArray.map(val => val*2)
console.log('double array=',doubleArray)
