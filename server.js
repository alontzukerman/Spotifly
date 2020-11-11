require('dotenv').config();
const express = require('express');
const app = express();
const checkToken = require('./checkToken');
const login = require('./routes/login');
const register = require('./routes/register');
const search = require('./routes/search');
const song = require('./routes/song');
const artist = require('./routes/artist');
const album = require('./routes/album');
const playlist = require('./routes/playlist');

app.use(express.json());
app.use(logger);
app.use('/login' , login);
app.use('/register' , register);
app.use('/search' , checkToken , search);
app.use('/song' , checkToken , song);
app.use('/artist' , checkToken , artist);
app.use('/album' , checkToken , album);
app.use('/playlist' , checkToken , playlist);

function logger(req,res, next) {
   console.log('********************LOGGER********************')
    console.log('REQUEST: ' + req.method);
    console.log('URL: ' + req.url);
    next();
}


const PORT = 3001 ;
app.listen(PORT , () => console.log(`Server is listening at http://localhost:${PORT}`))
