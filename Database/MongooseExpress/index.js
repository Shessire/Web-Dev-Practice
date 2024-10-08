const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
  console.log('Connected to MongoDB');
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req,res) => {
    res.send('Hi')
})

app.listen(3000, () => {
    console.log("APP IS RUNNING ON PORT 3000")
})