let inner = document.querySelector('.inner');
let h2 = document.querySelector('h2');
let button = document.querySelector('button');
let p = document.querySelector('p');
let span = button.querySelector('span');
let card = document.querySelector('.card');
let width = 0;

let loader = document.getElementById("loader");
button.style.animation = "pulse 2s infinite";

button.addEventListener('click', () => {

    let num = 50 + Math.floor(Math.random() * 50);
    button.style.animation = "none";
    p.innerHTML = `Your file will be downloaded in <strong>${num / 10} seconds</strong>`;
    let inter = setInterval(() => {
        width++;
        inner.style.width = width + '%';
        h2.textContent = width + '%';
        button.style.opacity = 0.5;
        button.style.pointerEvents = 'none';
        span.textContent = "Downloading";
        loader.style.display = "inline-block";
        card.style.animation = "pulse 2s infinite";
    }, num);
    
    setTimeout(() => {
        clearInterval(inter);
        button.innerText = "Downloaded";
        p.innerHTML = `Your file has been <strong>downloaded</strong> successfully.`;
        loader.style.display = "none";
        card.style.animation = "none";
    }, num * 100);
    console.log("clicked")
})