import cssV from './variables/cssV';

import header from './components/header';

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
        theStyles
    );

    return s;
}

module.exports = styles;
