//IFFE(Immediately invoked function expression)
(function hello(){
    console.log("DB Connected")
})();
( () => {
    console.log("DB Connected two")
})()