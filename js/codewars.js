// 1 
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
return num.toString();
}
console.log(numberToString(123));

// 2
// Sentence Smash Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
// Example ['hello', 'world', 'this', 'is', 'great'] => 'hello world this is great'

let words = ['hello', 'world', 'this', 'is', 'great']
function smash(words) {
    return words.join(" ");
}
console.log(smash(words));

// 3
// You get an array of numbers, return the sum of all of the positives ones.
// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
        }
    }
    return sum;
}
console.log(positiveSum([1, -4, 7, 12])); 
console.log(positiveSum([-1, -2, -3]));

// 4
// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) 
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively. 
// Each function returns one number.
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
// * [42, 54, 65, 87, 0]             -> min = 0, max = 87
// * [5]                             -> min = 5, max = 5

var min = function(list) {
    return Math.min(...list);
}

var max = function(list) {
    return Math.max(...list);
}


console.log(min([4,6,2,1,9,63,-134,566]));
console.log(max([4,6,2,1,9,63,-134,566]));

// 5
// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, 
// our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight 
// another specific given number of dragons, will he survive?
// Return true if yes, false otherwise :)

function hero(bullets, dragons){
    return bullets >= dragons * 2;
}

console.log(hero(10, 5));
console.log(hero(7, 4));

// 6
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    if (number % 2 === 0 ){
        return number * 8;
    } else {
        return number * 9;
    }
}
console.log(simpleMultiplication(2));
console.log(simpleMultiplication(3));

// 7 
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    return x.reduce((sum, value) => sum + Number(value), 0);
}
console.log(sumMix([5, "1", "2", 2]));


// 8
// You were camping with your friends far away from home, 
// but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, 
// write a function that tells you if it is possible to get to the pump or not. 
// Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (mpg * fuelLeft >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};
console.log(zeroFuel(50, 25, 2));

// 9
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
    return str.split("").reverse().join("");
}
console.log(solution("dlrow"));

// 10
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    if (name.charAt(0) === "R" || name.charAt(0) === "r"){
        return name + " plays banjo"
    } else {
        return name + " does not play banjo"
    }
}

console.log(areYouPlayingBanjo("Robert"));
console.log(areYouPlayingBanjo("Alice"));