import { useState } from "react";
import "./ColorBox.css"

function randomChoice(arr) {
    const randomNum = Math.floor(Math.random() * arr.length)
    return arr[randomNum]

}

function ColorBox ({ colors }) {
    const [color, setColor] = useState(randomChoice(colors))

    
    const changeColor = () => {
        const randomColor = randomChoice(colors)
        setColor(randomColor)
    }

    return (
        <div 
            className="ColorBox"
            style={{backgroundColor: color}}
            onClick={changeColor}>
        </div>
    )
}

export default ColorBox;