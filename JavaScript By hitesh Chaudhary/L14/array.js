const array1 = [3,5,6,5,"manish", true]
// const array1 = [3,5,6,5,"manish", true]
console.log(typeof array1)
console.log( array1)
const arr = new Array(4,5,67,8,76,5)
console.log(arr);

arr.push(5);
console.log(arr);
arr.pop()
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(4);
console.log(arr);

console.log(arr.includes(4));
console.log(arr.indexOf(8));

const hello = array1.join();
console.log(hello);


const arr2 = new Array(4,5,67,8,76,5)
// console.log(arr2);
console.log(arr2.slice(1,4));  //it does not changes the array also
console.log(arr2.splice(1,4)) //it changes the array also
console.log(arr2)
// console.log(arr2);



