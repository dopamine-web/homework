// Задача 1.

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
    return basePrice - (basePrice * (discountPercent / 100)) + (basePrice * taxRate);
}
console.log(calculateFinalPrice(200, 30, 0.2));

// Задача 2.

username = prompt("Введите имя пользователя (admin):");
password = prompt("Введите пароль (123456):");
function checkAccess (username, password) {

        if (username === "admin" && password === "123456") {
            return "Доступ разрешен";
        } else {
            return "Доступ запрещен";
}
}
console.log(checkAccess(username, password));

// Задача 3.

function getTimeOfDay(hour) {
    
    if (hour < 0 || hour > 23) {
        return "Некоректное время";
    } else if (hour >= 0 && hour <= 5) {
        return "Ночь";
    } else if (hour >= 6 && hour <= 11) {
        return "Утро";
    } else if (hour >= 12 && hour <= 17) {
        return "День";
    } else if (hour >= 18 && hour <= 23) {
        return "Вечер";
    }
}

    console.log(getTimeOfDay(-1));
    console.log(getTimeOfDay(3));
    console.log(getTimeOfDay(7));
    console.log(getTimeOfDay(15));
    console.log(getTimeOfDay(22));

// Задача 4.

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if(i % 2 === 0) {
            return i;
        }  
    } return "Чётных чисел нет";
    
}
console.log(findFirstEven(1, 10));
console.log(findFirstEven(9, 9));