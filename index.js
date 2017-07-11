/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

import Header from './src/components/Headers/Header';
import AlbumList from './src/components/Albums/AlbumList';

import stylesImport from './src/styles/styles';

const styles = StyleSheet.create(stylesImport());

const Main = () => {
    const {mainContainerStyle} = styles;

    return (
        <View style={mainContainerStyle}>
            <Header headerText={'Albums'}/>
            <AlbumList />
        </View>
    );
};

AppRegistry.registerComponent('MyAlbums', () => Main);
