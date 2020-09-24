const express = require('express');
const { Album , Song , Artist } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const allAlbums = await Album.findAll({
        include: Artist
    });
    res.json(allAlbums)
});
router.post('/', async (req, res) => {
    const newAlbum = await Album.create(req.body);
    res.json(newAlbum)
});
router.get('/topAlbums', async (req, res) => {
    const topAlbums = await Album.findAll({
        limit: 20
    });
    res.json(topAlbums)
});
router.get('/:albumId', async (req, res) => {
    const album = await Album.findByPk(req.params.albumId,{
        include: [Song,Artist]
    });
  
    res.json(album);
});


module.exports = router ;