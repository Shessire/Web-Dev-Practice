const h1 = document.querySelector("h1");
const input = document.querySelector("#username");

//can be either input or change
input.addEventListener("input", function() {
    const value = input.value;
    h1.innerText = `Welcome, ${value}`;
    if (input.value === "") {
        h1.innerText = "Enter Your Username"
    }
})