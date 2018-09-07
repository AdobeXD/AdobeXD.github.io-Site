import React, { Fragment } from 'react';

import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Button from '../components/Button.jsx';

import HeroSpace from '../assets/hero_space.jpg';
import HeroAstronaught from '../assets/hero_astronaught.png';

const signUpLink = 'https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=BPQ22V';

export default function Home() {
    const items = [
        { label: 'Sign Up For Access', href: signUpLink },
    ];
    return (
        <Fragment>
            <Header items={items} />
            <Hero heading={'Extending Adobe XD'} backgroundImage={HeroSpace} color="white" />
            <Hero
                heading={'Coming Soon!'}
                level="h2"
                footing={
                    <Button href={signUpLink}>
                        Sign Up For Access
                    </Button>
                }>
                <div style={{ flex: '1 1 50%', fontSize: "125%" }}>
                    <p>
                        Adobe XD is the UX/UI design solution for experience designers to design,
                        prototype, and share engaging user experiences.
                    </p>
                    <p>
                        XD is opening up a developer platform to democratize feature development by
                        allowing anyone to extend XD with additional tools, commands, and panels.
                        With XD’s developer platform, you’ll be able to:
                    </p>
                    <ul>
                        <li>Automate complex tasks</li>
                        <li>Read, write, modify, and generate content in the scenegraph</li>
                        <li>Integrate with external services</li>
                        <li>And add custom UI to enhance your creative workflow</li>
                    </ul>
                    <p>
                        Sign up below to be the first to hear when the platform is available, and
                        for an opportunity to gain early access and provide feedback on the
                        platform.
                    </p>
                </div>
                <div style={{ flex: '0 0 auto', marginRight: 16 }}>
                    <img src={HeroAstronaught} />
                </div>
            </Hero>
            <Hero backgroundColor="#666666">
                <p style={{ color: '#EAEAEA', padding: 48, paddingBottom: 0 }}>
                    &copy; Copyright 2018 Adobe. All rights reserved.
                </p>
            </Hero>
        </Fragment>
    );
}
