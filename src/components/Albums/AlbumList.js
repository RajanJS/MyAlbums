/**
 * Created by rajanmaharjan on 7/10/17.
 */

import React, {Component} from 'react';
import AlbumListApi from '../../utils/apiFetch/AlbumListApi';
import AlbumDetail from './AlbumDetail';

import {
    ScrollView
} from 'react-native';

class AlbumList extends Component {
    constructor() {
        super();
        this.state = {
            albums: []
        };
    }

    componentWillMount() {
        this.albumListApi = new AlbumListApi();
        this.albumListApi.getAlbumList()
            .then((res) => {
                // console.log(res);
                this.setState({
                    albums: res.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    renderAlbums() {
        return this.state.albums.map((album) =>
            <AlbumDetail album={album} key={album.title}/>
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    };
}


export default AlbumList;
