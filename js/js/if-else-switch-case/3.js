// switch = сравнение значений
// if = проверка условий

// шаблон
// const value = +prompt("Введите значение");

// if (isNaN(value)) {
//   alert("Ошибка ввода");
//   return;
// }

// Задача 1

// const grade = +prompt("Введите число от 0 до 100", 1);

// if (isNaN(grade) || grade < 0 || grade > 100) {
//     alert("Ошибка ввода")
// } else if (grade <= 49) {
//     alert("F")
// } else if (grade <= 69) {
//     alert("C")
// } else if (grade <= 89) {
//     alert("B")
// } else {
//     alert("A")
// }

// alert(
//      isNaN(grade) || grade < 0 || grade > 100 ? "Ошибка ввода" : grade <= 49 ? "F" : grade <= 69 ? "C" : grade <= 89 ? "B" : "A"
// );

// Задача 2

// const day = +prompt("Введите день недели", 1);

// if (isNaN(day)) {
//   alert("Ошибка");
// } else {
//   switch (day) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//       alert("Будний день");
//       break;
//     case 6:
//     case 7:
//       alert("Выходной");
//       break;
//     default:
//       alert("Ошибка");
//   }
// }

// Задача 3
// Пользователь вводит число
// Если кратно 3 → "Fizz"
// Если кратно 5 → "Buzz"
// Если кратно 3 и 5 → "FizzBuzz"
// Иначе → само число

// const number = +prompt("Введите число", 1);
// if (isNaN(number)) {
//   alert("Ошибка ввода");
// } else if (number % 3 === 0 && number % 5 === 0) {
//   alert("FizzBuzz");
// } else if (number % 5 === 0) {
//   alert("Buzz");
// } else if (number % 3 === 0) {
//   alert("Fizz");
// } else {
//   alert(number);
// }

// Задача 4

// const price = +prompt("Введите цену за товар")
// const percent = +prompt("Введите процент скидки от 0 до 50")

// if (
//   isNaN(price) ||
//   isNaN(percent) ||
//   price <= 0 ||
//   percent < 0 ||
//   percent > 50
// ) {
//   alert("Ошибка");
// } else {
//   const finalPrice = price - (price * percent) / 100;
//   alert("Цена со скидкой: " + finalPrice);
// }

// Задача 5

// const temp = +prompt("Введите температуру", 1);

// alert(
//   isNaN(temp)
//     ? "Ошибка ввода"
//     : temp < 0
//       ? "Мороз"
//       : temp <= 15
//         ? "Холодно"
//         : temp <= 25
//           ? "Тепло"
//           : "Жарко",
// );
