
function practice(){
    let number=99;
    if(number==99){
        console.log("The number is correct");
    }else{
        console.log("The number is incorrect");
    }



function practice(){
    let num1=98;
    let num2=99;
    if(num1>num2){
        console.log("The Number1 is greater than Number2");
    }else if(num1<num2){
        console.log("The Number2 is greater than Number1");
    }else{
        console.log("The values are the same");
    }


    }





// Challenge: Driving License

// 1. Prompt the user to enter their age.
// 2. Use an if-else statement to determine if the person can get a driving license.
// 3. If the age is 18 or older, print "Congratulations! You can get your driving license."
// 4. If the age is less than 18, print "Sorry, you are too young to get a driving license."


// function getDriverLicense(){
    let age = prompt("Enter your age")

    if (age>=18){
        console.log("Congratulations! You can get a drivers license.");
    }else{
            console.log("Sorry you are to young for a drivers license")
        }
    }







// Exercise: Guess the Number Game

// 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
// 2. Ask the user to guess the number. (prompt)
// 3. Use an if-else statement to check if the user's guess is correct.
// 4. If the guess is correct, print "Congratulations! You guessed the number."
// 5. If the guess is incorrect, print "Sorry, that's not correct. The number was [generated number]".


function guessNumber(){
    //generate a random number
    let randomNumber=Math.floor(Math.random()*10)+1;
    //vs
    let userGuess=prompt("Guess a number between 1 and 10");

//check if the guess is correct

    if(guessNumber==randomNumber){
        document.getElementById("results").innerHTML="Congratulations you are correct";
    }else{
        document.getElementById("results").innerHTML="Try Again! The correct answer was " + randomNumber;
    }

    console.log(randomNumber)

}





// database simulation
let userName="patrick.ryan@sdgku.edu";
let password="test1234";

// create a login function


function login(){

            //get thhe username and password from the user

    let unameInput = prompt("Enter your E-Mail:");
    let upassInput = prompt("Enter your password:");

            //compare the inputs with the database
    if(unameInput===userName && upassInput===password){
        console.log("welcome to the system");
    }else{
        console.log("Invalid credentials, Please Try Again");
    }

}