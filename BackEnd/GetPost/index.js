const express = require('express');
const app = express();

app.get('/tacos', (req,res) => {
    res.send('Get /tacos')
})

app.post('/tacos', (req,res) => {
    res.send('Post /tacos')
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})