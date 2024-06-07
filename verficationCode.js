document.title = "V-Code";
const inputs = document.querySelectorAll("input");
inputs.forEach((input, value, array) => {
    input.addEventListener("input", (ev) => {
        ev.target.value = ev.target.value.toUpperCase();
        array[value + 1]?.focus();
    })
})

console.log("uxlmnt");

document.addEventListener("paste", (ev) => {
    ev.preventDefault();
    let myCopy = ev.clipboardData.getData("text");
    myCopy = myCopy.toUpperCase();
    inputs.forEach((input, value) => {
        if (myCopy.length != inputs.length) return;
        input.value = myCopy[value];
    })
    console.log(myCopy);
});