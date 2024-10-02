const express = require('express');
const app = express();
const path = require('path')
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');
uuid();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

let comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "lol, that is so funny"
    },
    {
        id: uuid(),
        username: "Skyler",
        comment: "I want to go birdwatching with my dog"
    },
    {
        id: uuid(),
        username: "Shaniqua",
        comment: "Please delete your account"
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

//Show details of comment
app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

//Update or Edit the comment (LOGIC)
app.patch('/comments/:id', (req,res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect('/comments'); 
})

//Update or Edit the comment
app.get('/comments/:id/edit', (req,res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

//Delete the comment
app.delete('/comments/:id', (req,res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
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