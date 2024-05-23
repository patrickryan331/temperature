

function convertTemperatureRange(){

    let startValue =prompt("Enter the starting temperature");
    let endValue =prompt("Enter the ending temperature");
    let scale =prompt("Enter C for celsius or F for fahrenheit");

    for(let i= startValue; i<=endValue;i++){

        if (scale=="F"){
            let f=(i*9/5)+32;
            document.write(`<li> ${i} - Celsius = ${f.toFixed(1)} - Fahrenheit </li>`);

        }else if(scale=="C"){
            let c=(i-32)*5/9;
            document.write(`<li> ${i} - Fahrenheit = ${c.toFixed(1)} - Celsius</li>`);
        }
    }
}
