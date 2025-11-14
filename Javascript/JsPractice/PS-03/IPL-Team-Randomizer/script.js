let teams = [
  {
    team: 'CSK',
    primary: 'rgb(255, 204, 0)',
    secondary: 'rgb(0, 51, 160)',
    fullName: 'Chennai Super Kings',
    trophies: 5,
    captian: 'Ruturaj Gaikwad'
  },
  {
    team: 'RCB',
    primary: 'rgb(206, 17, 38)',
    secondary: 'rgb(0, 0, 0)',
    fullName: 'Royal Challengers Bangalore',
    trophies: 1,
    captian: 'Rajat Patidar'
  },
  {
    team: 'MI',
    primary: 'rgb(0, 62, 126)',
    secondary: 'rgb(212, 175, 55)',
    fullName: 'Mumbai Indians',
    trophies: 5,
    captian: 'Hardik Pandya'
  },
  {
    team: 'KKR',
    primary: 'rgb(45, 0, 98)',
    secondary: 'rgb(212, 175, 55)',
    fullName: 'Kolkata Knight Riders',
    trophies: 3,
    captian: 'Ajinkya Rahane'
  },
  {
    team: 'SRH',
    primary: 'rgb(255, 102, 0)',
    secondary: 'rgb(0, 0, 0)',
    fullName: 'Sunrisers Hyderabad',
    trophies: 1,
    captian: 'Pat Cummins'
  },
  {
    team: 'DC',
    primary: 'rgb(0, 82, 155)',
    secondary: 'rgb(220, 20, 60)',
    fullName: 'Delhi Capitals',
    trophies: 0,
    captian: 'Axar Patel'
  },
  {
    team: 'PBKS',
    primary: 'rgb(200, 16, 46)',
    secondary: 'rgb(192, 192, 192)',
    fullName: 'Punjab Kings',
    trophies: 0,
    captian: 'Shreyas Iyer'
  },
  {
    team: 'RR',
    primary: 'rgb(255, 0, 128)',
    secondary: 'rgb(0, 48, 135)',
    fullName: 'Rajasthan Royals',
    trophies: 1,
    captian: 'Sanju Samson'
  },
  {
    team: 'GT',
    primary: 'rgb(0, 47, 108)',
    secondary: 'rgb(192, 192, 192)',
    fullName: 'Gujarat Titans',
    trophies: 1,
    captian: 'Shubman Gill'
  },
  {
    team: 'LSG',
    primary: 'rgb(0, 174, 239)',
    secondary: 'rgb(255, 153, 0)',
    fullName: 'Lucknow Super Giants',
    trophies: 0,
    captian: 'Rishabh Pant'
  }
];


let btn = document.querySelector('button');
let box = document.getElementById('box');
let h1 = document.querySelector('#teamName');
let main = document.querySelector('main');

let fullName = document.createElement('h1');
let captian = document.createElement('h3');
let trophies = document.createElement('h3');
let trophyIcons = document.createElement('span');

box.appendChild(fullName);
box.appendChild(h1);
box.appendChild(captian);
box.appendChild(trophies);
box.appendChild(trophyIcons);

function generateTrophies(count) {
  return count === 0 ? "No Trophies Yet 🥲" : "🏆 ".repeat(count);
}

btn.addEventListener('click', function () {
  let winner = teams[(Math.floor(Math.random() * teams.length))];

  fullName.textContent = winner.fullName;
  fullName.style.color = winner.primary;

  h1.textContent = `(${winner.team})`;
  h1.style.color = winner.primary;

  captian.textContent = "Captian: " + winner.captian;
  captian.style.color = 'white';

  trophies.textContent = `Trophies Won: ${winner.trophies}`;
  trophies.style.color = 'white';

  trophyIcons.textContent = generateTrophies(winner.trophies);

  box.style.backgroundColor = winner.secondary;
  main.style.background = `linear-gradient(135deg, ${winner.primary}, ${winner.secondary})`;

  box.style.animation = "none";
  setTimeout(() => box.style.animation = "pop 0.4s ease", 10);
})