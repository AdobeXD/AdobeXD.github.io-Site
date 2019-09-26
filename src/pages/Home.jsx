import React, { Fragment } from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

import createPNG from "../assets/xd_web_create.png";
import buildPNG from "../assets/xd_web_build.png";
import sharePNG from "../assets/xd_web_share.png";
import devCommunitySVG from "../assets/S_Illu_DeveloperCommunity_180x120.svg";
import userCommunitySVG from "../assets/S_Illu_UserCommunity_180x120.svg";
import arrowSVG from "../assets/S_Illu_ArrowRight_180x30.svg";

import SiliconPublishingLogo from "../assets/logos/SPI2.png";
import UIFacesLogo from "../assets/logos/logo-web.svg";
import IconScoutLogo from "../assets/logos/Icon_Black.png";
import AirTableLogo from "../assets/logos/mark.png";
import ImpekableLogo from "../assets/logos/impekable_logo.svg";
import StarkLogo from "../assets/logos/Stark Logo Avatar (1).png";
import DribbbleLogo from "../assets/logos/dribbble.png";
import BehanceLogo from "../assets/logos/behance.png";
import UserTestingLogo from "../assets/logos/UT_Logo.png";
import TrelloLogo from "../assets/logos/mark-trello-blue-Blue.png";
import SlopeLogo from "../assets/logos/slope-logo_full-color_dark.png";
import InMotionNowLogo from "../assets/logos/F.inmotionnowlogo.png";

export default function Home() {
  const items = [
    { label: "Plugin APIs", href: "//adobexdplatform.com/plugin-docs/" },
    { label: "Cloud APIs", href: "//adobexdplatform.com/cloud-api-docs/" },
    { label: "Community & Support", href: "//adobexdplatform.com/community-and-support" }
  ];
  const styles = {
    arrow: {
      position: "relative",
      top: -50,
      marginLeft: -80,
      marginRight: -80
    }
  }
  return (
    <Fragment>
      <Header items={items} />
      <Cards heading={"Welcome to the world of XD plugin creation"}
        footing={
          <Button href="//adobexdplatform.com/plugin-docs/tutorials/quick-start">Quick Start</Button>
        }>
        <Card title="Create" img={createPNG}>
          Start by creating your plugin in the Adobe I/O Developer Console
          </Card>
        <img src={arrowSVG} style={styles.arrow} alt="Right Arrow" />
        <Card title="Build" img={buildPNG}>
          Build and test your plugin inside Adobe XD
          </Card>
        <img src={arrowSVG} style={styles.arrow} alt="Right Arrow" />
        <Card title="Share" img={sharePNG}>
          Share with others by submitting it to the XD plugin manager
          </Card>
      </Cards>
      <Cards
        heading={
          "Automate complex workflows, and integrate with other apps and services"
        }
        level="h2"
        backgroundColor="white"
      >
        <Card level="h4" title="Asset Management &amp; Import">
          <p>
            Provide designers with access to stock photography and assets, and
            integrate with your DAM or brand management system.
            </p>
          <p className="logos">
            <img src={SiliconPublishingLogo} alt="Silicon Publishing logo" title="Silicon Publishing" />
            <img src={UIFacesLogo} alt="UI Faces logo" title="UI Faces" />
            <img src={IconScoutLogo} alt="Icon Scout logo" title="Icon Scout" />
          </p>
        </Card>
        <Card level="h4" title="Automation &amp; Utility">
          <p>
            Help designers automate repetitive or tedious tasks. Unleash their
            creativity by enabling generative and data-driven designs.
            </p>
          <p className="logos">
            <img src={AirTableLogo} title="Airtable" alt="Airtable logo" />
            <img style={{ height: 96, margin: "-32px 0" }} src={ImpekableLogo} alt="Impekable Logo" title="Impekable" />
            <img src={StarkLogo} title="Stark" alt="Stark logo" />
          </p>
        </Card>
      </Cards>
      <Cards
        backgroundColor="white"
        footing={
          <p style={{ textAlign: "center" }}>
            See the <a href="//adobexdplatform.com/plugin-docs">documentation</a> for everything you can do.
              Take a look at the <a href="//adobexdplatform.com/plugin-docs/plugin-api-roadmap.html">roadmap</a> to see what's coming.
            </p>
        }
      >
        <Card level="h4" title="Publish &amp; Handoff">
          <p>
            Make publishing and handoff a breeze by integrating with online
            services and content management systems.
            </p>
          <p className="logos">
            <img src={DribbbleLogo} title="Dribbble" alt="Dribbble logo" />
            <img src={BehanceLogo} title="Behance" alt="Behance logo" />
            <img src={UserTestingLogo} title="UserTesting" alt="UserTesting logo" />
          </p>
        </Card>
        <Card level="h4" title="Designer &amp; Stakeholder Collaboration">
          <p>
            Enhance collaboration between designers and stakeholders by
            integrating with the workflow services your team uses.
            </p>
          <p className="logos">
            <img src={TrelloLogo} title="Trello" alt="Trello logo" />
            <img src={SlopeLogo} title="Slope" alt="Slope logo" />
            <img src={InMotionNowLogo} title="InMotionNow" alt="InMotionNow logo" />
          </p>
        </Card>
      </Cards>
      <Cards heading={"Community Resources"} level={"h2"}>
        <Card level="h4" title="Developer Community" img={devCommunitySVG}>
          <p>
            Engage with other Adobe XD Platform developers by sharing tips and
            tricks, asking questions, and providing feedback to other
            developers.
            </p>
          <a href="//adobexdplatform.com/plugin-docs/community.html">Join the community</a>
        </Card>
        <Card level="h4" title="User Community" img={userCommunitySVG}>
          <p>
            See how your plugins are being used, provided answers to user
            questions, and get inspiration for your next plugin idea.
            </p>
          <a href="https://adobexd.uservoice.com/">Learn more about users</a>
        </Card>
      </Cards>
      <Footer />
    </Fragment>
  );
}