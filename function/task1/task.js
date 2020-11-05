//- створити функцію яка виводить масив
//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
//- створити функцію яка приймає три числа та виводить та повертає найбільше.
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//- створити функцію яка повертає найбільше число з масиву
//- створити функцію яка повертає найменьше число з масиву

let arr = [2,3,4];

function log(array){
    console.log(array);
}

log(arr);

function random(array){
    for(let i = 0; i < array.length; i++){
        array[i] = Number.parseInt(Math.random()*100);
}
log(array);
}

random(arr);

function min(a,b,c){
    let min;
    if(a <= b && a<= c) {
        min = a;
    }
    else if(b <= c && b <= a){
        min = b;
    }
    else {
        min = c;
    }
    console.log(min);
}

min(8,5,6);

function max(a,b,c){
    let max;
    if(a >= b && a>= c) {
        max = a;
    }
    else if(b >= c && b >= a){
        max = b;
    }
    else {
        max = c;
    }
    console.log(max);
}

max(3,7,4);

function arg(...args){
    console.log(Math.max(...args));
    return Math.min(...args)
}
arg(2,5,6,8,3,4,11);

function maxOf(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    console.log("max:" + max);
    return max;
}
maxOf(arr);

function minOf(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    let min = max;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= min){
            min = arr[i];
        }
    }
    return console.log("min: " + min);
}
minOf(arr);

//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function add(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return console.log("sum:" + sum);
}
add(arr);

function midle(arr){
    let sum = 0;
    let midle = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    midle = sum/arr.length;
    return console.log("midle:" + midle);
}
midle(arr);

//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

let arrObj = [{name:"a",age:"18"},{t:"b"},{color:"blue"},{friend:"i"},{car:"true",f:"false"}];
function objCount(arrObj){
    let count = 0;
    for (const el of arrObj) {
        count++;
    }
    return console.log("count: " + count);
}
objCount(arrObj);

function keysCount(arrObj){
    let count = 0;
    for (let i = 0; i < arrObj.length;i++) {
        for (const el in arrObj[i]) {
            count++;
        }
    }
    return console.log("count: " + count);
}

keysCount(arrObj);

//- створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//  Приклад
//  [1,2,3,4]
//  [2,3,4,5]
//  результат
//  [3,5,7,9]

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,5];
function plus(arr1,arr2){
    let arr3 = [];
    arr3.push(arr1[0]+arr2[0]);
    for(let i = 0; i < arr1.length;i++){
        for(let j = 0; j < arr2.length; j++){
        if(i = j){ 
            let a3 = arr1[i] + arr2[j];
            arr3.push(a3);
        }
    }
}
return console.log(arr3);
}
plus(arr1,arr2)

//- *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


function replace(arr,i){
    let a = arr[i];
    let b = arr[i+1];
    arr[i+1] = a;
    arr[i] = b;  
    let arrJSON = JSON.stringify(arr);
    console.log(arrJSON);
}
replace(arrObj,0);

//- *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//Приклад
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

let zero1 = [1,6,3,0,0]
let zero2 = [1,2,3,4,0]
let zero3 = [1,0,0,0]
function zero(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            arr.splice(i,1);
            arr.push(0)
        }
    }
    console.log(arr);
}
zero(zero1);
zero(zero2);
zero(zero3);
