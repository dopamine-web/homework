// Задача 1.
const number = 4;

if (number % 2 === 0) {
    console.log("Число чётное");
} else {
    console.log("Число нечётное");
}

// Задача 2.
const age = 18;
const discount = (age < 18) ? 10 : (age <= 65) ? 20 : 30;

console.log(discount);

// Задача 3.
const username = prompt("Введите имя пользователя (admin или user):");
const password = prompt("Введите пароль (123456):");

if ((username === "admin" || username === "user") && password === "123456") {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен")
}

// *Задача 4.
const  package = prompt("Введите вес поссылки (в килограммах):");
const  deliveryType = prompt("Введите тип доставки (Стандарт, Экспресс, Премиум):");

// 2. Проверка корректности данных:
if (package <= 0 ) {
    alert("Некорректный вес посылки")
} else if (deliveryType !== "Стандарт" && deliveryType !== "Экспресс" && deliveryType !== "Премиум") {
    alert ("Неверный тип доставки")
}

// 3. Расчёт базовой стоимости доставки:

let baseCost;

if (package < 1) {
baseCoast = 5;
} else if (package <= 5) {
    baseCost = 10;
} else if (package > 5) {
    baseCost = 15;
}

// 4. Определение коэффициента по типу доставки:5

let coefficient; 

switch (deliveryType) {
    case "Стандарт":
        coefficient = 1;
        break;
    case "Экспресс":
    coefficient = 1.5;
        break;
    case "Премиум":
    coefficient = 2;
        break;
}

// 5. Расчёт итоговой стоимости доставки:

const totalCost = baseCost * coefficient;

// 6. Вывод результата:

alert("Итоговая стоимость доставки: " + totalCost + "$.");


