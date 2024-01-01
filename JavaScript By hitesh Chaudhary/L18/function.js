function saymyname(){
    console.log("Manish Bhandari")
}
// saymyname()

function addTwoNumber(number1, number2){
    // console.log(number1 +  number2)
    return number1 + number2
}

result = addTwoNumber(34,66)
console.log(result)

function loggedIn(username = "sam"){
    if(!username){
        console.log(`Please enter the name`);
        return
    }
        return `${username} just logged in`
}
console.log(loggedIn("Manish"))

username = {
    name: "manish",
    price: 344
}
function handleobject(object){
    console.log(`The name of user is ${object.name} and the ${object.price} `)
}
// handleobject(username)
handleobject(
    {
        name: "hitesh",
        price: 4555
    }
)

const arr = [45, 54, 46, 64]

function return2ndValue(array){
    console.log(array[1]);
}

return2ndValue(arr)

