import "./PokeId.css";

function PokeId () {
    const randomNumber = Math.floor((Math.random() * 151)) +1;

    return (
        <div className="PokeId">
            <h1>Pokemon #{randomNumber}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`} alt="" />
        </div>
    )
}

export default PokeId;