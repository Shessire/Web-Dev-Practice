import { useState } from "react";

function ScoreKeeper2 ({ numPlayer=3, target=5 }) {
    const [scores, setScores] = useState(new Array(numPlayer).fill(0));
    
    const incrementScore = (idx) => {
        setScores((prevScores) => {
            return prevScores.map((score, i) => {
                if (i === idx){
                    return score + 1
                } else {
                    return score;
                }
            })
        })
    }

    const reset = () => {
        setScores(new Array(numPlayer).fill(0))
    }

    return (
        <div>
            <h1>Score Keeper</h1>
            <ul>
                {scores.map((score, idx) => {
                    return (
                    <li key={idx}>
                        Player{idx + 1}: {score}
                        <button onClick={() => incrementScore(idx)}>+1</button>
                        {score >= target && "Winner"}
                    </li>
                )
                })}
            </ul>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ScoreKeeper2;