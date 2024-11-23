import { useState } from "react";

function Toggler () {
    const [isHappy, setIsHappy] = useState(true)

    const toggleIsHappy = () => {
        setIsHappy(!isHappy);
    }

    return (
        <div>
            <p style={{fontSize: "5rem"}} onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😭"}
            </p>
        </div>
    )
}

export default Toggler;