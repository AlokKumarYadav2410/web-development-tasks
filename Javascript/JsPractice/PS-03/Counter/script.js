let h1 = document.querySelector("h1");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");

let count = 0;
incrementBtn.addEventListener("click", function () {
    count++;
    h1.textContent = count;
});

decrementBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        h1.textContent = count;
    }
});