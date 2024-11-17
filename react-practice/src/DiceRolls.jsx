import Die from "./Die";
import "./DiceRolls.css";

function DiceRolls () {
    return (
        <div className="DiceRolls">
            <h1>Dice Roll</h1>
            <Die />
            <Die />
            <Die />
        </div>
    )
}

export default DiceRolls;