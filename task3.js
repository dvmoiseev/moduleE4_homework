/* Задание 3. Написать функцию, которая создает пустой объект, 
но без прототипа. */

function empty_object() { return Object.create({}); }

console.log(empty_object());