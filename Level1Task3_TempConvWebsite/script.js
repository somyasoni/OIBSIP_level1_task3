function convertTemperature() {
    var degrees = document.getElementById("degrees").value;
    var type = document.getElementById("type").value;
    var result = document.getElementById("result");

    if (type == "fahrenheit") {
        result.innerHTML = ((degrees * 9 / 5) + 32) + " °F";
    } else {
        result.innerHTML = ((degrees - 32) * 5 / 9) + " °C";
    }
}
