/*1
Напишите код, выполнив задание из каждого пункта отдельной строкой:
1. Создайте пустой объект user .
2. Добавьте свойство name со значением John .
3. Добавьте свойство surname со значением Smith .
4. Измените значение свойства name на Pete .
5. Удалите свойство name из объекта.*/

let user = {};
user.name = "John";
user.surname = "Smitth";
user.name = "Petty";
delete user.name;

/*2
Напишите функцию isEmpty(obj) , которая возвращает true , если у объекта нет
свойств, иначе false .

Должно работать так:
let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false */

function isEmpty(obj) {
  for (let in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log(isEmpty(schedule)); // true
schedule["8:30"] = "get up";
console.log(isEmpty(schedule)); // false

/*4
У нас есть объект, в котором хранятся зарплаты нашей команды:
let salaries = {
John: 100,
Ann: 160,
Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum .
Должно получиться 390 .
Если объект salaries пуст, то результат должен быть 0 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

/*5
Создайте функцию multiplyNumeric(obj) , которая умножает все числовые свойства
объекта obj на 2 .
Например:
// до вызова функции
let menu = {
width: 200,
height: 300,
title: "My menu"
};
multiplyNumeric(menu);
// после вызова функции
menu = {
width: 400,
height: 600,
title: "My menu"
};*/

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
console.log(multiplyNumeric(menu));

