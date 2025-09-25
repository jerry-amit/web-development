function Nice(name) {

    console.log("Hey " + name + " You Are Nice ")
    console.log("Hey " + name + " You Are good ")
    console.log("Hey  " + name + "You tshirt is  Nice ")
    console.log("Hey " + name + " You Are Nice too ")
}



function sum(a,b,c = 4) {
    // console.log(a + b)  
     console.log(a , b , c)  
    return a + b + c;
}


result1 = sum(13)
result2 = sum(32,8,5)
result3 = sum(3,81)
console.log("The Result is ",result1)
console.log("The Result is ",result2)
console.log("The Result is ",result3)


// arrow  Function

const func1 = (x)=>{
    console.log("I AM a Arrow Function",x)

}

func1(12);
func1(22);
func1(32);
func1(42);

const sum2 =(a,b)=> {
    let c = a+b;
    return c;
}

let y = sum2(1,3);
console.log("THE RESULT OF SUM2 IS :",y)