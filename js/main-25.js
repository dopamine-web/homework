// 1

for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
        continue;
    }
    console.log(i);
}

// 2

let number = prompt("Введите число для вычисления факториала:");
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`Факториал числа ${number} равен ${factorial}`);

// 3 

// let size = 8;
// let board = "";

// for (let row = 0; row < size; row++) {
//     for (let col = 0; col < size; col++) {
//         if ((row + col) % 2 == 0) {
//             board += "#";
//         } else {
//             board += " ";
//         }
//     }
//     board += "\n";
// }
// console.log(board);

// 3 реализация преподавателя

const boarSize = 8;
let board = "";

for (let i = 1; i <=boarSize; i++) {
    let row = "";
    for (let j =1; j <= boarSize; j++) {
        row += ( i + j ) % 2 === 0 ? "# " : "  "
    }
    board += row + "\n";
}

console.log(board);