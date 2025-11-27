let para = document.querySelector("p");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const text = para.innerText;

para.addEventListener("mouseenter", () => {
    const str = text.split("").map((characters, index) => {
        return `<span style="transition-delay: ${index * 30}ms">${characters}</span>`;
    })
    para.innerHTML = str.join("");

    let iteration = 0;
    const interval = setInterval(() => {
        const spans = para.querySelectorAll("span");
        spans.forEach((span, index) => {
            if (index < iteration) {
                span.innerText = text[index];
            } else {
                span.innerText = characters[Math.floor(Math.random() * characters.length)];
            }
        });

        if (iteration >= text.length) {
            clearInterval(interval);
        }
        iteration += 1 / 3;
    }, 40);
});

// para.addEventListener("mouseenter", () => {
//     setInterval(() => {
//         const str = text.split("").map((char, index) => {
//             return characters.split("")[Math.floor(Math.random() * 53)];
//         }).join("");
//         console.log(str)
//         para.innerText = str;
//     }, 30)
//     // 
// });

addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");
});

const video = document.querySelector("video");
const box = document.querySelector(".box");

video.addEventListener("mousemove", (e) => {
    const rect = video.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    document.body.style.setProperty("--x", e.clientX + "px");
    document.body.style.setProperty("--y", e.clientY + "px");

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const dist = Math.hypot(x - centerX, y - centerY);

    const maxRadius = 200;
    const minRadius = 40;
    
    const t = dist / centerX;
    const radius = maxRadius - t * (maxRadius - minRadius);

    box.style.background = `
        radial-gradient(
            ${radius}px at var(--x) var(--y),
           rgba(255,255,255,0) 0%,
        rgba(0,0,0,0.75) 70%,
        rgba(0,0,0,0.95) 100%
        )
    `;
});


