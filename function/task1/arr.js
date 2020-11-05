//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// додати список цих автомобілів.
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який 
//потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок


let arr = [
    {
        name: 'mersedes',
        old: 5,
        model: 'E-class',
        color: 'white',
        comfortable: true,
    },
    {
        name: 'BMW',
        old: 10,
        model: '5-sereis',
        color: 'black',
        comfortable: true,
    },
    {
        name: 'Audi',
        old: 3,
        model: 'A8-long',
        color: 'blue',
        comfortable: true,
    },
    {
        name: 'Renault',
        old: 15,
        model: 'Megane',
        color: 'white',
        comfortable: false,
    },
    {
        name: 'Suzuki',
        old: 2,
        model: 'Grant vitara',
        color: 'white',
        comfortable: true,
    },
]

function add1(array,id){
    let divCar = document.getElementById(id);
    for (const elem of array) {
        let p = document.createElement("p");
        p.innerText = `name: ${elem.name},old: ${elem.old}`
        divCar.appendChild(p);
    }
    }
    
add1(arr,"list");

//Для кожного автомобіля створити свій блок, та додати його в елемент, 
//індентифікатор якого ви отримали. Всі властивості авто в обному блоці
//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

function add2(array,id){
    for(let i =0;i <array.length;i++){
        let div = document.createElement(id);

        console.log(array[i])
        for(let elem in array[i]){
            const value = array[i][elem]
            console.log(elem + ' ' + value);
            let h4 = document.createElement("h4");
            h4.innerText = elem + ' ' + value;
            div.appendChild(h4);
        }
        document.body.appendChild(div)
    }
}
add2(arr,"div");
