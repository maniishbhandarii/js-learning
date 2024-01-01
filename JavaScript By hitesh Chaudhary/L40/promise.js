const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Asyn Task 1 completed");
        resolve();
    }, 1000);
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Asyn Task 2 completed");
        resolve();
    }, 1000);
}).then(function () {
    console.log('Promise 2 called')
})

promiseOne.then(() => {
    console.log("promise 1 called")
})

const promisethree = new Promise(function (resolve, reject) {
    setTimeout(function(){
        resolve({ username: 'manish', email: 'manish@gmail.com' })
    }, 1000);
})
promisethree.then(function(user){
    console.log(user);
})

const promisefour = new Promise(function(resolve, reject){
    let error = false;
    if(!error){
        resolve({ username: 'manish14', email: 'manish14@gmail.com' })
    }
    else{
        reject('Error something went wrong')
    }
})
promisefour.then(function(user){
    console.log(user);
    return user.username;
}).catch(function(rejection){
    console.log(rejection);
})