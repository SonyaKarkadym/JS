//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let arr = ["a","b","c"];
let word = "";
let word1 = "";
let word2 = "";

for(let i = 0; i < arr.length; i++) {
    word +=arr[i];
}

document.write(word);

let j = 0;
while(j < arr.length){
    word1 +=arr[j];
    j++;
}

document.write(word1);

for (let k of arr){
    word2 += k;
}

document.write(word2);