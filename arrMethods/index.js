//- создать массив с 20 числами.
//-- при помощи метода sort и колбека  отсортировать массив.
//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
//-- при помощи filter получить числа кратные 3
//-- при помощи filter получить числа кратные 10
//-- перебрать (проитерировать) массив при помощи foreach()
//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let arr = [4,65,3,199,1,666,54,33,27,999,653,22,32,5,654,321,2,8,55,100];

// let sort = arr.sort((a,b) => { 
//     return a-b
// });
// console.log(sort);

// let sort2 = arr.sort((a,b) => { 
//     return b-a
// });
// console.log(sort2);

// let filter = arr.filter((value,index) => {
//     return value%3==0 ;
// });

// let filter = arr.filter((value,index) => {
//     return value%10==0 ;
// });

// console.log(filter);

//arr.forEach(value => console.log(value+1));

// let map = arr.map(value => {
//     value = value*3;
//     return value;
// })

// console.log(map);

//- создать массив со словами на 15-20 элементов.
//-- отсортировать его по алфавиту в восходящем порядке.
//-- отсортировать его по алфавиту  в нисходящем порядке.
//-- отфильтровать слова длиной менее 4х символов
//-- перебрать массив при помощи map() и получить новый массив в котором все значения 
//   будут со знаком "!" в конце

// let arr2 = ['oleksii', 'psaruk', 'owu', 'hello', 'world', 'school', 
// 'football', 'book', 'water', 'phone', 'tee', 'coffee', 'reveval', 'rest', 'speed', 'tree', 'bread'];

// let sort = arr2.sort((a,b) => {
//     if(a >b) return 1;
//     return -1;
// });

// let sort = arr2.sort((a,b) => {
//     if(a < b) return 1;
//     return -1;
// });

// let map = arr2.map(elem => elem + "!");
// console.log(map);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, {name: 'masha', age: 30, status: true}, {name: 'olya', age: 31, status: false}, {name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний 
//індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий 
//масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором

// let users = [ {name: 'vasya', age: 31, status: false}, {name: 'petya', age: 30, status: true}, 
// {name: 'kolya', age: 29, status: true}, {name: 'olya', age: 28, status: false}, 
// {name: 'max', age: 30, status: true}, {name: 'anya', age: 31, status: false}, 
// {name: 'oleg', age: 28, status: false}, {name: 'andrey', age: 29, status: true}, 
// {name: 'masha', age: 30, status: true},{name: 'olya', age: 31, status: false},
//  {name: 'max', age: 31, status: true} ];

// let sort = users.sort((a,b) => {
//     return a.age-b.age;
// });

// let sort = users.sort((a,b) => {
//     return b.age-a.age;
// });

// let sort = users.sort((a,b) => {
//     return a.name.length - b.name.length
// })

// let sort = users.sort((a,b) => {
//     return b.name.length - a.name.length
// })

// console.log(sort);

// let json = JSON.stringify(users);
// let newObj = JSON.parse(json);
// let map = newObj.map((value,index) => {
//      value.id = index + 1;
//      return value;
// })

// console.log(map);

//-- наисать функцию калькулятора с 2мя числами и колбеком
//-- наисать функцию калькулятора с 3мя числами и колбеком

// function sum(a,b){
//  return console.log(a + b);
// }
// function mult(a,b){
//     return console.log(a * b);
// }

// function calc(a,b,func) {
//     return func(a,b);
// }

// calc(2,3,sum);
// calc(2,3,mult);

// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let filter = cars.filter(value => {
//     return value.volume > 3
// })

// let filter = cars.filter(value => {
//     return value.producer == "mercedes"
// })

// let filter = cars.filter(value => {
//     return (value.volume >= 3 && value.producer == "mercedes")
// })

// let filter = cars.filter(value => {
//         return (value.volume >= 3 && value.producer == "subaru")
//      })

// let filter = cars.filter(value => {
//     return (value.power > 300)
//  })

// let filter = cars.filter(value => {
//     return (value.power > 300 && value.producer == "subaru")
//  })

// let filter = cars.filter(value => {
//     return (value.power > 300 && value.producer == "subaru" && value.engine.includes('ej'))
//  })

