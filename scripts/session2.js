
// alert();
// prompt();
// console.log();
// document.write();




//get thhe number from a prompt
//display on console the multiplication by 5






// below is with a prompt

// function mult(num2){
//     let num=prompt("Enter a number");
//     console.log(num*num2);
// }

// mult(3)
// mult(2)
// mult(4)


//withhout a prompt

// function mult(num,num2){
//     console.log(num*num2);
// }
// mult(10,3)
// mult(8,2)
// mult(5,4)



// function taxCalculation(){
//     var product=prompt("Enter the name:"); //laptop
//     var price=prompt("Enter the products price:"); //100
//     var qty=prompt("Enter the quantity:"); //2
//     const taxes = 1.08

//     var subtotal=price*qty; //200
//     var total= subtotal*taxes

//     console.log(product);
//     console.log(subtotal);
//     console.log(total); //216
// }








// the user will input the numbers
// the function add them
// display result on the console
// rule 1: trigger the event using a button
// create a flow diagram


// function addnumbers(){
//     var num1= Number(prompt("Enter first number"));
//     var num2= Number(prompt("Enter second number"));

//     var total=num1+num2;

//     console.log("The result is " + total);
// }




// / Enter student information (name, grade101, grade102) and calculate and display the GPA


function getGPA(){
    // get the values
    var name=prompt("Enter the Name:");
    var grade101 = Number(prompt("Enter the 101 grade:"));
    var grade102 =  Number(prompt("Enter the 102 grade:"));

    var gpa =(grade101+grade102) /2;

    // console.log("Name: " + name);
    // console.log("GPA: " +gpa);

        // document.write("Name: " + name);
        // document.write("GPA: " +gpa);
        document.getElementById("studentList").innerHTML+=` <li> Name: ${name} - GPA: ${gpa} </li>`;

}
