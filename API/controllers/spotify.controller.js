const spotifyApi = require('../configs/spotify.config');


module.exports.getAlbums = (req, res, next) => {
    const { id } = req.params;

    spotifyApi.getArtistAlbums(id)
        .then((data) => {
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


module.exports.listTrack = (req, res, next) => {
    const { id } = req.params;

    spotifyApi.getAlbumTracks(id)
        .then((data) => {
            //console.log('The received data from the API: ', data.body);
            const tracks = data.body.items;
            res.json(tracks)
        })
        .catch((err) => {
            console.error('The error while searching tracks occurred: ', err);
            next(err);
        })
    }


module.exports.searchArtists = (req, res, next) => {
    const artist = req.query.search;

    if (!artist) {
        return res.status(400).json({ message: 'missing search param'})
    }

    spotifyApi.searchArtists(artist)
        .then((data) => {
            
            const artists = data.body.artists.items;
            res.json(artists);
        })
        .catch((err) => {
            console.error('The error while searching artists occurred: ', err);
            next(err);
        })
}


module.exports.listAlbum = (req, res, next) => {
    res.json('misc/home');
}
