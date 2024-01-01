//primitives(accesed by copy in the memory)
// 7 types: String, null , Number, undefined, symbol, BigInt

//js is a dynamically typed language

// non primitive(reference accessed)
//types: Array, objects, functions

// string
const id = "abc123";
//Number
const anotherId = "xyz123";
//null
let weather = null;
//undefined
let bigId;
console.log(typeof bigId);
//symbol
const id1 = Symbol('134');
const id2 = Symbol('134');
console.log(id1 == id2);

// BigInt
bigId = 326455646675434356n;

//array
let heroes = ['batman', 'superman', 'spiderman']

//object
let myobj = {
    name: "Manish",
    age: 23,
}

//function
let count = 0;
const myfunction = function(){
    console.log("this is "+count+ " function");
    count++;
}
myfunction();
myfunction();

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

