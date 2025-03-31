const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button"); //selecciona todos los botones y devuelve una lista

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
            return;
        }

        if (btn.id === "ac"){
            display.value = "";
            return
        }

        if (btn.id === "de") {
            display.value = display.value.slice(0,-1);
            return
        } 

        display.value += btn.id;
    });
});
