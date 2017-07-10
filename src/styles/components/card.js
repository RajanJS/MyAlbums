/**
 * Created by rajanmaharjan on 7/11/17.
 */

import cssV from '../variables/cssV';

export default function () {
    return {
        cardContainerStyle: {
            borderWidth: 1,
            borderRadius: 2,
            borderColor: cssV('lightwhite'),
            borderBottomWidth: 0,
            shadowColor: cssV('lightblack'),
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.1,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10
        },
        cardSectionContainer: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
        }
    };
}
