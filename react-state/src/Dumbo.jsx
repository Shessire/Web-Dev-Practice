import { useState } from "react";

function generateGameBoard () {
    console.log("Making the initial game board");
    return Array(5000);
}

function Dumbo () {
    const [board, setBoard] = useState(generateGameBoard)
    return (
        <div>
            <button onClick={() => setBoard("hello")}>Click me to change state</button>
        </div>
    )
}

export default Dumbo;