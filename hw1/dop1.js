let a = prompt("введите число а");
let b = prompt("введите число b");
let c = prompt("введите число c");

if(a<=b && a<=c && b<=c) document.write(`${a} ${b} ${c}`);
if(a<=b && a<=c && c<=b) document.write(`${a} ${c} ${b}`);
if(b<=a && b<=c && a<=c) document.write(`${b} ${a} ${c}`);
if(b<=a && b<=c && c<=a) document.write(`${b} ${c} ${a}`);
if(c<=a && c<=b && a<=b) document.write(`${c} ${a} ${b}`);
if(c<=a && c<=b && b<=a) document.write(`${c} ${b} ${a}`);