const valueds = document.querySelectorAll("[data-value]");
Array.from(valueds).forEach((value, index, arr) => {
    // console.log(value);
    // value.addEventListener("keyup", (ev) => {
    //     if (ev.key == "Enter") {
    //         arr[index + 1]?.focus();
    //     }
    // })
    value.addEventListener("change", (ev) => {
        arr[index + 1]?.focus();
    });
});

document.body.addEventListener("keydown", (ev) => {

    if (ev.key == "Enter") {
        let bckColor = Math.random().toString(16).substr(2, 6);
        console.log(bckColor);
        document.body.style.background = `#${bckColor}`;

        const input = document.querySelector("input");
        input.focus();
    }
    // it didn't work well
    // Array.from(valueds).forEach((value, index, arr) => {
    //     if (ev.key == "Enter") {
    //         value.addEventListener("input", () => {
    //             arr[index + 1]?.focus();
    //         });
    //     }
    // });
});