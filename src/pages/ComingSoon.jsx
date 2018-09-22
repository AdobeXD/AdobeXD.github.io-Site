import React, {Fragment} from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import Hero from "../components/Hero.jsx";
import Button from "../components/Button.jsx";

import Picasso from "../assets/Merchandising@2x.png";
import buildSVG from "../assets/undraw_building_blocks_n0nc.svg";
import shareSVG from "../assets/undraw_work_chat_erdt.svg";
import devCommunitySVG from "../assets/undraw_co-working_825n.svg";
import userCommunitySVG from "../assets/undraw_community_8nwl.svg";

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
    return (
      <Fragment>
        <Header items={[]} />
        <Hero heading={"The world of XD plugin creation...coming soon!"}
        footing={
                    <Button target="_blank" href="https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=BPQ22V">
                        Get Launch Notification
                    </Button>
                }>
          <img src={Picasso}/>
        </Hero>
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
            <p class="logos">
              <img src={SiliconPublishingLogo} title="Silicon Publishing" />
              <img src={UIFacesLogo} title="UI Faces" />
              <img src={IconScoutLogo} title="Icon Scout" />
            </p>
          </Card>
          <Card level="h4" title="Automation &amp; Utility">
            <p>
              Help designers automate repetitive or tedious tasks. Unleash their
              creativity by enabling generative and data-driven designs.
            </p>
            <p class="logos">
              <img src={AirTableLogo} title="Airtable" />
              <img src={ImpekableLogo} title="Impekable" />
              <img src={StarkLogo} title="Stark" />
            </p>
          </Card>
        </Cards>
        <Cards
          backgroundColor="white"
        >
          <Card level="h4" title="Publish &amp; Handoff">
            <p>
              Make publishing and handoff a breeze by integrating with online
              services and content management systems.
            </p>
            <p class="logos">
              <img src={DribbbleLogo} title="Dribbble" />
              <img src={BehanceLogo} title="Behance" />
              <img src={UserTestingLogo} title="UserTesting" />
            </p>
          </Card>
          <Card level="h4" title="Designer &amp; Stakeholder Collaboration">
            <p>
              Enhance collaboration between designers and stakeholders by
              integrating with the workflow services your team uses.
            </p>
            <p class="logos">
              <img src={TrelloLogo} title="Trello" />
              <img src={SlopeLogo} title="Slope" />
              <img src={InMotionNowLogo} title="InMotionNow" />
            </p>
          </Card>
        </Cards>
        <Cards heading={"Community Resources"} level={"h2"}>
          <Card level="h4" title="Adobe Tech Blog">
            <p>
              Follow the Adobe Tech Blog for early news and articles about XD Plugins.
            </p>
            <a href="https://medium.com/adobetech">Read the blog</a>
          </Card>
          <Card level="h4" title="User Community">
            <p>
              See what users want from Adobe XD plugins and get inspiration for your first plugin idea.
            </p>
            <a href="https://adobexd.uservoice.com/forums/353007-adobe-xd-feature-requests?category_id=159993">Learn more about users</a>
          </Card>
        </Cards>
        <Cards backgroundColor="#2C2C2C">
          <p className="footer" >
            &copy; Copyright 2018 Adobe. All rights reserved.
            {" / "}<a target="_blank" href="https://www.adobe.com/privacy.html">Privacy</a>
            {" / "}<a target="_blank" href="https://www.adobe.com/legal/terms.html">Terms of Use</a>
            {/*{" / "}<a href="#">Cookies</a>
            {" / "}<a href="#">Ad Choices</a>*/}
          </p>
        </Cards>
      </Fragment>
    );
  }