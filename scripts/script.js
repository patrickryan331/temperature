console.log("Script")

// var userName; // declaration of varible
// userName = prompt ("Enter your name"); //assign value   
// console.log(userName)

// userName=15;



//-------exercise 1

//user enters a number
var num=Number(prompt("Enter a number"))
//present a menu: x3 - x5
var option = prompt("Select 1) num x3 or select 2) num x5")
//do the calculation
if (option==1){
    var result=num*3
    console.log(num + " x 3 ")
}
if(option==2){
    result = num*5
    console.log(num + " x 5 ")
}
//present the result on the console

console.log("the result is; " + result);
