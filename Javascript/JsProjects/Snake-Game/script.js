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
let timer = `00:00`;
timerElement.innerText = timer;
let currentScore = 0;
let highScore = localStorage.getItem("highScore") || 0;
document.querySelector("#high-score").innerText = highScore;

let width = 50;
let height = 50;
let rows = Math.floor(gameBoard.clientHeight / height);
let cols = Math.floor(gameBoard.clientWidth / width);
let intervalId = null;
let timerIntervalId = null;
let food = { row: Math.floor(Math.random() * rows), col: Math.floor(Math.random() * cols) };

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

    if(food.row === head.row && food.col === head.col){
        currentScore += 10;
        score.innerText = currentScore;
        if(currentScore > highScore){
            highScore = currentScore;
            document.querySelector("#high-score").innerText = highScore;
            localStorage.setItem("highScore", highScore);
        }
        blocks[`${food.row},${food.col}`].classList.remove("food");
        food = { row: Math.floor(Math.random() * rows), col: Math.floor(Math.random() * cols) };
        snake.push({...snake[snake.length -1]});
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
        snake.forEach(segment => {
            blocks[`${segment.row},${segment.col}`].classList.remove("snake");
        });
        snake.unshift(head);
        snake.pop();
    }

    snake.forEach(segment => {
        blocks[`${segment.row},${segment.col}`].classList.add("snake");
    });
}

startButton.addEventListener("click", () => {
    modal.style.display = "none";
    intervalId = setInterval(() => {renderSnake()}, 300)
    timerIntervalId = setInterval(() => {
        let [min, sec] = timerElement.innerText.split(":").map(Number);
        if(sec > 59){
            min += 1;
            sec = 0;
        } else {
            sec += 1;
        }
        timerElement.innerText = `${min}:${sec.toString().padStart(2, '0')}`;
    }, 1000)
})

restartButton.addEventListener("click", restartGame)

function restartGame() {
    blocks[`${food.row},${food.col}`].classList.remove("food");
    snake.forEach(segment => {
         blocks[`${segment.row},${segment.col}`].classList.remove("snake");
    })
    currentScore = 0;
    score.innerText = currentScore;
    timerElement.innerText = `00:00`;
    modal.style.display = "none";
    direction = "RIGHT"
    snake = [{ row: 2, col: 2 }, { row: 2, col: 3 }, { row: 2, col: 4 }];
    food = { row: Math.floor(Math.random() * rows), col: Math.floor(Math.random() * cols) };
    intervalId = setInterval(() => {renderSnake()}, 300)
    timerIntervalId = setInterval(() => {
        let [min, sec] = timerElement.innerText.split(":").map(Number);
        if(sec > 59){
            min += 1;
            sec = 0;
        } else {
            sec += 1;
        }
        timerElement.innerText = `${min}:${sec.toString().padStart(2, '0')}`;
    }, 1000)
}

addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        direction = "UP";
    } else if (event.key === "ArrowDown") {
        direction = "DOWN";
    } else if (event.key === "ArrowLeft") {
        direction = "LEFT";
    } else if (event.key === "ArrowRight") {
        direction = "RIGHT";
    }
});