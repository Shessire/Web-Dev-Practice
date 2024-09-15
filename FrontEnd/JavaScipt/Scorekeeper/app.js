const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");
const p1Btn = document.querySelector("#p1Btn");
const p2Btn = document.querySelector("#p2Btn");
const reset = document.querySelector("#resetBtn");
const playto = document.querySelector("#playto")

let score1 = 0
let score2 = 0
let winScore = 3
let isGameOver = false;

p1Btn.addEventListener("click", () => {
    if (!isGameOver) {
        score1++;
        if(score1 === winScore) {
            isGameOver = true;
            p1Score.classList.add("has-text-success");
            p2Score.classList.add("has-text-danger");
            
        }
        p1Score.textContent = score1;
    }   
})
p2Btn.addEventListener("click", () => {
    if (!isGameOver) {
        score2++;
        if(score2 === winScore) {
            isGameOver = true;
            p1Score.classList.add("has-text-danger");
            p2Score.classList.add("has-text-success");
        }
        p2Score.textContent = score2;
    }
})

const resetGame = () => {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Score.classList.remove("has-text-success", "has-text-danger");
    p2Score.classList.remove("has-text-success", "has-text-danger");
}

reset.addEventListener('click', resetGame)

playto.addEventListener('change', function() {
    winScore = parseInt(this.value);
    resetGame();
})