// let filter = cars.filter(value => {
//     return (value.engine.includes('ej'))
//  })

// let filter = cars.filter(value => {
//          return (value.volume < 3 && value.producer == "mercedes")
//       })

// let filter = cars.filter(value => {
//     return (value.volume > 2 && value.power > 250)
//  })


// let filter = cars.filter(value => {
//     return (value.producer == "bmw" && value.power > 250)
//  })
 
// console.log(filter);

// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию
// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Levchenko', number: 115}},
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Avchenko', number: 2}},
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];


// let sort = usersWithAddress.sort((a,b) => {
//     return a.id - b.id
// });

// let sort = usersWithAddress.sort((a,b) => {
//     return b.id - a.id
// });

// let sort = usersWithAddress.sort((a,b) => {
//     return a.age - b.age
// });

// let sort = usersWithAddress.sort((a,b) => {
//     return b.age - a.age
// });

// let sort = usersWithAddress.sort((a,b) => {
//     if(a.name > b.name) return 1
//     return -1
// });

// let sort = usersWithAddress.sort((a,b) => {
//     if(b.name > a.name) return 1
//     return -1
// });

// let sort = usersWithAddress.sort((a,b) => {
//     if(a.address.street > b.address.street) return 1
//     return -1
// });

// let sort = usersWithAddress.sort((a,b) => {
//     if(a.address.number > b.address.number) return 1
//     return -1
// });

// let filter = usersWithAddress.filter(value => {
//     return (value.age < 30)
// });

// let filter = usersWithAddress.filter(value => {
//     return (value.status == false)
// });


// let filter = usersWithAddress.filter(value => {
//     return (value.status == false && value.age < 30)
// });


// let filter = usersWithAddress.filter(value => {
//     return (!(value.address.number % 2))
// });

// console.log(filter);

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, 
//але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, 
//що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let cars = [ {producer:"subaru",year: 2010,volume: 2, price: 9000,driver: {name: "oleg", age:27,expr:7}}, 
// {producer:"subaru",year: 2007,volume: 3,price: 7000, driver: {name: "anton", age: 23,expr:3}},
// {producer:"subaru",year: 2011,volume: 2, price: 10000, driver: {name: "tolik", age: 33, expr:10}},
// {producer:"subaru",year: 1998,volume: 2,price: 6000, driver: {name: "kolya", age: 29, expr: 8}},
// {producer:"subaru",year: 2014,volume: 2, price: 12000, driver: {name: "stas", age: 39, expr: 9}}, 
// {producer:"subaru",year: 2014,volume: 2,price: 12500, driver: {name: "ignat", age: 24,expr: 4 }}, 
// {producer:"bmw",year: 2013,volume: 1.5,price:13000, driver: {name: "dima",age: 33, expr: 12}}, 
// {producer:"bmw",year: 2010,volume: 1.5,price:11000, driver: {name: "roman", age: 29, expr: 5}}, 
// {producer:"bmw",year: 2009,volume: 6,price:14000, driver: {name: "alex", age:31, expr:10}},
// {producer:"bmw",year: 2012,volume: 2,price:13000, driver: {name: "nazar", age:30, expr:2}}, 
// {producer:"mercedes",year: 1990,volume: 2,price:8000, driver: {name: "olexandr", age: 27,expr:8}}, 
// {producer:"mercedes",year: 2017,volume:3,price:15000,driver: {name: "ruslan", age: 26,expr:4}}, 
// {producer:"mercedes",year: 2017,volume: 2.5,price:14500, driver: {name:"rick", age:25,expr:7}} ];

// let sum = 0;

// for(let i = 0; i < cars.length; i = i + 2){
//     cars[i].volume *= 1.1;
//     cars[i].price *= 1.05;

// }

// for(let i = 0; i < cars.length; i++){
//     sum +=cars[i].price;
// }
// console.log(cars);

// for (const el of cars) {
//     if(el.driver.expr < 5 && el.driver.age > 25) {
//         console.log(el.driver.name + " let's go to courses")
//         el.driver.expr += 1;
//     }
// }

// console.log("sum:" + sum);
// console.log(cars);


