const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

const comments = [
    {
        id: 1,
        username: "Todd",
        comment: "lol, that is so funny"
    },
    {
        id: 2,
        username: "Skyler",
        comment: "I want to go birdwatching with my dog"
    },
    {
        id:3,
        username: "Shaniqua",
        comment: "Please delete your account"
    },
    {
        id:4,
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

//Show details of comment
app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', { comment })
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