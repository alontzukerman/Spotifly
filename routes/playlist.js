const express = require('express');
const { Playlist , songInPlaylist , Song } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const allPlaylists = await Playlist.findAll();
    res.json(allPlaylists)
});
router.post('/', async (req, res) => {
    const newPlaylist = await Playlist.create(req.body);
    res.json(newPlaylist)
});
router.get('/topPlaylists', async (req, res) => {
    const topPlaylists = await Playlist.findAll({
        limit: 20
    });
    res.json(topPlaylists)
});
router.get('/:playlistId', async (req, res) => {
    const playlist = await songInPlaylist.findAll({
        include: [Playlist,Song],
        where: { playlistId: req.params.playlistId }    
    });
  
    res.json(playlist);
});
module.exports = router ;