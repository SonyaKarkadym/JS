//- - Створити функцію конструктор яка дозволяє створювати об'єкти car,Створити клас який дозволяє створювати об'єкти car,Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//-- info () - яка виводить всю інформацію про автомобіль
//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//-- changeYear (newValue) - змінює рік випуску на значення newValue
//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class car {
//     constructor(model,producer,year,maxSpeed,volume){
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive(){
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info(){
//         console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, volume: ${this.volume}, driver: ${this.driver.name}`);
//     }
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//         console.log(this.maxSpeed);
//     }
//     changeYear(newValue){
//         this.year = newValue;
//         console.log(this.year)
//     }
//     addDriver(driver){
//         this.driver = driver;
//         console.log(this);
//     }
// }

// let bmw = new car('x5','bmw','2013',240,3);
// let driver = {name: "Dmytro", age: 25};
// bmw.increaseMaxSpeed(30);
// bmw.drive();
// bmw.info();
// bmw.changeYear("2015");
// bmw.addDriver(driver);

// function car(model,producer,year,maxSpeed,volume){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;

//     this.drive = () => {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
    
//     this.info = () => {
//         console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxSpeed: ${this.maxSpeed}, volume: ${this.volume}, driver: ${this.driver.name}`);
//     };
    
//     this.increaseMaxSpeed = (newSpeed) => {
//             this.maxSpeed += newSpeed;
//             console.log(this.maxSpeed);
//     };
    
//     this.changeYear = (newValue) => {
//         this.year = newValue;
//         console.log(this.year)
//     };

//     this.addDriver = (driver) => {
//         this.driver = driver;
//         console.log(this);
//     };

// }

// let bmw = new car('x5','bmw','2013',240,3);
// let driver = {name: "Dmytro", age: 25};
// bmw.increaseMaxSpeed(30);
// bmw.addDriver(driver);
// bmw.drive();
// bmw.info();
// bmw.changeYear("2015");

let bmwCar = {
    model: "x5",
    producer: "bmw",
    year: "2015",
    maxSpeed: 240,
    volume: 3,
    drive(){
                console.log(`Їдемо зі швидкістю ${bmwCar.maxSpeed} на годину`);
            },
    info(){
                console.log(`model: ${bmwCar.model}, producer: ${bmwCar.producer}, year: ${bmwCar.year}, maxSpeed: ${bmwCar.maxSpeed}, volume: ${bmwCar.volume}, driver: ${bmwCar.driver.name}`);
            },
    increaseMaxSpeed(newSpeed){
                        bmwCar.maxSpeed += newSpeed;
                        console.log(bmwCar.maxSpeed);
                      },
    changeYear(newValue){
                    bmwCar.year = newValue;
                    console.log(bmwCar.year)
                },
    addDriver(driver){
                    bmwCar.driver = driver;
                }
};

bmwCar.increaseMaxSpeed(20);
bmwCar.addDriver({name: "sonya",age : 21});
bmwCar.changeYear(2016);
bmwCar.drive();
bmwCar.info();
