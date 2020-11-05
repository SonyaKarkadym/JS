// функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, 
{id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
 {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

 function add(arr1,arr2) {
     for(let i = 0;i < arr1.length; i++){
         for(let j = 0; j < arr2.length; j++){
             if(arr1[i].id == arr2[j].user_id){
                 arr1[i].adress = arr2[j].city;
             }
         }
     }
     return arr1;
 }

 console.log(add(usersWithId,citiesWithId));