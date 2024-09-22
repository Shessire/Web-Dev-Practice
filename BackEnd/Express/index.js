const express = require('express');
const app = express();

//routing using path params, so we don't have to hard-code
app.get('/r/:subreddit/:postId', (req,res) => {
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing from Port: ${postId} on the ${subreddit} subreddit</h1>`)
})


app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.post('/cats', (req,res) => {
    res.send('Different MEOW!!')
})

app.get('/dogs', (req,res) => {
    res.send('WOOF!!')
})

app.get('/', (req, res) => {
    res.send('This is the main page');
})

app.get('*', (req,res) => {
    res.send('Cannot find what you want')
})

app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080");
})