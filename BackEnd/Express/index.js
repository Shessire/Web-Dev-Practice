const express = require('express');
const app = express();

app.use((req, res) => {
    console.log("Start Requesting");
    res.send("<h1>This is a homepage</h1>")
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 3000");
})