let para = document.querySelector('h1');
const text = para.textContent;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

let iteration = 0;

function getRandomText() {
    const randomText = text.split("").map((char, index) => {
        if (index < iteration) {
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * characters.length)];
    }).join("");

    para.textContent = randomText;
    iteration += 0.2;
}

setInterval(getRandomText, 40);

para.addEventListener('mouseenter', () => {
    iteration = 0;
    setInterval(getRandomText, 40);
});