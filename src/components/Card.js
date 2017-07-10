/**
 * Created by rajanmaharjan on 7/11/17.
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import theStyles from '../styles/styles';
const stylesImport = theStyles();
const styles = StyleSheet.create(stylesImport);

const Card = (props) => {
    return (
        <View style={styles.cardContainerStyle}>
            {props.children}
        </View>
    );
};

export default Card;
