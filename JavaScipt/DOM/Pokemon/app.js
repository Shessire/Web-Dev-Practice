// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 1000; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add("pokemon");
    const number = document.createElement('span');
    number.innerText = `#${i}`;
    const sprite = document.createElement('img');
    sprite.src = `${url}${i}.png`;

    container.appendChild(pokemon);
    pokemon.appendChild(sprite);
    pokemon.appendChild(number);
}
