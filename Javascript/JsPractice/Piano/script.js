let audioArray = [
    'assets/c.mp3',
    'assets/d.mp3',
    'assets/e.mp3',
    'assets/f.mp3',
    'assets/g.mp3',
    'assets/a.mp3',
    'assets/b.mp3',
];

let keys = document.querySelectorAll('.key');
let audio = new Audio();

keys.forEach((key, index) => {
    key.addEventListener('click', () => {
        playSound(index, key);
    });
});

document.addEventListener('keydown', (event) => {
    let pressedKey = event.key.toLowerCase();

    keys.forEach((key, index) => {
        console.log(key.dataset)
        if (key.dataset.key === pressedKey) {
            playSound(index, key);
        }
    });
});

function playSound(index, keyElement) {
    audio.src = audioArray[index];
    audio.play();

    keyElement.classList.add("active");

    setTimeout(() => {
        keyElement.classList.remove("active");
    }, 150);
}
