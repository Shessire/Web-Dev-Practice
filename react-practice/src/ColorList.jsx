function ColorList ({ colors }) {
    return (
        <>
            <p>Color List</p>
            <ul>
                {colors.map(c => (
                    <li style={{color: c}}>{c}</li>
                ))}
            </ul>
        </>
    )
}

export default ColorList;