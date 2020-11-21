// - Дана textarea.
//В неё вводится текст.
//Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.


// let textarea = document.querySelector("#text");
// textarea.value = localStorage.getItem("text");
// textarea.oninput = () => {
// localStorage.setItem("text",textarea.value);
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// let textarea = document.getElementById("textarea");
// let text1 = document.getElementById("text1");
// let text2 = document.getElementById("text2");
// let text3 = document.getElementById("text3");
// let check = document.querySelector("#check");
// let radio = document.querySelector("#rad");
// let select = document.querySelector("#select");

// let form = document.forms.form;
// const obj = JSON.parse(localStorage.getItem('form'))
// for (const key in obj) {
//    form[key].value = obj[key]
// }
// form.oninput =()=>{
//     let obj ={}
//     for (let item of form){
//         if(item.type === 'radio'|| item.type === 'checkbox'){
//             if(item.checked){
//                 obj[item.name]=item.value
//             }
//         }else{
//             obj[item.name]=item.value
//         }
//     }
//     localStorage.setItem('form', JSON.stringify(obj))
// }

// textarea.value = localStorage.getItem("text");
// textarea.oninput = () => {
// localStorage.setItem("text",textarea.value);
//  }

//  text1.value = localStorage.getItem("text1");
// text1.oninput = () => {
// localStorage.setItem("text1",text1.value);
//  }

//  text2.value = localStorage.getItem("text2");
// text2.oninput = () => {
// localStorage.setItem("text2",text2.value);
//  }

//  text3.value = localStorage.getItem("text3");
// text3.oninput = () => {
// localStorage.setItem("text3",text3.value);
//  }

//  check.checked = localStorage.getItem("check");
//  check.oninput = () => {
//      localStorage.setItem("check",check.checked);
//  }

//  radio.checked = localStorage.getItem("radio");
//  radio.oninput = () => {
//      localStorage.setItem("radio",radio.checked);
//  }

//  select.checked = localStorage.getItem("select");
//  select.oninput = () => {
//      localStorage.setItem("select",select.checked);
//  }

// Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// let text = document.querySelector("#txt");
// let save = document.querySelector("#save");
// let down = document.querySelector("#down");
// let up = document.querySelector("#up");
// let i = 0;
// let arr = [];
// const newArr = JSON.parse(localStorage.getItem("arr"));

// save.onclick = () => {
//     i++;
//     arr.push(text.value);
//     text.value = "";
//     localStorage.setItem("arr",JSON.stringify(arr));
// }

// down.onclick = ()=> {
//     i--;
//     if(i < 0) {
//         i = newArr.length - 1;
//         text.value = newArr[i];
//     }
//     else text.value = newArr[i]
// }

// up.onclick = ()=> {
//         i++;
//         if(i > newArr.length-1){
//             i = 0;
//             text.value = newArr[i]
//         }
//         else text.value = newArr[i]
//     }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

let save = document.querySelector("#saved");
let book = document.forms.book;
let arr = [];
let i = 0;
let newArr = JSON.parse(localStorage.getItem("arr"));

save.onclick = ()=>{
    let obj = {};
    i++;
    for (const elem of book) {
        obj[elem.name] = elem.value;
        elem.value = "";
    }
    arr.push(obj);
    localStorage.setItem("arr",JSON.stringify(arr))
}

let div = document.querySelector("#div")

for (let i = 0; i < newArr.length;i++){
let p = document.createElement("p");
p.innerText = JSON.stringify(newArr[i]);
let btnDelete = document.createElement("input");
let btnEdit = document.createElement("input");
btnDelete.type = "button";
btnDelete.value = "delete";
btnEdit.type = "button";
btnEdit.value = "edit";
p.appendChild(btnEdit);
p.appendChild(btnDelete);
div.appendChild(p);
btnDelete.onclick = ()=>{
    p.innerText = "";
    newArr.splice(i,1);
    localStorage.setItem("arr",JSON.stringify(newArr));
}
btnEdit.onclick = ()=> {
    let elemsOfArr = [] 
    let j = 0;

    for (const key in newArr[i]) {
        elemsOfArr.push(newArr[i][key]);
     }
     console.log(elemsOfArr);
   for (const elem of book) {
       elem.value = elemsOfArr[j];
       j++;
   }
   localStorage.setItem("arr",JSON.stringify(newArr));
}
}

