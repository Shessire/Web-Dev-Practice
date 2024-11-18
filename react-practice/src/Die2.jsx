function Die2 ({ numSides = 6 }) {
    const roll = Math.floor(Math.random() * numSides) + 1

    return (
        <p>{numSides} - sided die roll {roll}</p>
    )
}

export default Die2;