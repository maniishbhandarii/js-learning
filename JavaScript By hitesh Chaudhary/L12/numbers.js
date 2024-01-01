let num = 45;

let num1 = new Number(80349854357);//explicitily defining a number

console.log(typeof num1.toString());
console.log(num1.toFixed(2));
console.log(num1.toPrecision(1));
console.log(num1.toLocaleString());

//**********************************Maths**************************************** */

console.log(Math.abs(-45))
console.log(Math.round(45.455))
console.log(Math.floor(45.643))
console.log(Math.ceil(45.643))

const min = 1;
const max = 3;
console.log(Math.floor((Math.random()*(max-min+1)+min)))