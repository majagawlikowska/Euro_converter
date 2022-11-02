console.log("have fun");

let euroElement = document.querySelector(".js-euro");
let zlotyElement = document.querySelector(".js-zloty");

let euro = (euroElement.value);
let zloty = (zlotyElement.value);


zlotyElement.value === euroElement.value / 4.7;
euroElement.value === zlotyElement.value * 4.7;

zlotyElement.addEventListener("input", () => {
    euroElement.value = (+zlotyElement.value * 4.7).toFixed(2);
})

euroElement.addEventListener("input", () => {
    zlotyElement.value = (+euroElement.value / 4.7).toFixed(2);
})
