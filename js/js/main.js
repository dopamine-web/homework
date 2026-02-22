// let firstName = "Anna";
// let lastName = "Drozalina";
// let isStudent = true;

// let age = 22;
// let currentYear = 2026;
// let birthYear = currentYear - age;

// console.log(
//   `Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученица курса: %{true}`,
// );

// let a = "123";
// let b = +"456";
// let c = Number("789");
// let d = Boolean(0);
// let e = Boolean(" ");
// let result = a + b + c + d + e;

// console.log(result);

// for(let i = 1; i <= 10; i++) {
//     console.log("Пробежали круг", i)
// } // от меньшего к большему

// for(let i = 10; i > 0; i--) {
//     console.log("Пробежали круг", i)
// } // от большего к меньшему

// let number = 10;

// do {
//   number = +prompt("Введите число больше 10", 10);
// } while (number < 11);

// let i = 5;

// while (i > 0) {
//   i--;
//   console.log(i);
// }

// const number = +prompt("Введите число", 0);

// for (let i = 1; i <= number; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`Внешний цикл: ${i}`, `Внутренний цикл: ${j}`);
//   }
// }

// for (let i = 1; i <= 3; i++) {
//   let line = "";
//   for (let j = 1; j <= 3; j++) {
//     line += i * j + " ";
//   }
//   console.log(line);
// }

// let line = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     line += "*";
//   }
//   line += "\n";
// }
// console.log(line);

// const arr = ["a", "b", "c"];

// for (let i = arr.length; i > 0; i--) {
//   console.log(arr[i - 1]);
// }

// let word = "";

// while (word.length < 5) {
//   const value = prompt("vedite bukve");
//   if (value.length === 0) {
//     break;
//   }
//   word = word + value;
//   console.log(word);
// }

// let x = 3;
// do {
//   console.log(x);
//   x++;
// } while (x < 3);

// let y = 3;
// while (y < 3) {
//   console.log(y);
//   y++;
// }

// const input = prompt("vvedite tsislo");
// const number = Number(input);

// if (!isNaN(number) && number >= 0 && number <= 10) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${i*number}`);
//   }
// }
