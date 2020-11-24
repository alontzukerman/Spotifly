require('array.prototype.flatmap').shim();
const { Artist , Album , Song , Playlist } = require('../models');
const express = require('express');
const router = express.Router();
const { Client } = require('@elastic/elasticsearch');
const client = new Client({
    cloud: {
        id: 'i-o-optimized-deployment:dXMtZWFzdC0xLmF3cy5mb3VuZC5pbyQ1ZmVhMGIwN2JmMzU0MDc2YjY0OGUxZTFhYzg2MmUzMiQ0OGExOTY4NDkwZmY0YmY4YTYwMmM5MWFhNzgzOTY1MQ==',
    },
    auth: {
        username: process.env.ES_USERNAME,
        password: process.env.ES_PASSWORD
    }
});

async function run() {
    
    const allSongs = await Song.findAll({
        attributes: ['id','songTitle']
    });

    const songsBody = allSongs.flatMap((doc) => [
        { index: { _index: "songs" } },
        doc
    ]);

    const { body: bulkResponse1 } = await client.bulk({ refresh: true, songsBody });
    if (bulkResponse1.errors) {
        console.log(bulkResponse1.errors)
    }
    const { body: count1 } = await client.count({ index: "songs" });
    console.log(count1);

    // --------------------

    const allAlbums = await Album.findAll({
        attributes: ['id','albumName']
    });

    const albumsBody = allAlbums.flatMap((doc) => [
        { index: { _index: "albums" } },
        doc
    ]);

    const { body: bulkResponse2 } = await client.bulk({ refresh: true, albumsBody });
    if (bulkResponse2.errors) {
        console.log(bulkResponse2.errors)
    }
    const { body: count2 } = await client.count({ index: "albums" });
    console.log(count2);

    // --------------------

    const allArtists = await Artist.findAll({
        attributes: ['id','artistName']
    });

    const artistsBody = allArtists.flatMap((doc) => [
        { index: { _index: "artists" } },
        doc
    ]);

    const { body: bulkResponse3 } = await client.bulk({ refresh: true, artistsBody });
    if (bulkResponse3.errors) {
        console.log(bulkResponse3.errors)
    }
    const { body: count3 } = await client.count({ index: "artists" });
    console.log(count3);

    // --------------------

    const allPlaylists = await Playlist.findAll({
        attributes: ['id','playlistName']
    });

    const playlistsBody = allPlaylists.flatMap((doc) => [
        { index: { _index: "playlists" } },
        doc
    ]);

    const { body: bulkResponse4 } = await client.bulk({ refresh: true, playlistsBody });
    if (bulkResponse4.errors) {
        console.log(bulkResponse4.errors)
    }
    const { body: count4 } = await client.count({ index: "playlists" });
    console.log(count4);

}

// run(); -----> copied data from mySql -> elastic search

const getFiltered = async(index,field,filter,size) => {
    const filtered = await client.search({
        size: size,
        index: index,
        body: {
            query: {
                prefix: {[field]: filter}
            }
        }
    })
    return filtered ;
}
router.get('/', async (req, res) => {
    const filter = req.query.filter ;
    const filteredSongs = await getFiltered('songs','songTitle',filter,3);
    const filteredAlbums = await getFiltered('albums','albumName',filter,3);
    const filteredArtists = await getFiltered('artists','artistName',filter,3);
    const filteredPlaylists = await getFiltered('playlists','playlistName',filter,3);

    const filteredAll = {
        Songs: filteredSongs.body.hits.hits,
        Albums: filteredAlbums.body.hits.hits,
        Artists: filteredArtists.body.hits.hits,
        Playlists: filteredPlaylists.body.hits.hits
    }
    res.status(200).send(filteredAll);
});

router.get('/songs', async (req, res) => {
    const filter = req.query.filter ;
    const filteredSongs = await getFiltered('songs','songTitle',filter,10);
    // const filteredSongs = await client.search({
    //     // size: 3,
    //     index: 'songs',
    //     body: {
    //         query: {
    //             prefix: {songTitle: filter}
    //         }
    //     }
    // })
    res.status(200).send({Songs: filteredSongs.body.hits.hits});
});
router.get('/albums', async (req, res) => {
    const filter = req.query.filter ;
    const filteredAlbums = await getFiltered('albums','albumName',filter,10);
    // const filteredAlbums = await client.search({
    //     // size: 3,
    //     index: 'albums',
    //     body: {
    //         query: {
    //             prefix: {albumName: filter}
    //         }
    //     }
    // })
    res.status(200).send({Albums: filteredAlbums.body.hits.hits});
});
router.get('/artists', async (req, res) => {
    const filter = req.query.filter ;
    const filteredArtists = await getFiltered('artists','artistName',filter,10);
    // const filteredArtists = await client.search({
    //     // size: 3,
    //     index: 'artists',
    //     body: {
    //         query: {
    //             prefix: {artistName: filter}
    //         }
    //     }
    // })
    res.status(200).send({Artists: filteredArtists.body.hits.hits});
});
router.get('/playlists', async (req, res) => {
    const filter = req.query.filter ;
    const filteredPlaylists = await getFiltered('playlists','playlistName',filter,10);
    // const filteredPlaylists = await client.search({
    //     // size: 3,
    //     index: 'playlists',
    //     body: {
    //         query: {
    //             prefix: {playlistName: filter}
    //         }
    //     }
    // })
    res.status(200).send({Playlists: filteredPlaylists.body.hits.hits});
});
module.exports = router ;