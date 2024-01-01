// class mani{
//     constructor(username, isloggedin){
//         this.username = username;
//         this.isloggedin = true;
//     }
//     saymyName() {
//         console.log(`You are ${this.username}`);
//     }
// }
// let userOne =  mani('heisnberg', true);
// userOne.saymyName();

function saymyName(username, isloggedin){
    // console.log(`${username} is your name and you are logged in`)
    return this;
}
let userOne = saymyName('manish', true);
let usertwo = saymyName('bro', false);

console.log(userOne)
