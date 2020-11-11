const express = require('express');
const { Artist , Album , Song , Playlist, sequelize } = require('../models');
const router = express.Router();

router.get('/', async (req, res) => {
    const name = req.query.name.toLowerCase() ;
    console.log(name);
    const searchSongs = await Song.findAll({
        where: { 
            songTitle: sequelize.where(sequelize.fn('LOWER',sequelize.col('songTitle')), 'LIKE' , '%' + name + '%')
        },
        attributes: [ 'id' , [ 'songTitle' , 'itemName' ]] 
    });
    const searchArtists = await Artist.findAll({
        where: { 
            artistName: sequelize.where(sequelize.fn('LOWER',sequelize.col('artistName')), 'LIKE' , '%' + name + '%')
        },
        attributes: [ 'id' , [ 'artistName' , 'itemName' ]]
    });
    const searchAlbums = await Album.findAll({
        where: { 
            albumName: sequelize.where(sequelize.fn('LOWER',sequelize.col('albumName')), 'LIKE' , '%' + name + '%')
        },
        attributes: [ 'id' , [ 'albumName' , 'itemName' ]]
    });
    const searchPlaylists = await Playlist.findAll({
        where: { 
            playlistName: sequelize.where(sequelize.fn('LOWER',sequelize.col('playlistName')), 'LIKE' , '%' + name + '%')
        },
        attributes: [ 'id' , [ 'playlistName' , 'itemName' ]]
    });
    searchSongs.type = 'Songs';
    searchArtists.type = 'Artists';
    searchAlbums.type = 'Albums';
    searchPlaylists.type = 'Playlists';
    let searchData = searchSongs.concat(searchArtists).concat(searchAlbums).concat(searchPlaylists);

    res.json(searchData);
});


module.exports = router ;