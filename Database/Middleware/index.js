const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/dogs', (req,res) => {
    res.send('Woof')
})



app.listen(3000, () => {
    console.log('Running on Port 3000')
})