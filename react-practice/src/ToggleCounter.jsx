import { useState } from "react";

function ToggleCounter () {
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0)

    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }

    const incrementCount = () => {
        setCount(count + 2)
    }

    return (
        <div>
            <p style={{fontSize: "5rem"}} onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😭"}
            </p>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default ToggleCounter;