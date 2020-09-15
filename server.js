require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());
app.use(logger);

function logger(req,res, next) {
    console.log("Request " + req.url + " " + req.method);
    next();
}

// create connection with sql DB
const mySqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'music_streaming_service',
    multipleStatements: true
});

// connect
mySqlConnection.connect(error => {
    if(error) throw error ; 
    console.log("Connected !")
});

app.get('/top_songs' , (req,res)=>{ // GET top 20 songs
   let sql = `SELECT * FROM song LIMIT 20 OFFSET 0`;
   mySqlConnection.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/top_artists' , (req,res)=>{ // GET top 20 artists
   let sql = `SELECT * FROM artist LIMIT 20 OFFSET 0`;
   mySqlConnection.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/top_albums' , (req,res)=>{ // GET top 20 albums
   let sql = `SELECT * FROM album LIMIT 20 OFFSET 0`;
   mySqlConnection.query(sql , (error , result) => {
        if (error) throw(error) ;   
        res.json(result);
   });
});
app.get('/top_playlist' , (req,res)=>{ // GET top 20 playlists
   let sql = `SELECT * FROM playlist LIMIT 20 OFFSET 0`;
   mySqlConnection.query(sql , (error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/song/:id' , (req,res)=>{ // GET song by ID
    let id = req.params.id;
    let sql = `SELECT * FROM song WHERE song_id = ?`;
    mySqlConnection.query(sql , [id] ,(error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/artist/:id' , (req,res)=>{ // GET artist by ID
    let id = req.params.id;
    let sql = `SELECT * 
    FROM artist a
    JOIN song s
    ON a.artist_id = s.artist_id
    WHERE a.artist_id = ?`;
    mySqlConnection.query(sql , [id] ,(error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/album/:id' , (req,res)=>{ // GET album by ID
    let id = req.params.id;
    let sql = `SELECT *
    FROM album a
    JOIN song s
    ON a.album_id = s.album_id
    WHERE a.album_id = ?`;
    mySqlConnection.query(sql , [id] ,(error , result) => {
        if (error) throw(error) ;
        res.json(result);
   });
});
app.get('/playlist/:id' , (req,res)=>{ // GET playlist by ID
    let id = req.params.id;
    let sql = `SELECT *
    FROM playlist_song ps 
    JOIN song s 
    ON ps.song_id = s.song_id 
    WHERE playlist_id = ?`;
    mySqlConnection.query(sql , [id] ,(error , result) => {
       if (error) throw(error) ;
       res.json(result);
   });
});
app.post('/song' , (req,res)=>{ // POST new song
    let body = req.body ;
    let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at];
    let sql = `INSERT INTO song(youtube_link,album_id,artist_id,title,length,tracker_number,lyrics,created_at,upload_at) 
    VALUES (?,?,?,?,?,?,?,?,?)`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.post('/album' , (req,res)=>{ // POST new album
    let body = req.body ;
    let values = [body.album_name,body.artist_id,body.cover_img,body.created_at,body.upload_at];
    let sql = `INSERT INTO album(album_name,artist_id,cover_img,created_at,upload_at) 
    VALUES (?,?,?,?,?)`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.post('/artist' , (req,res)=>{ // POST new artist
    let body = req.body ;
    let values = [body.artist_name,body.cover_img,body.created_at];
    let sql = `INSERT INTO artist(artist_name,cover_img,created_at) 
    VALUES (?,?,?)`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.post('/playlist' , (req,res)=>{ // POST new playlist
    let body = req.body ;
    let values = [body.playlist_name,body.cover_img,body.created_at,body.upload_at,body.song_id];
    let sql = `INSERT INTO playlist(playlist_name,cover_img,created_at,upload_at,song_id) 
    VALUES (?,?,?,?,?)`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.put('/song/:id' , (req,res)=>{ // PUT - update song
    let body = req.body ;
    let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at,req.params.id];
    let sql = `UPDATE song 
    SET youtube_link = ? , album_id = ? , artist_id = ? , title = ? , length = ? , tracker_number = ? , lyrics = ? ,created_at = ? ,upload_at = ?
    WHERE song_id = ?`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.put('/artist/:id' , (req,res)=>{ // PUT - update artist
    let body = req.body ;
    let values = [body.artist_name,body.cover_img,body.created_at,req.params.id];
    let sql = `UPDATE artist 
    SET artist_name = ? , cover_img = ? , created_at = ?
    WHERE artist_id = ?`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.put('/album/:id' , (req,res)=>{ // PUT - update album
    let body = req.body ;
    let values = [body.album_name,body.artist_id,body.cover_img,body.created_at,body.upload_at,req.params.id];
    let sql = `UPDATE album
    SET album_name = ? , artist_id = ? , cover_img = ? , created_at = ? , upload_at = ?
    WHERE album_id = ?`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.put('/playlist/:id' , (req,res)=>{ // PUT - update playlist
    let body = req.body ;
    let values = [body.playlist_name,body.cover_img,body.created_at,body.upload_at,body.song_id,req.params.id];
    let sql = `UPDATE playlist 
    SET playlist_name = ? , cover_img = ? , created_at = ? ,upload_at = ? , song_id = ?
    WHERE playlist_id = ?`;
    mySqlConnection.query(sql , values ,(error , result) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.delete('/song/:id' , (req,res)=>{ // DELETE song by id
    let sql = `DELETE FROM song WHERE song_id = ?`;
    mySqlConnection.query(sql , [req.params.id] ,(error , result ) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.delete('/artist/:id' , (req,res)=>{ // DELETE artist by id
    let sql = `DELETE FROM artist WHERE artist_id = ?`;
    mySqlConnection.query(sql , [req.params.id] ,(error , result ) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.delete('/album/:id' , (req,res)=>{ // DELETE album by id
    let sql = `DELETE FROM album WHERE album_id = ?`;
    mySqlConnection.query(sql , [req.params.id] ,(error , result ) => {
        if (error) throw error ;
        res.send(result);
    })
});
app.delete('/playlist/:id' , (req,res)=>{ // DELETE playlist by id
    let sql = `DELETE FROM playlist WHERE playlist_id = ?`;
    mySqlConnection.query(sql , [req.params.id] ,(error , result ) => {
        if (error) throw error ;
        res.send(result);
    })
});


const PORT = 3001 ;
app.listen(PORT , () => console.log(`Server is listening at http://localhost:${PORT}`))

// function getNewDate() {
//     let year = new Date().getFullYear();
//     let month = new Date().getMonth();
//     let day = new Date().getDate();

//     if(month<10) month = '0'+month;
//     if(day<10) day = '0'+day;

//     return `${year}-${month}-${day}`;
// }

// app.post('/user' , (req,res)=>{ // POST new user
//     let body = req.body ;
//     let values = [
//         body.user_name,
//         body.email,
//         body.password,
//         getNewDate(),
//         0,
//         0
//     ];
//     let sql = `INSERT INTO user(user_name,email,password,created_at,is_admin,remember_token)
//     VALUES (?,?,?,?,?,?)`;
//     mySqlConnection.query(sql , values ,(error , result) => {
//         if (error) throw error ;
//         res.send(result);
//     })
// })

// app.get('/user/:email/:password' , (req,res)=>{
//     let email = req.params.email ;
//     let password = req.params.password ;
//     let values = [email,password];
//     let sql = `SELECT user_name FROM user WHERE email = ? AND password = ?`;
//     mySqlConnection.query(sql , values ,(error , result) => {
//         if (error) throw(error) ;
//         res.json(result);
//     });
// });