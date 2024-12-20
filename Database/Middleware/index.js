const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError')

app.use(morgan('dev'))

app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next()
})

const verify = ((req,res,next) => {
    const { password } = req.query;
    if(password === "iknowpassword"){
        next()
    }
    // res.send("You need password for this");
    // throw new Error("Password required")
    throw new AppError('password required', 401)
})

app.use('/dogs', (req,res,next) => {
    console.log("I LOVE DOGS")
    next();
})

app.get('/', (req,res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req,res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Woof')
})

app.get('/secret', verify, (req,res) => {
    res.send("I eat sugar a lot")
})

app.get('/admin', (req,res) => {
    throw new AppError('You are not an admin', 403)
})

app.use((req,res) => {
    res.status(404).send('NOT FOUND')
})

app.use((err,req,res,next) => {
    console.log("***********error**********")
    next(err)
})

app.use((err,req,res,next) => {
    const { status = 500, message = 'Something went wrong'} = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('Running on Port 3000')
})