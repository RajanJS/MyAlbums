/**
 * Created by rajanmaharjan on 7/10/17.
 */
import axios from 'axios';

class AlbumListApi {

    getAlbumList() {
        return axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response)
            .catch((err) => {
                console.log(err);
                throw err;
            });
    }
}

module.exports = AlbumListApi;
