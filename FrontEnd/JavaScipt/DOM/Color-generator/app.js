const rgb = document.querySelector("#rgb");
const h1 = document.querySelector("h1")


const changeColor = document.querySelector("button")
changeColor.addEventListener("click", () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const newColor= `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})