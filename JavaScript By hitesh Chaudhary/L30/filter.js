const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks = books.filter((item) => item.edition >= 2023
  )
  
  const numbers = [1,3,4,5,6,7,8]
  let printnum = numbers.map((num) => {
      return num + 10
    })
    // console.log(printnum);
    
    //map can update the array but filter cannot
    let printnum2 = [];
    numbers.forEach((item) => {
        printnum2.push(item+10)
    })
    // console.log(printnum2);

let total = numbers.reduce((accumualtor, currentValue) =>{
    // console.log(`The value of acc is ${accumualtor} is and the value of currentValue is ${currentValue}`);
    
    return accumualtor + currentValue;
}, 0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let pricetopay = shoppingCart.reduce((acc, currentValue) =>{
    return acc+currentValue.price
}, 0)
console.log(`${pricetopay} `);