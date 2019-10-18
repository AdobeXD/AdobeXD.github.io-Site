import React from 'react';

import Cards from '../components/Cards.jsx';

const year = new Date().getFullYear();

export default function Footer() {
    const styles = {
        footer: {
            height: 100,
            paddingBottom: 0,
        },
        left: {
            color: "white",
            textAlign: "left",
            display: "inline-block",
            margin: 0
        },
        right: {
            display: "inline-block",
            textAlign: "right",
            color: "white",
            margin: 0,
            marginLeft: "auto"
        }
    }
    return (
        <Cards height={styles.footer.height} backgroundColor="#323232" width="100%" wrapperPaddingBottom={0} justifyContent="flex-start" flexDirection="row">
            <p style={styles.left}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/privacy.html">
                    Privacy
                    </a>
                {'  |  '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/legal/terms.html">
                    Terms of Use
                    </a>
                {'  |  '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/privacy/cookies.html">Cookies</a>
            </p>
            <p className="evidon-notice-link" style={styles.right}>
                &copy; Copyright {year} Adobe. All rights reserved.
            </p>
        </Cards>
    );
}
