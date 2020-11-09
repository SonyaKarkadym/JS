//-створити класс попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

//-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//--Створити 10 попелюшок , покласти їх в масив
//--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// class cinderella {
//     constructor(name,age,size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }

// class prince {
//     constructor(name,age,size){
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }

// let nina = new cinderella("Nina",25,38);
// let alina = new cinderella("Alina",22,39);
// let kira = new cinderella("Kira", 29,37);
// let nastya = new cinderella("Nastya",40,42);
// let irina = new cinderella("Ira", 38,38);
// let katya = new cinderella("Katya", 25,36);
// let luba = new cinderella("Luba",31,37);
// let sonya = new cinderella("Sonya",20,35);
// let fiona = new cinderella("Fiona", 29,36);
// let karina = new cinderella("Karina",27,35);

// let arrOfCinderella = [nina,alina,kira,nastya,irina,katya,luba,sonya,fiona,karina];

// let Andre = new prince("Andriy", 27, 35);

// for (const girl of arrOfCinderella) {
//     if (girl.size == Andre.size) {
//         console.log(`Andre and ${girl.name} get married`);
//         break;
//     }
// }

function cinderella(name,age,size){
    this.name = name;
    this.age = age;
    this.size = size;
}

let nina = new cinderella("Nina",25,38);
let alina = new cinderella("Alina",22,39);
let kira = new cinderella("Kira", 29,37);
let nastya = new cinderella("Nastya",40,42);
let irina = new cinderella("Ira", 38,38);
let katya = new cinderella("Katya", 25,36);
let luba = new cinderella("Luba",31,37);
let sonya = new cinderella("Sonya",20,35);
let fiona = new cinderella("Fiona", 29,36);
let karina = new cinderella("Karina",27,35);

let arrOfCinderella = [nina,alina,kira,nastya,irina,katya,luba,sonya,fiona,karina];

function prince(name,age,size){
    
    this.name = name;
    this.age = age;
    this.size = size;

    this.findPrincess = (arr) => {
        for (const girl of arr) {
            if (girl.size == this.size) {
                console.log(`${this.name} and ${girl.name} get married`);
            break;
            }
        }
    }
}

let Andre = new prince("Andrey", 27, 35);
Andre.findPrincess(arrOfCinderella);