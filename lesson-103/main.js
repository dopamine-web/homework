const user = {
    anna: {
        age: 21,
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user.anna)
user.anna.sayHello('Anna')



const users = [
    {
        name: "Alex",
        age: 25,
        isAdmin: false
    },
    {
        name: "Bob",
        age: 30,
        isAdmin: true
    },
    {
        name: "Ann",
        age: 20,
        isAdmin: false
    },
    {
        name: "Diana",
        age: 35,
        isAdmin: true
    },
    {
        name: "Eva",
        age: 22,
        isAdmin: false
    }
];

users.push({
    name: "Bobik",
    age: 22,
    isAdmin: false
})


for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

let sumSimpleUsers = 0;

for (const user of users) {
    if (!user.isAdmin) {
        sumSimpleUsers++;
    }
}

console.log(`Количество простых пользователей: ${sumSimpleUsers}`);