function handleClick () {
    console.log("Clicked the button")
}

function handleHover () {
    console.log("Hovered")
}

function Clicker () {
    return (
        <>
            <p onMouseOver={handleHover}>Hover the button</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default Clicker;