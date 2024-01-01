// const newuser = new Object(); //singleton object
const newuser = {}  //non singleton object
newuser.id = "123"
newuser.email = "manish@gmail.com"
newuser.isloggedin = false;

const brandnewuser = {
    email2: "man@gmail.com",
    fullName : {
        userFullname : {
            firstname: "Manish",
            lastname: "Bhandari",
        }
    }
}

// const obj3 = {newuser, brandnewuser}
//  const obj3 = Object.assign({}, newuser, brandnewuser)
const obj3 = {...newuser, ...brandnewuser}
const arr1 = [
    {
        id: 123,
        email: "hello"
    },
    {
        id: 456,
        email: "Bye"
    },
]

console.log(arr1[1].email)
console.log(Object.keys(obj3))
console.log(Object.values(obj3))
console.log(obj3.hasOwnProperty("email3"))

//object de-structure
const course = {
    name: "JS in Hindi",
    price: 4599,
    courseInstrutor: "Hitesh"
}
const {courseInstrutor: instrutor} = course;//syntax
console.log(instrutor)
