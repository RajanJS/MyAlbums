/**
 * Created by rajanmaharjan on 7/10/17.
 */
import  React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

import theStyles from '../styles/styles';

const stylesImport = theStyles();
const styles = StyleSheet.create(stylesImport);

const Header = (props) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    );
};

export default Header;
