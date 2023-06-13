/* Задание 2. Написать функцию, которая принимает в качестве 
аргументов строку и объект, а затем проверяет есть ли у переданного 
объекта свойство с данным именем. Функция должна возвращать true или false. */

const some_object = {
	prop1: 123,
	prop2: 'string'
};

function property_exists(a, obj) {
	return a in obj;
};

console.log(property_exists('prop1', some_object)); //вернёт true
console.log(property_exists('prop3', some_object)) //вернёт false