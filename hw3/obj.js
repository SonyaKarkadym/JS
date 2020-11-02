//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус Анни


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (const user of users) {
    if (user.name == "andrey") {
        console.log(user.status);
    }
    if (user.name == "max") {
        console.log(user.status);
    }
    if (user.name == "oleg") {
        console.log(user.age);
    }
    if (user.name == "olya") {
        console.log(user.age);
    }
    if (user.name == "anya") {
        console.log(user.status,user.age);
    }
}

document.write(users[users.length - 2].name + "|");
document.write(users[2].name + "|");
document.write(users[4].name + users[4].age);