const express = require('express');
const router = express.Router();
const db = require('../spotiflyDB');

router
    .route('/')
    .post((req,res) => {
        let body = req.body ;
        let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at];
        let sql = `INSERT INTO song(youtube_link,album_id,artist_id,title,length,tracker_number,lyrics,created_at,upload_at) 
        VALUES (?,?,?,?,?,?,?,?,?)`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        })
    });
router
    .route('/:id')
    .get((req,res) => {
        let id = req.params.id;
        let sql = `CALL songByID(${id})`;
        db.query(sql ,(error , result) => {
            if (error) throw(error) ;
            res.json(result);
       });
    })
    .put((req,res) => {
        let body = req.body ;
        let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at,req.params.id];
        let sql = `UPDATE song 
        SET youtube_link = ? , album_id = ? , artist_id = ? , title = ? , length = ? , tracker_number = ? , lyrics = ? ,created_at = ? ,upload_at = ?
        WHERE song_id = ?`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        });
    })
    .delete((req,res) => {
        let sql = `DELETE FROM song WHERE song_id = ?`;
        db.query(sql , [req.params.id] ,(error , result ) => {
            if (error) throw error ;
            res.send(result);
        });
    });

module.exports = router ;