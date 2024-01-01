//primitive data type are stored in form of stack in the memory
let id = "1234";
let id2 = id;
console.log(id)
console.log(id2)

id2 = 435;

console.log(id)
console.log(id2)
//non - primitive data type are stored in form of heap in the memory

let myobj = {
    email: "manish@gmail.com", 
    age: 24,
}
let yourobj = myobj;
console.log(myobj.email);
console.log(yourobj.email);

yourobj.email = "your@gmail.com"
console.log(myobj.email);
console.log(yourobj.email);
