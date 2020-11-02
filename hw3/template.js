//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//- отримує текст з параграфа з id "content"
//- отримує текст з блоку з id "rules"
//- замініть текст параграфа з id 'content' на будь-який інший
//- замініть текст параграфа з id 'rules' на будь-який інший
//- змініть кожному елементу колір фону на червоний
//- змініть кожному елементу колір тексту на синій
//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//- отримати всі елементи з класом fc_rules
//- поміняти колір тексту у всіх елементів fc_rules на червоний

let content = document.getElementById("content");
let rules = document.getElementById("rules");
let rule1 = document.getElementsByClassName("fc_rules rule1");
let rule2 = document.getElementsByClassName("fc_rules rule2");
let rule3 = document.getElementsByClassName("fc_rules rule3");
let rule4 = document.getElementsByClassName("fc_rules rule4");
let innerText = content.innerText;
let rulesText = rules.innerText;
console.log(innerText);
console.log(rulesText);
content.innerText = "hello";
rules.innerText = "okten";
rules.style.backgroundColor = "red";
rules.style.color = "blue";
content.style.backgroundColor = "red";
content.style.color = "blue";
rule1[0].style.backgroundColor = "red";
rule1[0].style.color = "blue";
rule2[0].style.backgroundColor = "red";
rule2[0].style.color = "blue";
rule3[0].style.backgroundColor = "red";
rule3[0].style.color = "blue";
rule4[0].style.backgroundColor = "red";
rule4[0].style.color = "blue";

let list = document.getElementById("rules");
console.log(list);

let fcRules = document.getElementsByClassName("fc_rules");
console.log(fcRules);

for (const el of fcRules) {
    el.style.color = "red";
}