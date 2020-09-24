const express = require('express');
const { Artist , Album , Song } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const allArtists = await Artist.findAll();
    res.json(allArtists)
});
router.post('/', async (req, res) => {
    const newArtist = await Artist.create(req.body);
    res.json(newArtist)
});
router.get('/topArtists', async (req, res) => {
    const topArtists = await Artist.findAll({
        limit: 20
    });
    res.json(topArtists)
});
router.get('/:artistId', async (req, res) => {
    const artist = await Artist.findByPk(req.params.artistId,{
        include: [Album,Song]
    });
  
    res.json(artist);
});


module.exports = router ;