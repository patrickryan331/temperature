// for(let i=1;i<=10;i++){
//     console.log(i);
// }



//challenge 
//display the numbers 10-100


// ----this is all numbers

// for(let i=10;i<=100;i++){
//     console.log(i);
// }


// ------ this is by increments of 10

// for(let i=10;i<=100;i+=10){
//     console.log(i);
// }



//--------------------------------------------//

// Exercise: Miltiplication table for X

// Use a for loop to generate and display the multiplication table for the number 5
// The table should include values of 1 to 10

// now add a parameter to make the function able to process the miltiplication table for any number





// function multiplicationTable(x){
//     document.write(`<h2> Multiplication table for ${x}</h2>`);
//     for(let i=1;i<=10;i++){
//         document.write(`<li> ${i} x ${5} = ${i*x} </li>`);
//     }
// }








// function multiplicationTable(){
//     let x=prompt('Enter a number');
//     let start=prompt("start point")
//     let end=prompt("end point")



//     document.write(`<h2> Multiplication table for ${x}</h2>`);
//     for(let i=start;i<=end;i++){
//         document.write(`<li> ${i} x ${x} = ${i*x} </li>`);
//     }
// }












//Write a program that prints the numbers from 1 to 50. 

//But for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". 

//For numbers that are multiples of both 3 and 5, print "FizzBuzz".





for(let i=1;i<=50;i++){

    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i)
    }
    }