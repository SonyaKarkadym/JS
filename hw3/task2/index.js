//- создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

const obj1 = {postId: 7,id: 8, name: "id"}
const obj2 = {postId: 9,id: 10, name: "id"}
const obj3 = {postId: 11,id: 12, name: "id"}
const obj4 = {postId: 3,id: 4, name: "labore ex et quam laborum"}
const obj5 = {postId: 5,id: 6, name: "exet "}

const obj6 = {userId: 24,id: 34,title: ["magnam"], body: {friend: "nobis"} }
const obj7 = {userId: 14,id: 35,title: ["mam"], body: {friend: "robis"} }
const obj8 = {userId: 15,id: 36,title: ["fam"], body: {friend: "dobis"} }
const obj9 = {userId: 16,id: 37,title: ["ram"], body: {friend: "tobis"} }
const obj10 = {userId: 17,id: 38,title: ["dam"], body: {friend: "kobis"} }

for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        const element = obj1[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj1));

for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
        const element = obj2[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj2));

for (const key in obj3) {
    if (obj3.hasOwnProperty(key)) {
        const element = obj3[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj3));

for (const key in obj4) {
    if (obj4.hasOwnProperty(key)) {
        const element = obj4[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj4));

for (const key in obj5) {
    if (obj5.hasOwnProperty(key)) {
        const element = obj5[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj5));

for (const key in obj6) {
    if (obj6.hasOwnProperty(key)) {
        const element = obj6[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj6));

for (const key in obj7) {
    if (obj7.hasOwnProperty(key)) {
        const element = obj7[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj7));

for (const key in obj8) {
    if (obj8.hasOwnProperty(key)) {
        const element = obj8[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj8));

for (const key in obj9) {
    if (obj9.hasOwnProperty(key)) {
        const element = obj9[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj9));

for (const key in obj10) {
    if (obj10.hasOwnProperty(key)) {
        const element = obj10[key];
        document.write(element);
        document.write(" ");
    }
}
document.write("|");
console.log(Object.keys(obj10));