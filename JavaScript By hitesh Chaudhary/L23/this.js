const information = {
    name: "manish",
    price: 459, 
    welcome: function welcomemsg(){
        console.log(`Name and price of information is ${this.name} and ${this.price} respectively`)
    }
}

console.log(information.welcome)
const result = function (num1, num2){
    return num1 + num2
}

console.log(result(3,5));

const result2 = (num1, num2) => {
    return num1 + num2
}
console.log(result2(5,5));
const result3 = (num1, num2) => num1 + num2
console.log(result(68,1));