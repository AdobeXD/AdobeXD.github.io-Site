import React from 'react';

import Cards from '../components/Cards.jsx';

const year = new Date().getFullYear();

export default function Footer() {
    return (
        <Cards backgroundColor="#2C2C2C">
            <p className="footer evidon-notice-link">
                &copy; Copyright {year} Adobe. All rights reserved.
                {' / '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/privacy.html">
                    Privacy
                </a>
                {' / '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/legal/terms.html">
                    Terms of Use
                </a>
                {' / '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.adobe.com/privacy/cookies.html">Cookies</a>
                {' / '}
            </p>
        </Cards>
    );
}
