const express = require('express');
const router = express.Router();
const db = require('../spotiflyDB');

router
    .route('/')
    .post((req,res) => {
        let body = req.body ;
        let values = [body.artist_name,body.cover_img,body.created_at];
        let sql = `INSERT INTO artist(artist_name,cover_img,created_at) 
        VALUES (?,?,?)`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        });
    });

router
    .route('/:id')
    .get((req,res) => {
        let id = req.params.id;
        let sql = `CALL artistByID(${id})`;
        db.query(sql ,(error , result) => {
            if (error) throw(error) ;
            res.json(result);
       });
    })
    .put((req,res) => {
        let body = req.body ;
        let values = [body.artist_name,body.cover_img,body.created_at,req.params.id];
        let sql = `UPDATE artist 
        SET artist_name = ? , cover_img = ? , created_at = ?
        WHERE artist_id = ?`;
        db.query(sql , values ,(error , result) => {
            if (error) throw error ;
            res.send(result);
        });
    })
    .delete((req,res) => {
        let sql = `DELETE FROM artist WHERE artist_id = ?`;
        db.query(sql , [req.params.id] ,(error , result ) => {
            if (error) throw error ;
            res.send(result);
        });
    });
router
    .route('/:id/album')
    .get((req,res) => {
        let id = req.params.id;
        let sql = `CALL albumsOfArtistByID(${id})`;
        db.query(sql ,(error , result) => {
            if (error) throw(error) ;
            res.json(result);
       });
    });

module.exports = router ;