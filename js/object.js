let user = {
    name: "John",
    age: 30,
    isProgrammer: true,
    "user-city": "New York",
    "1dfg": 123,
};

user.company = "Aroken.ru"
delete user.age
console.log(user);


// Методы объекта
let user1 = {
    name: "John",
    age: 30,
    isProgrammer: true,
    // greet() {
    //     console.log(`Hello, my name is ${user1.name}`);
    // }
    greet: name => {
        console.log(`Hello, my name is ${name}`);
    }
};
user1.greet("Bob");

//==============================//
const product = {
    name: "Ноутбук",
    price: 1000,
    discount: 10,
    charactestics: {
        brand: "Apple",
        processor: "M1",
    },
    checkDiscount:  product => {
    if ("discount" in product ) {
        console.log(`Discount is ${product.discount}%`);
    } else {
        console,log("There is no discount");
    }
},
};
product.checkDiscount(product);
// const checkDiscount = product => {
//     if (product.discount === undefined ) {
//         console,log("There is no discount");
//     } else {
//         console.log(`Discount is ${product.discount}%`);
//     }
// }

//==============================//

const users = {
    0: "Bob",
    1: "Alice",
    2: "John",
}
for (let i = 0; i < 3; i++) {
    console.log(users[i]);
}
//==============================//
const product1 = {
    name: "Ноутбук",
    price: 1000,
    discount: 10,
    charactestics: {
        brand: "Apple",
        processor: "M1",
    },
};

for (const productKey in product1) {
    if (productKey === "charactestics") {
    for (const charKey in product1.charactestics) {
    console.log(`${charKey}`, product1.charactestics[charKey]);
    } 
    }
    else {
        console.log(`${productKey}`, product1[productKey]);
    }
}



