/**
 * Created by rajanmaharjan on 7/10/17.
 */

import React, {Component} from 'react';
import AlbumListApi from '../utils/apiFetch/AlbumListApi';
import AlbumDetail from './AlbumDetail';

import {
    View,
    Text
} from 'react-native';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        this.albumListApi = new AlbumListApi();
        this.albumListApi.getAlbumList()
            .then((res) => {
                // console.log(res);
                this.setState({
                    albums: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    };
}


export default AlbumList;
