import cssV from './variables/cssV';

import header from './components/header';
import card from './components/card';

/**
 * Returns app styles
 * @returns {{app styles object}}
 */
const styles = () => {
    const mainStyles = {
        mainContainerStyle: {
            flex: 1
        }
    };

    const AppStyles = Object.assign(
        {},
        header(),
        card(),
        mainStyles
    );

    return AppStyles;
};

export default styles;
