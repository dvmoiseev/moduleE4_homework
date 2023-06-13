let some_object = {
	Prop1: 123, 
  	Prop2: 456
}

const some_other_object = Object.create(some_object);

some_other_object.ownProp1=789;
some_other_object.ownProp2='012';

function output_values(obj){
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) //только собственные свойства
			console.log(key+' = '+obj[key]);
		}}

output_values(some_other_object);