// console.log("object");
//there are two ways to make objects 1 is by construtor(it creates a singleton object) and other by literal

const mysym = Symbol("Mykey1");
const myobj  = {
    name: "Manish",
    age: 18,
    email: "manish@code.com",
    isloggedin: true,
    [mysym]: "not my key",
    loggedinDays: ["Monday", "Tuesday"],
    "full name": "Manish Bhandari"
}

console.log(myobj.email);  // how to call the key value pair in js
console.log(myobj["full name"]); // how to call the key value pair in js
console.log(myobj["email"]);
myobj.email = "manish@adgitm.com";
console.log(myobj);
console.log(mysym);
// Object.freeze(myobj);

myobj.greeting = function(){
    console.log(`hello js user, ${this["full name"]}`);
}
console.log(myobj.greeting());
