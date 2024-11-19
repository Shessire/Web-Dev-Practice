function handleClick () {
    console.log("Clicked the button")
}

function Clicker () {
    return (
        <>
            <p>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default Clicker;