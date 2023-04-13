const convertPoundsToKiloGrams = (pounds) = {
    var kilograms = pounds * 0.543592;
}

const convertInchToCentimeters = (Inch) => {
    var centimeters = Inch * 2.54;
    return centimeters;
}
const convertFahrenheitToCelsius = (Fahrenheit) => {
    var celsius = (Fahrenheit * 9) / 5 + 32;
    return celsius;
}

const convertFeetToMeters = (Feet) => {
    var meters = Feet * 3.66;
    return meters;
}

console.log(convertPoundsToKilograms(10));
console.log(convertFeetToMeters(43));
console.log(convertInchToCentimeters(24));
console.log(convertFahrenheitToCelsius(72));
