const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const {
    PORT,
    MONGODB_URI,
    CLIENT_URL,
    CLIENT_URL_WEB
} = process.env

app.use(express.json());
// permits access to db to client urls
app.use(cors({ origin: CLIENT_URL, CLIENT_URL_WEB }));
app.use(morgan('dev'));

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

app.get('/', (req, res, next) => {
    res.send('(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Hello world, I am a server!')
    next()
})

app.use('/db', require('./routes/memeRouter.js'));

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }   
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`Server is running on local port ${PORT}`)
})