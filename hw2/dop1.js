//1. перебрати його циклом while
//2. перебрати його циклом for
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
//5. перебрати циклом while та вивести  числа тільки парні  значення
//6. перебрати циклом for та вивести  числа тільки парні  значення
//7. замінити кожне число кратне 3 на слово "okten"
//8. вивести масив в зворотньому порядку.
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//10
// створити пустий масив та :
//- заповнити його 50 парними числами за допомоги циклу.
//- заповнити його 50 непарними числами за допомоги циклу.


let arr = [2,17,13,6,22,31,45,66,100,-18];
let arrokten = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;
while(i < arr.length) {
    if(arr[i] % 2 != 0){
        document.write(arr[i]);
    }
    i++;
}

document.write("|");

for(let j = 0;j < arr.length; j++) {
    if(arr[j] % 2 != 0){
        document.write(arr[j]);
    }
}

document.write("|");

let k = 0;
while(k < arr.length) {
    if(arr[k] % 2 == 0){
        document.write(arr[k]);
    }
    k++;
}

document.write("|");

for(let j = 0;j < arr.length; j++) {
    if(arr[j] % 2 == 0){
        document.write(arr[j]);
    }
}

document.write("|");

for(let j = 0;j < arr.length; j++) {
    if(arr[j] % 3 == 0){
        arrokten[j] = "okten";
    }
}

document.write(arrokten);
document.write("|");

for(let j = 1;j <= arr.length; j++) {
    document.write(arr[arr.length - j]);
}

document.write("|");
document.write(arr);
document.write("|");

let p = arr.length-1;
while(p > 0) {
    if(arr[p] % 2 != 0){
        document.write(arr[p]);
    }
    p--;
}

document.write("|");

for(let j = arr.length - 1;j > 0; j--) {
    if(arr[j] % 2 != 0){
        document.write(arr[j]);
    }
}

document.write("|");

let t = arr.length;
while(t > 0) {
    if(arr[t] % 2 == 0){
        document.write(arr[t]);
    }
    t--;
}

document.write("|");

for(let j = arr.length;j > 0; j--) {
    if(arr[j] % 2 == 0){
        document.write(arr[j]);
    }
}

document.write("|");

for(let j = arr.length;j > 0; j--) {
    if(arr[j] % 3 == 0){
        arrokten[j] = "okten";
    }
}

document.write(arrokten);
document.write("|");

for(let j = arr.length-1 ;j >= 0; j--) {
    document.write(arr[j]);
}

document.write("|");

let arr1 = [];
let arr2 = [];

for(let i = 0;i < 50; i++) {
    let x = parseInt(Math.random()*100);
    if(x%2 == 0){
        arr1[i] = x;
    }
    else {
    arr1[i] = x+1;
    }
}

for(let i = 0;i < 50; i++) {
    let x = parseInt(Math.random()*100);
    if(x%2 != 0){
        arr2[i] = x;
    }
    else{
    arr2[i] = x+1;
    }
}

document.write(arr1);
document.write("|");
document.write(arr2);