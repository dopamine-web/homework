// This

const user = {
    name: "John",
    age: 20,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
    checkAge() {
        if (this.age >= 18) {
            this.greet();
        }
    },
};

user.checkAge();

