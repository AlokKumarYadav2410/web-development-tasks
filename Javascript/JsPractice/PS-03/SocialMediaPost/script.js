let name = document.querySelector('.info h1');
let addFrndBtn = document.querySelector('#add-Btn');
let removeFrndBtn = document.querySelector('#remove-Btn');
let p = document.querySelector('.info p');

let img = document.querySelector('img');
let likeIcon = document.querySelector('#like');

addFrndBtn.addEventListener('click', () => {
    p.innerHTML = `You are now friends with <strong>${name.textContent}</strong>.`;
    addFrndBtn.style.display = 'none';
    removeFrndBtn.style.display = 'inline-block';
});

removeFrndBtn.addEventListener('click', () => {
    p.innerHTML = `You have removed <strong>${name.textContent}</strong> from your friends list.`;
    removeFrndBtn.style.display = 'none';
    addFrndBtn.style.display = 'inline-block';
});

img.addEventListener('dblclick', () => {
    let diff = Math.floor(Math.random() * 100);
    diff = diff + '%';
    likeIcon.style.opacity = 1;
    likeIcon.style.transform = `translate(-50%, -50%) scale(1) rotate(0deg)`;
    setTimeout(() => {
        likeIcon.style.transform = `translate(-${diff}, -200%) scale(1) rotate(45deg)`;
    }, 800);
    setTimeout(function () {
        likeIcon.style.opacity = 0
    }, 1800)
    setTimeout(() => {
        likeIcon.style.transform = 'translate(-50%, -50%) scale(0) rotate(-60deg)';
    }, 2000);
})