

function getTemperature(){

    
    var Temperature = Number(prompt("Enter the temperature in celsius"));

    var convert =(Temperature * 9/5) + 32 ;


        document.getElementById("tempList").innerHTML+=` <li> The conversion of Celsius ${Temperature}° to Fahrenheit is ${convert}°</li>`;
}