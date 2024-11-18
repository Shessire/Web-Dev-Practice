function Slots ({val1, val2, val3}) {
    const allValues = [val1, val2, val3]
    const isWinner = val1 === val2 && val2 === val3;
    const styles = {color: isWinner ? "green" : "red"}
    const resultMessage = isWinner ? (
        <div>
            <h2 style={styles}>You win!</h2>
            <h3>Congrats!</h3>
        </div>
    ) : (
        <h2 style={styles}>You lose :(</h2>
    )
    return (
        <>
            {allValues.map((v) => (
                <h1 style={{display: "inline-block"}}>{v}</h1>
            ))}
            {resultMessage}
        </>
    )
}

export default Slots;