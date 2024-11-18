function Slots ({val1, val2, val3}) {
    const allValues = [val1, val2, val3]
    const isWinner = val1 === val2 && val2 === val3;
    const styles = {color: isWinner ? "green" : "red"}
    
    return (
        <>
            {allValues.map((v) => (
                <h1 style={{display: "inline-block"}}>{v}</h1>
            ))}
            <h2 style={styles}>
                {isWinner ? "You win!" : "You lose :("}
            </h2>
            {isWinner && <h3>Congrats!</h3>}
        </>
    )
}

export default Slots;