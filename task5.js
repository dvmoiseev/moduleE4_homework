class Device
{
	constructor(name, power)
	{
		this.name = name;
		this.power = power;
		this.plugged = false
	}
	
	OnOff()
	{
		this.plugged = ! (this.plugged);
		if (this.plugged) { console.log(this.name + ' вкл.') }
		if (! this.plugged) { console.log(this.name + ' выкл.') }
	}
	
	getPower()
	{
		if (this.plugged) return(this.power); else return(0);
	}
}

let totalPower = function()
{
	let sum = 0;
	for (let value of Devices)
		sum = sum + value.getPower();
	return sum;
}

const lamp = new Device("Настольная лампа", 50);
lamp.OnOff();
console.log(lamp);

const comp = new Device("Компьютер", 250);
comp.OnOff();
console.log(comp);

const fireplace = new Device("Электрокамин", 2000);
fireplace.OnOff();
console.log(fireplace);

let Devices = [lamp, comp, fireplace];

console.log(totalPower());
fireplace.OnOff(); //выключим камин
console.log(totalPower()); //и ещё раз посчитаем мощность