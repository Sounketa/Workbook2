function celcToFahr( n ) {
    return ((n * 9.0 / 5.0) + 32.0);
}

const n = 20;
 
console.log(celcToFahr( n ));

//define your inputs (variables)
var celsiusTemperature = 20;
var fahrenheitTemperature;
//do the calculation
fahrenheitTemperature = (celsiusTemperature + 32) * 9/5;
//print the results
console.log(
    "The celsius temperautre of " + celsiusTemperature + " is " + fahrenheitTemperature + " fahrenheit"
);