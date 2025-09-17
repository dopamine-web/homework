// 1 задача

let person = {
    name: "Tom",
    age: 20,
    isProgrammer: true,
    country: "Home",
};

console.log(person);
console.log(person.name);
console.log(person.country);

//2 задача

function isEmpty(object) {

    if (Object.keys(object).length === 0){
        return true;
    } else {
        return false;
    }
    
}
console.log(isEmpty({}))

//2 задача реализация перподователя 

const isEmpty = object => {
    for (const key in object) {
        return false;
    }   
    return true; 
}

//3 задача

let task = {
    title: "Какой то заголовок",
    description: "Какое то описание",
    isCompleted: true,
}

function cloneAndModify(task, modifications) {
    let newObj = { ...task, ...modifications };
    return newObj;
}

let newObj = cloneAndModify(task, { isCompleted: false, title: "Новый заголовок" });

for (let key in newObj) {
    console.log(key, newObj[key]);
}

//3 задача реализация перподователя

let task = {
    title: "Купить продукты",
    description: "Купить молоко, хлеб и яйца",
    isCompleted: false,
}

function cloneAndModify(object, modifications) {
    const newObject = { ...object, ...modifications };
    return newObject;
}
console.log(cloneAndModify(task, { isCompleted: true, priority: "Высокий" }));

// 4 задача

const myObject = {
    method1() {
        console.log("Метод 1 вызван");
    },
    method2() {
        console.log("Метод 2 вызван");
    },
    property: "Это не метод"
};

function callAllMethods(object) {
    for (let key in object) {
        if (typeof object[key] === "function") {
            object[key]();
        }
    }
}

callAllMethods(myObject);

// 4 задача реализация перподователя

const callAllMethods = object => {
    for (const key in object) {
        if (typeof object[key] === 'function') {
            object[key]();
        }
    }
};

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};


