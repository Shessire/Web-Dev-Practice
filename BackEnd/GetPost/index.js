const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const comments = [
    {
        username: "Todd",
        comment: "lol, that is so funny"
    },
    {
        username: "Skyler",
        comment: "I want to go birdwatching with my dog"
    },
    {
        username: "Shaniqua",
        comment: "Please delete your account"
    },
    {
        username: "Melissa",
        comment: "Hey"
    }
]

//Displays all comments
app.get('/comments', (req,res) => {
    res.render('comments/index', { comments });
})

//Form to Create New Comment
app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

//Creates New comment
app.post('/comments', (req,res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})











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


// RESTful
// GET /comments - List all comments
// POST /comments/:id - Create one comment
// GET /comments/:id - Get one comment
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Delete one comment