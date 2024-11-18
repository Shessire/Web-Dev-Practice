function Die2 ({ numSides }) {
    const roll = Math.floor(Math.random() * numSides) + 1

    return (
        <p>{numSides} - sided die roll {roll}</p>
    )
}

export default Die2;