// switch = сравнение значений
// if = проверка условий


// const a = 30;
// const b = 50;
// если  //в противном случае
// const max = a > b ? a : b;

// const a = +prompt("Введите первое число", 0);
// const b = +prompt("Введите второе число", 0);
// const max = !isNaN(a) || !isNaN(b) ? (a > b ? a : b) : "что то пошло не так";
// Если a или b — число, то взять большее из a и b, иначе вывести "что то пошло не так"

// подробная запись
// const a = +prompt("Введите первое число", 0);
// const b = +prompt("Введите второе число", 0);
// let max;

// if (!isNaN(a) || !isNaN(b)) {
//     max = a > b ? a : b;
// } else {
//     max = "что то пошло не так";
// }

// switch case
// const weather = "дождь";
// if (weather === "дождь") {
//   console.log("Остаемся дома");
// } else if (weather === "солнечно") {
//   console.log("Идем гулять");
// } else if (weather === "облачно") {
//   console.log("Идем гулять но берем собой зонт");
// } else {
//   console.log("ЧТо то странное с погодой");
// }

// switch (weather) {
//   case "дождь":
//     console.log("Остаемся дома");
//     break;
//   case "солнечно":
//     console.log("Идем гулять");
//     break;
//   case "облачно":
//     console.log("Идем гулять но берем собой зонт");
//     break;
//   default:
//     console.log("ЧТо то странное с погодой");
// }

// Задача 1.
// const number = 1;
// if (number % 2 === 0) {
//     console.log("Это число четное")
// } else {
//     console.log("Это число нечетное")
// }

// Задача 2.

// const age = 18;
// let discount = age < 18 ? : "10%" ? age <= 65 : "20%" ? age > 65 : "30%";
// console.log(discount)
// const discount = (age <= 18) ? 10 : (age <= 65) ? 20 : 30;
// let discount = ""

// switch (true) {
//     case (age <= 18):
//     discount = 10;
//     break;
//     case (age <= 65):
//     discount = 20;
//     break;
//     case (age > 65):
//     discount = 30;
//     break;
// }

// console.log(`Скидка ${discount}`);

// Задача 3.
// const username = prompt("Введите никнейм", "admin");
// const password = prompt("Введите пароль", "123456");

// if ((username === "moderator" || username === "admin") && password === "123456") {
//     alert("Вход разрешен");
// } else {
//     alert("Вход запрещен");
// };

// alert(
//   (username === "moderator" || username === "admin") && password === "123456")
//     ? "Вход разрешен"
//     : "Вход запрещен";

// *Задача 4.

const kg = prompt("Введите вес посылки");
const type = prompt("Введите тип доставки (Стандарт, Экспресс, Премиум):");

if (kg <= 0) {
  alert("Некорректный вес посылки");
} else if (type !== "Стандарт" && type !== "Экспресс" && type !== "Премиум") {
  alert("Неверный тип доставки");
}

let baseCost = (kg < 1) ? 5 : (kg <= 5) ? 10 : 15;

// if (kg < 1) {
//   baseCost = 5;
// } else if (kg <= 5) {
//   baseCost = 10;
// } else if (kg > 5) {
//   baseCost = 15;
// }

let cof = (type === "Стандарт") ? 1 : (type === "Экспресс") ? 1.5 : (type === "Премиум") ? 2 : undefined;

// switch (type) {
//   case "Стандарт":
//     cof = 1;
//     break;
//   case "Экспресс":
//     cof = 1.5;
//     break;
//   case "Премиум":
//     cof = 2;
//     break;
// }

const price = baseCost * cof;

alert("Итоговая стоимость" + price + "$")