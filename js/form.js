console.log("have fun");

{

const euroElement = document.querySelector(".js-euro");
const zlotyElement = document.querySelector(".js-zloty");

convertCurrencyEuro = zlotyElement.addEventListener("input", () => {
    euroElement.value = (+zlotyElement.value * 4.7).toFixed(2);
})
convertCurrencyZloty = euroElement.addEventListener("input", () => {
    zlotyElement.value = (+euroElement.value / 4.7).toFixed(2);
})


}