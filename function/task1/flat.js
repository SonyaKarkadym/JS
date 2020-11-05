//Вирівняти багаторівневий масив в однорівневий
//[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

let str = "[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9]";
let newStr = str.replace("[","").replace("]","").replace("[","").replace("]","").replace("[","").replace("]","").replace("[","").replace("]",""); 
console.log(newStr);
newStr = newStr.split(",");
console.log(newStr);