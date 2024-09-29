const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tacos', (req,res) => {
    res.send('Get /tacos')
})

app.post('/tacos', (req,res) => {
    const { meat, qty } = req.body;
    res.send(`Here is your ${qty} ${meat} taco(s)`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000")
})