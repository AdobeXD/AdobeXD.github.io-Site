import React, {Fragment} from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";
import Button from "../components/Button.jsx";

import createSVG from "../assets/undraw_blank_canvas_3rbb.svg";
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
    const items = [
      { label: "Overview", href: "#" },
      { label: "Quick Start", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Samples", href: "#" },
      { label: "Community", href: "#" },
      //{ label: "I/O Console", href: "#" }
      { label: "Submit Plugin", href: "#", type: "cta" }
    ];
    return (
      <Fragment>
        <Header items={items} />
        <Cards heading={"Welcome to the world of XD plugin creation"}>
          <Card title="Create" img={createSVG}>
            Start by creating your plugin in the Adobe I/O Developer Console
          </Card>
          <Card title="Build" img={buildSVG}>
            Build and test your plugin inside Adobe XD
          </Card>
          <Card title="Share" img={shareSVG}>
            Share with others by submitting it to the XD plugin manager
          </Card>
        </Cards>
        <Button href="#">Quick Start</Button>
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
              <img src={SiliconPublishingLogo} />
              <img src={UIFacesLogo} />
              <img src={IconScoutLogo} />
            </p>
          </Card>
          <Card level="h4" title="Automation &amp; Utility">
            <p>
              Help designers automate repetitive or tedious tasks. Unleash their
              creativity by enabling generative and data-driven designs.
            </p>
            <p className="logos">
              <img src={AirTableLogo} />
              <img src={ImpekableLogo} />
              <img src={StarkLogo} />
            </p>
          </Card>
        </Cards>
        <Cards
          backgroundColor="white"
          footing={
            <p style={{ textAlign: "center" }}>
              See the <a href="#">documentation</a> for everything you can do.
              Take a look at the <a href="#">roadmap</a> to see what's coming.
            </p>
          }
        >
          <Card level="h4" title="Publish &amp; Handoff">
            <p>
              Make publishing and handoff a breeze by integrating with online
              services and content management systems.
            </p>
            <p className="logos">
              <img src={DribbbleLogo} />
              <img src={BehanceLogo} />
              <img src={UserTestingLogo} />
            </p>
          </Card>
          <Card level="h4" title="Designer &amp; Stakeholder Collaboration">
            <p>
              Enhance collaboration between designers and stakeholders by
              integrating with the workflow services your team uses.
            </p>
            <p className="logos">
              <img src={TrelloLogo} />
              <img src={SlopeLogo} />
              <img src={InMotionNowLogo} />
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
            <a href="#">Join the community</a>
          </Card>
          <Card level="h4" title="User Community" img={userCommunitySVG}>
            <p>
              See how your plugins are being used, provided answers to user
              questions, and get inspiration for your next plugin idea.
            </p>
            <a href="#">Learn more about users</a>
          </Card>
        </Cards>
        <Cards backgroundColor="#666666">
          <p style={{ color: "#EAEAEA", padding: 48, paddingBottom: 0 }}>
            &copy; Copyright 2018 Adobe. All rights reserved. Illustrations by{" "}
            <a href="https://undraw.co/" target="_blank">
              unDraw
            </a>. Trademarks and reserved names used by permission of their
            respective holders.
          </p>
        </Cards>
      </Fragment>
    );
  }