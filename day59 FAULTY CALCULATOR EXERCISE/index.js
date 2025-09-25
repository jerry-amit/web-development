/* CREate a Faulty calculator using javascript

this faulty caclulator does following:

1. it takes two numbers as input from the user
2. It performs wrong operations as follows:



+ ------> -
* ------> +
- ------> /
/ ------> **

It performs wrong operation 10% of the times
*/

const sum =(a,b) =>{
    return a+b;
    
}

const sub =(a,b) =>{
    return a-b;
    
}

const mul =(a,b) =>{
    return a*b;
    
}

const div =(a,b) =>{
    return a/b;
    
}


const expo =(a,b) =>{
    return a**b;
    
}

// let a = readint("Enter the value of a ");
// let b = readint("Enter the value of b ");

let a = 8;
let b= 10;


if(Math.random()<0.1){
     console.log("Addition of two number is")
     sub(a,b);

     console.log("subtraction of two number is")
     div(a,b);

     console.log("multiplication of two number is")
     sum(a,b);

     console.log("Division of two number is")
     expo(a,b);

     console.log("Exponential of two number is")
     mul(a,b);

}

else{
     console.log("Addition of two number is")
     sum(a,b);

     console.log("subtraction of two number is")
     div(a,b);

     console.log("multiplication of two number is")
     sum(a,b);

     console.log("Division of two number is")
     expo(a,b);

     console.log("Exponential of two number is")
     mul(a,b);
}






result = sum(2,2)
console.log(result)

result = sub(2,2)
console.log(result)

result = mul(2,2)
console.log(result)

result = div(2,2)
console.log(result)

result = expo(2,2)
console.log(result)
