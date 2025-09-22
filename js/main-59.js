// Slice, Splice и строки

const numbers = [10, 23, 36, 50, 12, 5];
const newNumbers = numbers.slice(1, 4);
console.log(newNumbers);


const numbers2 = [10, 23, 36, 50, 12, 5];
numbers2.splice(2, 3, 100, 200);
console.log(numbers2);


const persons =  ["John", "Bob", "Alex", "Ann"];
console.log(persons.join(" "));
console.log(persons.join().toLowerCase().split(","));

