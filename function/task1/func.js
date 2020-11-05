//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
//- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

let body = document.getElementsByTagName("body");
let div = document.createElement('div');
let str = document.createElement('h1');
body[0].appendChild(div);
div.appendChild(str);


// let add = function(text){
//     str.innerText = text;
// }
// add("hello okten");

let add1 = function(type,text){
    let elem = document.createElement(type)
    elem.innerText = text;
    document.body.appendChild(elem);
}

add1('h2',"hello");