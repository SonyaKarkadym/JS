// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, 
//чтобы при клике на кнопку исчезал элемент с id="text".

// let p = document.querySelector("#text");
// let button = document.querySelector("#button");
// button.onclick = () => {
//     p.style.display = "none" ;
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.querySelector("#button");
// button.onclick = () => {
//     button.style.display = "none" ;
// }

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати 
//інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let txt = document.querySelector("#text");
// let button = document.querySelector("#button");
// button.onclick = () => {
//     txt.value < 18? console.log("Вам нет 18") : console.log("Вы совершеннолетний");
// }

// - Создайте меню, которое раскрывается/сворачивается при клике

// let menu = document.querySelector("#menu");
// let button = document.querySelector("#button");
// button.onclick = () => {
//     menu.classList.toggle("active");
// }

// - Создать список комментариев , пример объекта коментария - 
//{title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

// let coments = [
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
// {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];

// for (const el of coments) {
//     let div = document.createElement("div");
//     div.innerHTML = `title: ${el.title}, body: ${el.body}`;
//     document.body.appendChild(div);
//     let button = document.createElement("button");
//     button.style.padding = "5px";
//     button.onclick = ()=>{
//         div.innerHTML = `title: ${el.title}`;
//     }
//     div.appendChild(button);
// }

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться 
//на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let button = document.querySelector("#button");

// let input1 = document.Form.input1;
// let input2 = document.Form.input2;
// let input3 = document.Form2.input3;
// let input4 = document.Form2.input4;

// button.onclick = () => {
// console.log(input1.value);
// console.log(input2.value);
// console.log(input3.value);
// console.log(input4.value);
// }

// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// function func(a,b,teg){
//     let table = document.querySelector(teg);
//     let trCounter = 0;
//     let tdCounter = 0;
//     function tr(){
//         let tr = document.createElement("tr");
//         trCounter++;
//         if(trCounter > a){
//             return ;
//         }
//         function td(){
//             let td = document.createElement("td");
//             tdCounter++;
//             td.style.border = '1px solid black';
//             td.style.width = '200px';
//             td.style.height = '50px';
//                tr.appendChild(td)
//             if(tdCounter > b){
//                 return ;
//             }
//             td();
//         } 
//         table.appendChild(tr)
//         tr();
//     }
// }

// // func(5,5,"#emptyTable")

//??????????????????????????????????????????????????????

// function func(a,b,teg){
//     let table = document.querySelector(teg);
//     for(let i = 0; i < a; i++){
//         let tr = document.createElement("tr");
//         for(let j = 0; j < b; j++){
//             let td = document.createElement("td");
//             td.style.border = "1px solid black";
//             td.style.width = "150px";
//             td.style.height = "40px";
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
// }

// func(5,5,"#emptyTable");

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let button = document.querySelector("#button");
// let tr = document.querySelector("#tr");
// let td = document.querySelector("#td");
// let text = document.querySelector("#text");

// button.onclick = ()=>{
//     let table = document.querySelector("#emptyTable");
//     for(let i = 0; i < tr.value; i++){
//         let tr = document.createElement("tr");
//         for(let j = 0; j < td.value; j++){
//             let td = document.createElement("td");
//             td.innerText = text.value;
//             td.style.border = "1px solid black";
//             td.style.width = "150px";
//             td.style.height = "40px";
//             tr.appendChild(td);
//         }
//     table.appendChild(tr);
//     }
// }

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let buttonRight = document.querySelector("#arrowRight");
// let buttonLeft = document.querySelector("#arrowLeft");
// let gal = ["ph1.jpg","ph2.jpg","ph3.jpg","ph4.jpg","ph5.jpg","ph5.jpg","ph6.jpg"];
// let i = 0;

// buttonRight.onclick = ()=> {
//     if(i > 6) i = 0;
//     let c = gal[i];
//     let photo = document.querySelector('#photo');
//     photo.innerHTML = `<img src = "${c}" alt = "">`;
//     i++;
// }

// buttonLeft.onclick = () => {
//     if(i == 0) i = 7;
//     let c = gal[i-1];
//     let photo = document.querySelector('#photo');
//     photo.innerHTML = `<img src = "${c}" alt = "">`;
//     i--;
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// let arr= ["нахуй","бля","блин","нахер"];
// let text = document.querySelector("#button");
// let button = document.querySelector("#ok");
// console.log(text.value);
// button.onclick = ()=>{
//     for (const el of arr) {
//         if(text.value.includes(el)){
//             alert("Тихо,тихо...");
//         } 
//     }
// }

// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление
// по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. 
//Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

// let filterStatus = document.querySelector("#filterStatus");
// let filterAge = document.querySelector("#filterAge");
// let filterCity = document.querySelector("#filterCity");
// let div = document.querySelector("#text");

// filterStatus.onclick = ()=> {
//     usersWithAddress.filter(
//     (el) => {
//     if(el.status == false){
//     let p = document.createElement("p");
//     p.innerText = `${el.name} ${el.age} ${el.status} ${el.address.city} ${el.address.street}`
//     div.appendChild(p);
//     }
// })
// }

// filterAge.onclick = () => {
//     usersWithAddress.filter(
//         (el) => {
//             if(el.age >= 29){
//                 let p = document.createElement("p");
//                 p.innerText = `${el.name} ${el.age} ${el.status} ${el.address.city} ${el.address.street}`
//                 div.appendChild(p);
//             }
//         } 
//     )
// }

// filterCity.onclick = () => {
//     usersWithAddress.filter(
//         (el) => {
//             if(el.address.city == "Kyiv"){
//                 let p = document.createElement("p");
//                 p.innerText = `${el.name} ${el.age} ${el.status} ${el.address.city} ${el.address.street}`
//                 div.appendChild(p);
//             }
//         } 
//     )
// }


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
//Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", 
//вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти 
//внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
// лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

let text = document.querySelector("#text");
text.onselect = (ev) =>{
    
}