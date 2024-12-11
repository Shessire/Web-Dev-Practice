import { useState } from "react";
import { getRolls, sum } from "./utils";
import Dice from "./Dice";

function LuckyN ({ numDice = 2, goal = 7}) {
    const [dice, setDice] = useState(getRolls(numDice))

    const isWinner = sum(dice) === goal;

    const roll = () => setDice(getRolls(numDice));

    return (
        <div className="LuckyN">
            <h1>Lucky{goal} {isWinner && "You Win!"}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Re-roll dice</button>
        </div>
    )
}

export default LuckyN;