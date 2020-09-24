require('dotenv').config();
const express = require('express');
const app = express();
const song = require('./routes/song');
const artist = require('./routes/artist');
const album = require('./routes/album');
const playlist = require('./routes/playlist');

app.use(express.json());
app.use(logger);
app.use('/song' , song);
app.use('/artist' , artist);
app.use('/album' , album);
app.use('/playlist' , playlist);

function logger(req,res, next) {
   console.log('********************LOGGER********************')
    console.log('REQUEST: ' + req.method);
    console.log('URL: ' + req.url);
    next();
}


const PORT = 3001 ;
app.listen(PORT , () => console.log(`Server is listening at http://localhost:${PORT}`))
