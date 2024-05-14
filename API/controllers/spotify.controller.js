const spotifyApi = require('../configs/spotify.config');


module.exports.getAlbums = (req, res, next) => {
    const { id } = req.params;

    spotifyApi.getArtistAlbums(id)
        .then((data) => {
            //console.log('The received data from the API: ', data.body);
            const albums = data.body.items;
            res.status(200).json(albums);
        })
        .catch((err) => {
            console.error('The error while searching albums occurred: ', err);
            next(err);
        })
}

module.exports.getTracks = (req, res, next) => {
    const { track } = req.query;

    spotifyApi.searchTracks(track)
        .then(tracks => {
            const { items } = tracks.body.tracks;
            res.json(items)
        })
        .catch(next)
}


module.exports.listArtist = (req, res, next) => {
    const artist = req.query.search;

    if (!artist) res.redirect('/');

    spotifyApi.searchArtists(artist)
        .then((data) => {
            //console.log('The received data from the API: ', data.body);
            const artists = data.body.artists.items;
            res.render('artists/artist-search-result', { artists });
        })
        .catch((err) => {
            console.error('The error while searching artists occurred: ', err);
            next(err);
        })
}

module.exports.listAlbum = (req, res, next) => {
    res.render('misc/home');
}

module.exports.listTrack = (req, res, next) => {
    const { id } = req.params;

    spotifyApi.getAlbumTracks(id)
        .then((data) => {
            //console.log('The received data from the API: ', data.body);
            const tracks = data.body.items;
            res.render('tracks/tracks', { tracks });
        })
        .catch((err) => {
            console.error('The error while searching tracks occurred: ', err);
            next(err);
        })
    }