document.getElementById('toggleAll').addEventListener('click', () => {
  document.querySelectorAll('.light').forEach(light => {
    light.classList.toggle('lit');
  });
  document.querySelectorAll('.flame').forEach(flame => {
    flame.classList.toggle('lit');
  });
});

function daysUntilDiwali() {
  const today = new Date();
  const diwali = new Date("October 20, 2025");
  const diffTime = diwali - today;
  const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("daysLeft").textContent = days > 0 ? `🎆 Diwali in ${days}  days 🎆` : days < 0 ? "Diwali is over" : "Today is Diwali!";
}
daysUntilDiwali();

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));

const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  document.querySelector('.sparkle-container').appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 1000);
});

const hoverTargets = document.querySelectorAll('button, .hover-card, .light, a, .flame');

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hovering');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hovering');
  });
});

const headerParagraph = document.querySelector('.site-header p');

function updateGreeting() {
  const now = new Date();
  const hour = now.getHours();

  let greeting = '';

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning! Start your Diwali with fresh code✨";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good Evening! Light up your screen and spirits🪔";
  } else {
    greeting = "🌟Welcome! Keep the Diwali spirit glowing🌟";
  }

  headerParagraph.textContent = greeting;
}

updateGreeting();

