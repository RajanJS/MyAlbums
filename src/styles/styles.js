import cssV from './variables/cssV';

import header from './components/header';
import card from './components/card';

/**
 * Returns app styles
 * @returns {{app styles object}}
 */
function styles() {
    const theStyles = {};

    const s = {};
    Object.assign(
        s,
        header(),
        card(),
        theStyles
    );

    return s;
}

module.exports = styles;
