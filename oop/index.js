//-  Створити функцію конструктор,клас для об'єкту який описує теги
//Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru

 //Таким чином описати теги
 //-a
 //-div
 //-h1
 //-span
 //-input
 //-form
 //-option
 //-select
 //Приклад результату
//{
//        titleOfTag: 'area',
//        action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//        attrs: [
//        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//        {/*some props and values*/},
//        {/*...*/},
//        {/*...*/},
//        ]
//
//  }

// function describer(title,action,title1,actionOfAttr1,title2,actionOfAttr2) {
       
//         this.title = title;
//         this.action = action;
//         this.attrs = [{titleOfAttr : title1, actionOfAttr: actionOfAttr1},
//                      {titleOfAttr:title2, actionOfAttr2 : actionOfAttr2}];
   
// }


// let a = new describer("a"," создание ссылок","href","Задает адрес","accesskey","Активация ссылки с помощью комбинации клавиш");
// console.log(a);

// let div = new describer("div","блочный элемент","align"," выравнивание содержимого","title","всплывающая подсказка");
// console.log(div);

// let h1 = new describer("h1","Заголовок первого уровня","align","выравнивание заголовка");
// console.log(h1);

// let span = new describer("span","определения строчных элементов");
// console.log(span);

// let input = new describer("input","создания текстовых полей, различных кнопок, переключателей и флажков","required","Обязательное для заполнения поле","list","Указывает на список вариантов, которые можно выбирать при вводе текста");
// console.log(input);

// let form = new describer("form", " устанавливает форму", "autocomplete", "Включает автозаполнение полей", "novalidate","Отменяет встроенную проверку данных формы на корректность ввода");
// console.log(form);

// let option = new describer("option", "определяет отдельные пункты списка, создаваемого с помощью контейнера <select>","disabled","Заблокировать для доступа элемент списка","selected","Заранее устанавливает определенный пункт списка выделенным");
// console.log(option);

// let select = new describer("select","позволяет создать элемент интерфейса в виде раскрывающегося списка","size","Количество отображаемых строк списка","name","Имя элемента для отправки на сервер или обращения через скрипты");
// console.log(select);


class describer {
    constructor(title,action,title1,actionOfAttr1,title2,actionOfAttr2){
        this.title = title;
        this.action = action;
        this.attrs = [{titleOfAttr : title1, actionOfAttr: actionOfAttr1},
                     {titleOfAttr:title2, actionOfAttr2 : actionOfAttr2}];
       
    }
}

let a = new describer("a"," создание ссылок","href","Задает адрес","accesskey","Активация ссылки с помощью комбинации клавиш");
console.log(a);

let div = new describer("div","блочный элемент","align"," выравнивание содержимого","title","всплывающая подсказка");
console.log(div);

let h1 = new describer("h1","Заголовок первого уровня","align","выравнивание заголовка");
console.log(h1);

let span = new describer("span","определения строчных элементов");
console.log(span);

let input = new describer("input","создания текстовых полей, различных кнопок, переключателей и флажков","required","Обязательное для заполнения поле","list","Указывает на список вариантов, которые можно выбирать при вводе текста");
console.log(input);

let form = new describer("form", " устанавливает форму", "autocomplete", "Включает автозаполнение полей", "novalidate","Отменяет встроенную проверку данных формы на корректность ввода");
console.log(form);

let option = new describer("option", "определяет отдельные пункты списка, создаваемого с помощью контейнера <select>","disabled","Заблокировать для доступа элемент списка","selected","Заранее устанавливает определенный пункт списка выделенным");
console.log(option);

let select = new describer("select","позволяет создать элемент интерфейса в виде раскрывающегося списка","size","Количество отображаемых строк списка","name","Имя элемента для отправки на сервер или обращения через скрипты");
console.log(select);
    