const express = require('express');
const router = express.Router();
const db = require('../spotiflyDB');

router
    .route('/')
    .post((req,res) => {
        let body = req.body ;
        let values = [body.album_name,body.artist_id,body.cover_img,body.created_at,body.upload_at];
        let sql = `INSERT INTO album(album_name,artist_id,cover_img,created_at,upload_at) 
        VALUES (?,?,?,?,?)`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        });
    });

router
    .route('/:id')
    .get((req,res) => {
        let id = req.params.id;
        let sql = `CALL albumByID(${id})`;
        db.query(sql ,(error , result) => {
            if (error) throw(error) ;
            res.json(result);
       });
    })
    .put((req,res) => {
        let body = req.body ;
        let values = [body.album_name,body.artist_id,body.cover_img,body.created_at,body.upload_at,req.params.id];
        let sql = `UPDATE album
        SET album_name = ? , artist_id = ? , cover_img = ? , created_at = ? , upload_at = ?
        WHERE album_id = ?`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        });
    })
    .delete((req,res) => {
        let sql = `DELETE FROM album WHERE album_id = ?`;
        db.query(sql , [req.params.id] ,(error , result ) => {
            if (error) throw error ;
            res.send(result);
        });
    });

module.exports = router ;