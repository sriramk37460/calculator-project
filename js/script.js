const show = document.querySelector(".display-input");  
const outputDisplay = document.querySelector(".result");
const buttons = document.querySelectorAll("button");

let output = "";

const calculate = (btnValue) => {
    show.focus();

    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output.replace("%", "/100"));
            outputDisplay.innerHTML = output;
        } catch (error) {
            output = "Error";
            outputDisplay.innerHTML = output; 
        }
        show.value = output; o
    }
    else if (btnValue === "AC") {
        output = "";
        outputDisplay.innerHTML = ""; 
        show.value = "";
    }
    else if (btnValue === "DEL") {
        output = output.slice(0, -1);
        outputDisplay.innerHTML = ""; 
        show.value = output;
    }
    else {
        if (output === "" && ["%", "*", "/", "-", "+", "="].includes(btnValue)) return;
        if (["%", "*", "/", "-", "+"].includes(btnValue) && ["%", "*", "/", "-", "+"].includes(output.slice(-1))) return;
        
        if (btnValue === "." && output.split(/[\+\-\*\/\%]/).pop().includes(".")) return;

        output += btnValue; 
    }

    show.value = output;  
    
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
