const links = document.querySelectorAll('p a');
for (let link of links) {
    link.style.color = "cyan"
    link.style.textDecorationColor = "coral"
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const span = document.querySelectorAll("h1 span");
for(let i = 0; i < span.length; i++) {
    span[i].style.color = colors[i];
}

const container = document.querySelector("#create-button");
for(let i = 1; i <= 100; i++){
    container.innerHTML += "<button>ESC</button>";    
}