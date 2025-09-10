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



