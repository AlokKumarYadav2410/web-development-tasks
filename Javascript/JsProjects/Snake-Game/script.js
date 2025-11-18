let gameBoard = document.querySelector(".game-board");
let modal = document.querySelector(".modal");
let startModal = document.querySelector(".modal .start-game");
let restartModal = document.querySelector(".modal .restart-game");
let startButton = document.querySelector(".btn-start");
let restartButton = document.querySelector(".btn-restart");
let score = document.querySelector("#score");
let timerElement = document.querySelector("#time");
let finalScoreElement = document.querySelector("#final-score");
let finalHighScore = document.querySelector("#final-high-score");

// Mobile Controls
document.querySelector(".up").onclick = () => { if (direction !== "DOWN") direction = "UP"; }
document.querySelector(".down").onclick = () => { if (direction !== "UP") direction = "DOWN"; }
document.querySelector(".left").onclick = () => { if (direction !== "RIGHT") direction = "LEFT"; }
document.querySelector(".right").onclick = () => { if (direction !== "LEFT") direction = "RIGHT"; }

let timer = `00:00`;
timerElement.innerText = timer;
let currentScore = 0;
let highScore = localStorage.getItem("highScore") || 0;
document.querySelector("#high-score").innerText = highScore;

let speed = 300;

let width = 30;
let height = 30;
let rows = Math.floor(gameBoard.clientHeight / height);
let cols = Math.floor(gameBoard.clientWidth / width);
let intervalId = null;
let timerIntervalId = null;
let food = randomFood();

const blocks = [];
let snake = [{ row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }];

let direction = "RIGHT";

for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
        let block = document.createElement("div");
        block.classList.add("block");
        // block.innerText = `${r},${c}`;
        blocks[`${r},${c}`] = block;
        gameBoard.appendChild(block);
    }
}

function renderSnake() {

    let head = null;
    blocks[`${food.row},${food.col}`].classList.add("food");

    if (direction === "UP") {
        head = { row: snake[0].row - 1, col: snake[0].col };
    }
    else if (direction === "DOWN") {
        head = { row: snake[0].row + 1, col: snake[0].col };
    }
    else if (direction === "LEFT") {
        head = { row: snake[0].row, col: snake[0].col - 1 };
    }
    else if (direction === "RIGHT") {
        head = { row: snake[0].row, col: snake[0].col + 1 }
    }

    if (food.row === head.row && food.col === head.col) {
        currentScore += 10;
        score.innerText = currentScore;

        let newSpeed = 300;
        if (currentScore > 300) {
            newSpeed = 100;
        } else if (currentScore > 200) {
            newSpeed = 150;
        } else if (currentScore > 100) {
            newSpeed = 200;
        } else if (currentScore > 50) {
            newSpeed = 250;
        }

        if (newSpeed !== speed) {
            speed = newSpeed;
            clearInterval(intervalId);
            intervalId = setInterval(renderSnake, speed);
        }

        if (currentScore > highScore) {
            highScore = currentScore;
            document.querySelector("#high-score").innerText = highScore;
            localStorage.setItem("highScore", highScore);
        }
        blocks[`${food.row},${food.col}`].classList.remove("food");
        food = randomFood();
        snake.push({ ...snake[snake.length - 1] });
    }

    if (head.row < 0 || head.row >= rows || head.col < 0 || head.col >= cols) {
        modal.style.display = "flex";
        startModal.style.display = "none";
        restartModal.style.display = "flex";
        timerElement.innerText = `00:00`;
        clearInterval(intervalId);
        clearInterval(timerIntervalId);
        finalScoreElement.innerText = currentScore;
        finalHighScore.innerText = highScore;
        return;
    }
    else {
        clearSnake();
        snake.unshift(head);
        snake.pop();
    }

    drawSnake();
}

startButton.addEventListener("click", () => {
    modal.style.display = "none";
    startGameLoop();
});

restartButton.addEventListener("click", restartGame)

function restartGame() {
    blocks[`${food.row},${food.col}`].classList.remove("food");
    clearSnake();
    currentScore = 0;
    score.innerText = currentScore;
    timerElement.innerText = `00:00`;
    modal.style.display = "none";
    direction = "RIGHT"
    snake = [{ row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }];
    food = randomFood();
    startGameLoop();
}

function clearSnake() {
    snake.forEach(s => blocks[`${s.row},${s.col}`].classList.remove("snake"));
}

function drawSnake() {
    snake.forEach(s => blocks[`${s.row},${s.col}`].classList.add("snake"));
}

function randomFood() {
    return {
        row: Math.floor(Math.random() * rows),
        col: Math.floor(Math.random() * cols)
    };
}


function startTimer() {
    timerElement.innerText = "00:00";
    timerIntervalId = setInterval(() => {
        let [m, s] = timerElement.innerText.split(":").map(Number);
        s++;
        if (s === 60) { m++; s = 0; }
        timerElement.innerText = `${m}:${s.toString().padStart(2, "0")}`;
    }, 1000);
}

function startGameLoop() {
    intervalId = setInterval(renderSnake, 300);
    startTimer();
}

addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
});