const marvel = ["Thor", "Ironman","Spider-man"]
const dc = ["superman", "AquaMan","Batman"]

// marvel.push(dc)
// console.log(marvel)
const all = marvel.concat(dc);
// console.log(all)
const all_heroes = [...marvel, ...dc]
// console.log(all_heroes)

const arr  = [3,5,6,[5,6,[45,67]],65,[54], 34,5]
const real_arr = arr.flat(Infinity)
console.log(real_arr)

score1 = 45
score2 = 43
score3 = 99

console.log(Array.isArray("Manish"))
console.log(Array.from("Manish"))
console.log(Array.of(score1, score2, score3))


