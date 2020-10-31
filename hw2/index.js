//--створити масив та вивести його в консоль:
//- з 5 числових значень
//- з 5 стічкових значень
//- з 5 значень стрічкового, числового та булевого типу
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. 
//--Вивести в консоль

let numbers = [1,2,3,4,5];
let strings = ["s","t","r","i","ng"];
let mix = [8,true,"hi",false,10];
let empty = [];

empty[0] = "Vasya";
empty[1] = true;
empty[2] = 5;
empty[3] = "ha-ha";
empty[4] = false;

console.log(numbers);
console.log(strings);
console.log(mix);
console.log(empty);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for(let i = 0; i < 10; i++) {
    document.write("<div>hello</div>");
}

for(let i= 0; i < 10; i++) {
    document.write("<div>index:</div>" + i);
}

let i = 0;

while(i < 20) {
    document.write("<h1>ha-ha</h1>");
    i++;
}

i = 0;

while(i < 20) {
    document.write("<h1>ho-ho:</h1>" + i);
    i++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let numbers2 = [1,2,3,4,5,6,7,8,9,10];
let strings2 = ["a","b","c","d","e","g","k","l","m","n"];
let mix2 = ["nice",true,25,false,14,"hello",9,true,"boring",44];

for(let j = 0; j < numbers2.length; j++) {
    console.log(numbers2[j]);
}

for(let j = 0; j < strings2.length; j++) {
    console.log(strings2[j]);
}

for(let j = 0; j < mix2.length; j++) {
    console.log(mix2[j]);
}

for(let j = 0; j < mix2.length; j++) {
    if(typeof mix2[j] == "boolean"){
        console.log(mix2[j]);
    };
}

for(let j = 0; j < mix2.length; j++) {
    if(typeof mix2[j] == "number"){
        console.log(mix2[j]);
    };
}

for(let j = 0; j < mix2.length; j++) {
    if(typeof mix2[j] == "string"){
        console.log(mix2[j]);
    };
}