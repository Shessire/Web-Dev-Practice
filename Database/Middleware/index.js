const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))

app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next()
})

app.get('/', (req,res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req,res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof')
})



app.listen(3000, () => {
    console.log('Running on Port 3000')
})