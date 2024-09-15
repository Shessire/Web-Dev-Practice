let welcome = prompt("What would you like to do?")
const list = [""]
while (welcome !== "quit" && welcome !== "q") {
    if(welcome === "list") {
        console.log("************")
        for(let i = 0; i < list.length; i++) {
            console.log(`${i}: ${list[i]}`)
        }
        console.log("************")
    } else if (welcome === "new") {
        const add = prompt("What would you like to add?")
        list.push(add);
        console.log(`${add} added to the list`)
    } else if (welcome === "delete") {
        const del = parseInt(prompt("Which number would you like to delete?"))
        if (!del) {
            console.log("Please enter valid number")
        } else {
            const deleted = list.splice(del,1);
            console.log(`Deleted ${deleted}`)
        }
    }
    welcome = prompt("What would you like to do?")
}
console.log("You quit the app!")


