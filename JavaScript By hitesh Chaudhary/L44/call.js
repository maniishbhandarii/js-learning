function Setusername(username){
    //complex DB calls
    this.username = username;
    console.log('setusername called')
}

function setuser(username, email, password){
    Setusername.call(this, username);
    this.email = email;
    this.password =password;
}

let manish = new setuser('manish', 'manish@amzon.in', '123');
console.log(manish)