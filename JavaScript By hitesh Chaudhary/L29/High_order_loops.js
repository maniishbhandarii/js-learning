//for of loop
const arr = [2, 4, 6, 2, 5]
for (const num of arr) {
    // console.log(`The value of is ${num}`)
}

const greeting = "hello world!"
for (const greet of greeting) {
    if(greet == " "){
        continue
    }
    // console.log(`The word is ${greet}`);
}

const map1 = new Map()
map1.set("IN" , "India")
map1.set("USA" , "Bhupender jogi")
map1.set("EU" , "European Union")
for (const [key, value] of map1) {
    // console.log(key + " :- " + value);
}

// const code = new Object()
const code = {
    "IN": "India",
    "USA": "Bhupender jogi",
    "EU": "European Union"
}
// console.log(code);

// for (const i of code) {
//     console.log(i)
// }

//forin
for (const key in code) {       
    // console.log(`The shortcut for ${code[key]} is ${key}`)
}

const arr1 = [ "cpp", "java", "json"]

for (const key in arr1) {
    // console.log(key);
}

//for each

arr1.forEach( (hello) =>  {
  //  console.log(hello);  
})

const coding = [
    {
        "language_name": "C++",
        "file_name": ".cpp",
    },
    {
        "language_name": "Java",
        "file_name": ".java",
    },
    {
        "language_name": "javascript",
        "file_name": ".js",
    }
]

coding.forEach((item)=> {
    console.log(` The value of extension of ${item.language_name} is ${item.file_name} `)
})
