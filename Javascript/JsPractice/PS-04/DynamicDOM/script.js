const users = [
  {
    username: "Alina",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    profession: "Software Engineer",
    description: "Alex is a full-stack developer who loves building scalable systems and contributing to open-source projects.",
    tags: ["JavaScript", "Full-Stack", "Open Source", "Mentor"]
  },
  {
    username: "Sophia",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500",
    profession: "Product Manager",
    description: "Sophia drives product strategy, collaborates with cross-functional teams, and focuses on user-centric solutions.",
    tags: ["Product", "Agile", "Leadership", "User Research"]
  },
  {
    username: "Reet",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    profession: "Graphic Designer",
    description: "Emma specializes in branding and visual identity, creating minimal yet expressive design languages.",
    tags: ["Branding", "Illustration", "Typography", "Figma"]
  },
  {
    username: "Darius",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500",
    profession: "UX Designer",
    description: "Darius crafts intuitive digital experiences with a strong focus on accessibility and user behavior.",
    tags: ["UX/UI", "Accessibility", "Prototyping", "User Testing"]
  },
  {
    username: "BenjaminK",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500",
    profession: "Research Scientist",
    description: "Benjamin works in cognitive science, exploring how humans process information and make decisions.",
    tags: ["Neuroscience", "Data Analysis", "Research", "Cognition"]
  },
];


let sum = "";

users.forEach((elem) => {
    sum += `  <div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.username}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
            <div class="tags">
                ${elem.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>`
})

document.querySelector("main").innerHTML = sum;