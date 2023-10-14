document.addEventListener("DOMContentLoaded", function() {
    const value = document.querySelector(".value");
    const plusButton = document.querySelector(".plus");
    const minusButton = document.querySelector(".minus");
    const resetButton = document.querySelector(".reset");
    
    const updateValue = () => {
        value.innerHTML = count;
    }
    
    let count = 0;
    let intervalId = 0;
    
    plusButton.addEventListener("mousedown", () => {
        intervalId = setInterval(() => {
            count += 1;
            updateValue();
        }, 100);
    });

    plusButton.addEventListener("click", () => {
            count += 1;
            updateValue();
    });

    minusButton.addEventListener("mousedown", () => {
        intervalId = setInterval(() => {
            count -= 1;
            updateValue();
        }, 100);
    });
    minusButton.addEventListener("click", () => {
            count -= 1;
            updateValue();
    });

    resetButton.addEventListener("click", () => {
        count = 0;
        updateValue();
    });
    
    document.addEventListener("mouseup", () => clearInterval(intervalId));
});
