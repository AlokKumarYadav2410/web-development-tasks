let first = document.querySelector('.first-follower');
let second = document.querySelector('.second-follower');
let third = document.querySelector('.third-follower');
let fourth = document.querySelector('.fourth-follower');

let h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', () => {
    first.style.backgroundColor = '#ff4757';
    first.style.width = '100px';
    first.style.height = '100px';

    second.style.backgroundColor = 'transparent';
    third.style.backgroundColor = 'transparent';
    fourth.style.backgroundColor = 'transparent';
})

h1.addEventListener('mouseleave', () => {
    first.style.backgroundColor = 'transparent';
    first.style.width = '40px';
    first.style.height = '40px';
    second.style.backgroundColor = '#ff6b81';
    third.style.backgroundColor = '#ff7f50';
    fourth.style.backgroundColor = '#ffa502';

})

let x = 0, y = 0;

addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
});


let sx = 0, sy = 0;
let tx = 0, ty = 0;
let fx = 0, fy = 0;

function follow() {
    first.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

    // smooth follow (lerp)
    sx += (x - sx) * 0.1;
    sy += (y - sy) * 0.1;

    tx += (sx - tx) * 0.1;
    ty += (sy - ty) * 0.1;
    fx += (tx - fx) * 0.1;
    fy += (ty - fy) * 0.1;

    second.style.transform = `
    translate(${sx}px, ${sy + 50}px)
    translate(-50%, -50%)
  `;

    third.style.transform = `
    translate(${tx}px, ${ty + 75}px)
    translate(-50%, -50%)
  `;

    fourth.style.transform = `
    translate(${fx}px, ${fy + 92}px)
    translate(-50%, -50%)
  `;

    requestAnimationFrame(follow);
}
follow();
