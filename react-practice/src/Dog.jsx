function Dog() {
    const pet = "abc"
    return <p>{pet} says WOOF!!</p>
}

function add(x,y) {
    return x + y;
}

//normal export allows you to export several things
//but to import it need to match the export's name
export {Dog, add};