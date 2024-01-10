const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
});
convertBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Add this line to prevent the form from submitting
    convertToCelsius();
        convertBtn.innerHTML = "<span><i class='fa-solid fa-spinner fa-spin'></i>converting..</span>";
    setTimeout(() => {
        convertBtn.innerHTML = "<span>convert</span>";
    }, 1000);
});
function convertToCelsius() {
    let inputValue = degree.value;
    setTimeout(() => {
        if (tempType.value === "fahrenheit") {
            const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
            celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)}&deg;C`; // Fix: toFixed, not tofixed
        } else if (tempType.value === "kelvin") {
            const kelvinToCelsius = inputValue -273.15;
            celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)}&deg;C`; // Fix: toFixed, not tofixed
        }
    }, 1200);
}
