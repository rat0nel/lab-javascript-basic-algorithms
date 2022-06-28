console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = 'Johnny'

console.log(`The driver name is ${hacker1}`)

let hacker2 = 'Emily'

console.log(`The navigator name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)

} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    
}

// Iteration 3: Loopsnode

const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();

console.log(upperCaseStringWithSpaces);


function reverseString(hacker2) {
    const arrayStrings = hacker2.split("");
    const reverseArray = arrayStrings.reverse();
    const joinArray = reverseArray.join("");
    return joinArray;
}   

const result = reverseString(hacker2);
console.log(result);

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

