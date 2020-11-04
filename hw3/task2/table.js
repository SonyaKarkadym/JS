//- створити розмітці блок з id, class та текстом в середені. 
//Зчитати окремо цей текст з селекторів по id , class та тегу
//- змінити цей текст використовуючи селектори id, class,  tag
//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag
//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та циклу 
//створити таблицю на 10 рядків з трьома ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів
 //створити таблицю на 10 рядків з 5 ячейками всередені
//- за допомоги document.createElement, appendChild та 2х циклів
 //створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let divTag = document.getElementsByTagName("div");
let divId = document.getElementById("divId");
let divClass = document.getElementsByClassName("divClass");

divId.innerText = "hi";
divClass[0].style.width = "30px";
divTag[0].style.height = "40px";

let body = document.getElementsByTagName("body");
let tr = document.createElement("div");

tr.style.height = "100px";
tr.style.width = "100%";
tr.style.background = "pink";

body[0].appendChild(tr);

for(let i = 0; i < 3; i++){
    let td = document.createElement("div");
    td.style.width = "33.33%";
    td.style.height = "99px";
    td.style.border = "1px solid white";
    tr.appendChild(td);
    td.style.display = "inline-block";
}


