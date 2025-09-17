// Таймер 

for (let i = 10; i > 0; i--) {
    console.log("Старт через:", i);
}

for (let i = 1; i <= 10; i++) {
    console.log("Пробежали кругов:", i);
}

let line = "";

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        line += "* ";
    }
    line += "\n";
}   
console.log(line);
