import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";

function LuckyN ({ title = "Dice Game", numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice))

    const isWinner = winCheck(dice);

    const roll = () => setDice(getRolls(numDice));

    return (
        <div className="LuckyN">
            <h1>{title} {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Re-roll dice</button>
        </div>
    )
}

export default LuckyN;