// switch = сравнение значений
// if = проверка условий


// Задача 1

// const number = 10;

// if (number > 0) {
//   console.log("Число положительное");
// } else if (number === 0) {
//   console.log("Число равно нулю");
// } else (number < 0) {
//   console.log("Число отрицательное");
// }

// вложенный тернарный оператор

// console.log(
//     number > 0 ? "Число положительное":
//     number === 0 ? "Число равно нулю":
//     "Число отрицательное"
// );

// Задача 2

// const income = 50001;
// const texRate = (income <= 10000) ? 10 : (income <= 50000) ? 20 : 30;

// let texRate;

// if (income <= 10000) {
//   texRate = 10;
// } else if (income <= 50000) {
//   texRate = 20;
// } else {
//   texRate = 30;
// }
// console.log("Налоговая ставка:" + texRate + "%");

// Задача 3

// const role = prompt("Введите роль (admin / editor / viewer):", "admin");
// const token = prompt("Введите токен", "qwerty");

// if (
//   (role === "admin" || role === "editor" || role === "viewer") &&
//   token === "qwerty"
// ) {
//   alert("Доступ разрешён");
// } else {
//   alert("Доступ запрещён");
// }

// Задача 4

// const age = +prompt("Введите возраст пользователя", 10);
// let price = (age <= 12) ? 50 : (age <= 18) ? 100 : (age <= 60) ? 200 : 120;

// if (age <= 12) {
//   price = 50;
// } else if (age <= 18) {
//   price = 100;
// } else if (age <= 60) {
//   price = 200;
// } else {
//   price = 120;
// }
// alert("Стоимость билета" + price + "$");

// Задача 5

// const price = +prompt("Введите сумму счета", 10);
// const procent = +prompt("Введите процент (5, 10, 15)", 5);

// if (isNaN(price) || isNaN(procent) || ![5, 10, 15].includes(procent)) {
//   alert("Ошибка ввода");
// } else {
//   let totalPrice = price + (price * procent) / 100;
//   alert(totalPrice);
// }


const number = +prompt("Определение сезона по месяцу (1-12)", 1);

switch (number) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;

  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;

  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;

  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;

  default:
    alert("Некорректный месяц");
}


// switch = сравнение значений
// if = проверка условий