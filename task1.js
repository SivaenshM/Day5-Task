// Q1) Do the below programs in anonymous function & IIFE

// Anonymous Function is a function that does not have any name associated with it. 
// Normally we use the function keyword before the function name to define a function in JavaScript, 
// however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
// an anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. 
// An anonymous function can also have multiple arguments, but only one expression.

// a) (i)Print odd numbers in an array in Anonymous function
let oddNumberList = function(array) {
    let result = [];
    for(let num of array)   {
        if(num%2 !==0)  {
            result.push(num);
        }
    }
  return result;
}
console.log(oddNumberList([2,4,6,9,10,31]));

// a) (ii)Print odd numbers in an array in  IIFE
// Another use case of anonymous functions is to invoke the function immediately after initialization, 
// this is also known as Self Executing Function. This can be done by adding parenthesis we can immediately execute the anonymous function.
(function(array) {
    let result = [];
    for(let num of array)   {
        if(num%2 !==0)  {
            result.push(num);
        }
    }
  console.log(result) ;
})([2,4,6,9,10,31]);


//b) Convert all the strings to Tiltle caps in a string array Anonymous function
let titleCase = function(array) {
    let result = [];
    for(let num of array)   {
            result.push(num[0].toUpperCase() + num.slice(1));
        }
  return result;
}
console.log(titleCase(["shiva","aarthi","truelove"]));

//b) Convert all the strings to Tiltle caps in a string array IIFE
(function(array)   {
    let result = [];
    for(let num of array)   {
            result.push(num[0].toUpperCase() + num.slice(1));
        }
  console.log(result);
})(["shiva","aarthi","truelove"]);

//c) Sum of all numbers in an array Anonymous function
let sum = function(array)   {
    return array.reduce((a,b) => a+b);
}
console.log(sum([34,56,78]));   
//c) Sum of all numbers in an array IIFE
(function(array)   {
    let sum = array.reduce((a,b) => a+b);
    console.log(sum);
})([34,56,78]);

//d) Return all the prime numbers in an array Anonymous function
let prime = function(num)   {
    let isPrime = true;
    for(let i=2;i<num;i++)  {
        if(num%i===0)   {
            isPrime = false;
        }
    }
    return isPrime;
}
let primeArray = function(array)    {
    let result = [];
    for(let num of array)   {
        if(prime(num)) {
            result.push(num)
        }
    }
    return result;
}
console.log(primeArray([3,7,10,29,50,34,47]));

//d) Return all the prime numbers in an array IIFE
(function(array)    {
    let primecheck = function(num)   {
        let isPrime = true;
        for(let i=2;i<num;i++)  {
            if(num%i===0)   {
                isPrime = false;
            }
        }
        return isPrime;
    }
    let result = [];
    for(let num of array)   {
        if(primecheck(num)) {
            result.push(num)
        }
    }
    console.log(result);
})([3,7,10,29,50,34,47]);


//e) Return all the palindromes in an array Anonymous function
let palindromes = function(array)   {
    let result = [];
    for(let item of array)  {
        if(item ==(item.toString().split("").reverse().join("")))   {
            result.push(item);
        }
    }
    return  result;
}
console.log(palindromes([121,"mam",456,"shiva",343]));

//e) Return all the palindromes in an array IIFE
(function(array)   {
    let result = [];
    for(let item of array)  {
        if(item ==(item.toString().split("").reverse().join("")))   {
            result.push(item);
        }
    }
    console.log(result);
})([121,"mam",456,"shiva",343]);

// f) Return median of two sorted array of same size Anonymous function
let median = function(arr1,arr2)    {
    let len1 = arr1.length;
    if(len1%2!=0)   {
        let index = Math.floor(len1/2);
        let output = {"median of arr1" :arr1[index],"median of arr2":arr2[index]};
        return output;
    }else{
        let index1 = Math.floor(len1/2);
        let index2 = index1 -1;
        let output = {"median of arr1" :`${arr1[index2]} & ${arr1[index1]}`,"median of arr2": `${arr2[index2]} & ${arr2[index1]}`};
        return output;

    }
}
console.log(median([23,34,45,48,55],[13,24,26,36,42]))
console.log(median([23,34,45,48,55,68],[13,24,26,36,42,59]))

// f) Return median of two sorted array of same size IIFE

console.log((function(arr1,arr2)    {
    let len1 = arr1.length;
    if(len1%2!=0)   {
        let index = Math.floor(len1/2);
        let output = {"median of arr1" :arr1[index],"median of arr2":arr2[index]};
        return output;
    }else{
        let index1 = Math.floor(len1/2);
        let index2 = index1 -1;
        let output = {"median of arr1" :`${arr1[index2]} & ${arr1[index1]}`,"median of arr2": `${arr2[index2]} & ${arr2[index1]}`};
        return output;
    }})([23,34,45,48,55,68],[13,24,26,36,42,59]));

//console.log(median([23,34,45,48,55,68],[13,24,26,36,42,59]))


//g) Remove duplicates from an array Anonymous function
let removeDuplicated = function(array)  {
    let unique = [];
    for(let item of array)  {
        if(unique.includes(item))   {
            continue;
        }else{
            unique.push(item);
        }
    }
    return unique;
}
console.log(removeDuplicated([34,56,43,34,56,43,88]));

//g) Remove duplicates from an array IIFE
(function(array)  {
    let unique = [];
    for(let item of array)  {
        if(unique.includes(item))   {
            continue;
        }else{
            unique.push(item);
        }
    }
    console.log(unique);
})([34,56,43,34,56,43,88]);

//h) Rotate a array k times Anonymous function
let rotateArray = function(array,k) {
    let output = [];
    let length = array.length;
    for(let i=0;i<length;i++)   {
        if(i<k) {
            output.push(array[length+i-k])  ;
        }else{
            output.push(array[i-k]);
        }
    }
    return output;
}
console.log(rotateArray([3,6,8,9,12,4,45],4));

//h) Rotate a array k times IIFE
(function(array,k) {
    let output = [];
    let length = array.length;
    for(let i=0;i<length;i++)   {
        if(i<k) {
            output.push(array[length+i-k])  ;
        }else{
            output.push(array[i-k]);
        }
    }
    console.log(output);
})([3,6,8,9,12,4,45],4);