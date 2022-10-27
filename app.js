const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const rankine = document.getElementById("rankine");
const inputs = document.getElementsByClassName("input");

for( let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);

        switch(e.target.name) {
            case "Celsius":
                fahrenheit.value = (value * 1.8) + 32;
                kelvin.value = value + 273.15;
                rankine.value = (value + 273.15) * 1.8;
                break;
            case "Fahrenheit":
                celsius.value = (value - 32) / 1.8;
                kelvin.value = ((value - 32) / 1.8) +273.15;
                rankine.value = value + 459.67;
                break;
            case "Kelvin":
                celsius.value = value - 273.15;
                fahrenheit.value = ((value - 32) / 1.8) + 273.15;
                rankine.value = value * 1.8;
                break;
            case "Rankine":
                celsius.value = (value - 491.67) * 1.8;
                fahrenheit.value = value - 459.67;
                kelvin.value = value * 1.8;
                break;
        }
    });
}
