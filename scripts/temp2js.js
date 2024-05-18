

function convertTemperature(){

    var scale = (prompt("Enter F for Fahrenheit or C for Celsuis"));
    var temperature = Number(prompt("Enter the Temperature"));

    if (scale=="F"){
        
        document.getElementById("results").innerHTML=(temperature) + " Fahrenheit converted to Celsius is " + (temperature - 32) * 5/9;
    };
    
    if (scale=="C"){
        document.getElementById("results").innerHTML=(temperature) + " Celcius converted to Fahrenheit is " + (temperature * 9/5) + 32;
    };
    
    }


