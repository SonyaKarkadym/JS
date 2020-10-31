//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних 
//- індексів. Вивести в консоль всі його елементи в циклі.
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write


let empty2 = [];
empty2[0] = 1;
empty2[1] = 5;
empty2[2] = "very boring";
empty2[3] = true;
empty2[4] = 15;
empty2[5] = false;
empty2[6] = "so much tasks with the same shit";
empty2[7] = 25;
empty2[8] = true;
empty2[9] = "ko-ko"

for(let j = 0; j < 10; j++) {
    console.log(empty2[j]);
};


for(let j = 0; j < 10; j++) {
    document.write(j);
    console.log(j);
};

for(let j = 0; j < 100; j++) {
    document.write(j);
    console.log(j);
};

for(let j = 0; j < 100; j += 2) {
    document.write(j);
    console.log(j);
};