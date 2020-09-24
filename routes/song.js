const express = require('express');
const { Song , Album , Artist , Playlist , songInPlaylist } = require('../models');
const router = express.Router();


router.get('/', async (req, res) => {
    const allSongs = await Song.findAll({
        include: [Album,Artist]
    });
    res.json(allSongs)
});
router.post('/', async (req, res) => {
    const newSong = await Song.create(req.body);
    res.json(newSong)
});
router.get('/topSongs', async (req, res) => {
    const topSongs = await Song.findAll({
        include: [Album],
        limit: 20
    });
    res.json(topSongs)
});
router.get('/:songId', async (req, res) => {
    console.log(req.query);
    if(Object.keys(req.query).toString()==='artist'){
        const artist = await Artist.findByPk(req.query.artist,{
            include: [Song]
        });
        res.json(artist);
    } else if(Object.keys(req.query).toString()==='album'){
        const album = await Album.findByPk(req.query.album,{
            include: [Song]
        });
        res.json(album);
    } else if(Object.keys(req.query).toString()==='playlist'){
        const playlist = await songInPlaylist.findAll({
            include: [Playlist,Song],
            where: { playlistId: req.params.playlistId }    
        });
        res.json(playlist); 
    } else {
        const song = await Song.findByPk(req.params.songId,{
            include: [Album,Artist] 
        });
        res.json(song);
    }
});

module.exports = router ;


// router
//     .route('/')
//     .post((req,res) => {
//         let body = req.body ;
//         let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at];
//         let sql = `INSERT INTO song(youtube_link,album_id,artist_id,title,length,tracker_number,lyrics,created_at,upload_at) 
//         VALUES (?,?,?,?,?,?,?,?,?)`;
//         db.query(sql , values ,(error , result) => {
//             if (error) throw error ;
//             res.send(result);
//         })
//     });
// router
//     .route('/:id')
//     .get((req,res) => {
//         let id = req.params.id;
//         let query = Object.entries(req.query)[0];
//         console.log(query);
//         let sql ;
//         if(query===undefined) sql = `CALL songByID(${id})`; 
//         else if(query[0] === 'album') sql = `CALL albumByID(${query[1]})`;
//         else if(query[0] === 'artist') sql = `CALL artistByID(${query[1]})`;
//         else if(query[0] === 'playlist') sql = `CALL playlistByID(${query[1]})`;
//         db.query(sql ,(error , result) => {
//             if (error) throw(error) ;
//             res.json(result);
//         });
//     })
//     .put((req,res) => {
//         let body = req.body ;
//         let values = [body.youtube_link,body.album_id,body.artist_id,body.title,body.length,body.tracker_number,body.lyrics,body.created_at,body.upload_at,req.params.id];
//         let sql = `UPDATE song 
//         SET youtube_link = ? , album_id = ? , artist_id = ? , title = ? , length = ? , tracker_number = ? , lyrics = ? ,created_at = ? ,upload_at = ?
//         WHERE song_id = ?`;
//         db.query(sql , values ,(error , result) => {
//             if (error) throw error ;
//             res.send(result);
//         });
//     })
//     .delete((req,res) => {
//         let sql = `DELETE FROM song WHERE song_id = ?`;
//         db.query(sql , [req.params.id] ,(error , result ) => {
//             if (error) throw error ;
//             res.send(result);
//         });
//     });


