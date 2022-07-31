// Q3) Do the below programs in arrow function

// a) Print odd numbers in an array
let oddNumberList = (array) => {
    let result = [];
    for(let num of array)   {
        if(num%2 !==0)  {
            result.push(num);
        }
    }
  return result;
}
console.log(oddNumberList([2,4,6,9,10,31]));

//b) Convert all the strings to Tiltle caps in a string array Arrow function
let titleCase = (array) => {
    let result = [];
    for(let num of array)   {
            result.push(num[0].toUpperCase() + num.slice(1));
        }
  return result;
}
console.log(titleCase(["shiva","aarthi","truelove"]));

//c) Sum of all numbers in an array Arrow function
let sum = (array) => {
    return array.reduce((a,b) => a+b);
}
console.log(sum([34,56,78]));

//d) Return all the prime numbers in an array Anonymous function
let prime = (num) => {
    let isPrime = true;
    for(let i=2;i<num;i++)  {
        if(num%i===0)   {
            isPrime = false;
        }
    }
    return isPrime;
}
let primeArray = (array) => {
    let result = [];
    for(let num of array)   {
        if(prime(num)) {
            result.push(num)
        }
    }
    return result;
}
console.log(primeArray([3,7,10,29,50,34,47]));

//e) Return all the palindromes in an array Anonymous function
let palindromes = (array) => {
    let result = [];
    for(let item of array)  {
        if(item ==(item.toString().split("").reverse().join("")))   {
            result.push(item);
        }
    }
    return  result;
}
console.log(palindromes([121,"mam",456,"shiva",343]));