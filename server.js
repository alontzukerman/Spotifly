require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./spotiflyDB');
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
    console.log(req.method + " " + req.url);
    next();
}

app.get('/top_songs' , (req,res)=>{ // GET top 20 songs
   let sql = `CALL getTopSongs()`;
   db.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/top_artists' , (req,res)=>{ // GET top 20 artists
   let sql = `CALL getTopArtists()`;
   db.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/top_albums' , (req,res)=>{ // GET top 20 albums
   let sql = `CALL getTopAlbums()`;
   db.query(sql , (error , result) => {
        if (error) throw(error) ;   
        res.json(result);
   });
});
app.get('/top_playlist' , (req,res)=>{ // GET top 20 playlists
   let sql = `CALL getTopPlaylists()`;
   db.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});

const PORT = 3001 ;
app.listen(PORT , () => console.log(`Server is listening at http://localhost:${PORT}`))
