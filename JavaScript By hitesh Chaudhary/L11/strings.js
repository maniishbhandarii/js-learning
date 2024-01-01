let name = "manish";
let repocout = 45;

console.log(` MY name is ${name} and my repocount is ${repocout}`); //this is called string interpolation and backticks format

const name1 = new String("Bhandari");

// let uppercase = name.toUppercase();
let upper = name1.toUpperCase();//only available in string prototype
console.log(upper)

//string function
console.log(name1.slice(-5,5));
console.log(name1.substring(0,5));
console.log(name1.length);
console.log(name1.charAt(4));
console.log(name1.indexOf('d'));

console.log(name1.replace("dari", "darii"));
console.log(name1.includes("darii"));

const url = "    manish.bhandari.com/manish.bhan.dari     ";
console.log(url)
console.log(url.trim())

console.log(url.split(".", -2))