class user {
    constructor(username, email){
        this.username = username;
        this.email = email;
    }

    logme(){
        console.log(`The name and the email of the user are ${this.username} and ${this.email} and the standard is ${this.standard}`)
    }
}
// let obj1  = new user('manish', 'manish@gmail.com');
// console.log(obj1)

class student extends user{
    constructor(username, email, standard){
        super(username, email);
        this.standard = standard;
    }
}

let obj2  = new student('manish', 'manish@gmail.com', 'final-yr');
obj2.logme();
