/**
 * Created by rajanmaharjan on 7/10/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    StyleSheet,
    Image,
    Linking
} from 'react-native';

import Card from '../Cards/Card';
import CardSection from '../Cards/CardSection';
import Button from '../Buttons/Button';

import stylesImport from '../../styles/styles';
const styles = StyleSheet.create(stylesImport());


const AlbumDetail = ({album}) => {
    const {title, thumbnail_image, image, url} = album;
    const {
        cardHeaderThumbnailContainer,
        cardHeaderThumbnailStyle,
        cardHeaderTextContainer,
        cardHeaderTextStyle,
        cardBodyImageStyle
    } = styles;

    return (
        <Card>
            {/* Card Header */}
            <CardSection>
                <View style={cardHeaderThumbnailContainer}>
                    <Image
                        source={{uri: thumbnail_image}}
                        style={cardHeaderThumbnailStyle}
                    />
                </View>
                <View style={cardHeaderTextContainer}>
                    <Text style={cardHeaderTextStyle}>{title}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSection>
            {/* Card Body */}
            <CardSection>
                <Image
                    source={{uri: image}}
                    style={cardBodyImageStyle}
                />
            </CardSection>
            {/* Card Footer */}
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    BUY NOW!
                </Button>
            </CardSection>
        </Card>
    );
};

export default AlbumDetail;

AlbumDetail.propTypes = {
    album: PropTypes.object
};
