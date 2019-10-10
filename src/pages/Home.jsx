import React, { Fragment } from "react";

import Header from "../components/Header.jsx";
import Card from "../components/Card.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import FeatureBoard from "../components/FeatureBoard.jsx";
import Cards from "../components/Cards.jsx";
import Description from "../components/Description.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";

import createPNG from "../assets/xd_web_create.png";
import mainPNG from "../assets/main@2x.png";
import updatePluginPNG from "../assets/update-your-plugin@2x.png";
import logoPNG from "../assets/logo.png";
import featureLogoPNG from "../assets/feature-plugin@2x.png";
import marketplacePNG from "../assets/Marketplace@3x.png";
import pluginPNG from "../assets/Essential-Plugins@2x.png";
import cloudPNG from "../assets/Connect-Your-Tools@2x.png";
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
    left: {
      width: "55%",
      height: "100%"
    },
    right: {
      width: "35%",
      marginTop: -100,
      marginLeft: 100
    },
    row: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 150
    },
    market: {
      width: "100%",
      height: "100%",
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
  }
  return (
    <Fragment>
      <Header items={items} />
      <Cards justifyContent="flex-start" height={580} wrapperPaddingBottom={0}>
        <Description width="55%" textFontSize={45} tagFontSize={70} title="Adobe XD Platform" text="Push the boundaries of design work">
        </Description>
        <Card level="h4" img={mainPNG} marginLeft={100} width="35%" imgWidth="100%" imgHeight="100%">
        </Card>
      </Cards>
      <Cards backgroundColor="white" height={200} justifyContent="center">
        <Description marginTop={100} width={1000} color="black" align="center" tagFontSize={45} textFontSize={45} title="Documentation" text="Everything you need to build and share your work">
        </Description>
      </Cards>
      <Cards backgroundColor="white" height={400} justifyContent="center" marginLeft="20%" marginRight="20%">
        <Card level="h4" img={pluginPNG} width="auto" title="Plugin APIs" children="Bring your product to XD">
        </Card>
        <Card level="h4" img={cloudPNG} width="auto" marginLeft={0} title="Cloud APIs" children="Bring XD designs to your product">
        </Card>
      </Cards>
      <Cards height={200} justifyContent="flex-start">
        <Description marginTop={50} tagFontSize={50} color="white" title="What you can build" >
        </Description>
      </Cards>
      <Cards height={30} justifyContent="flex-start">
        <Description width="100%" tagFontSize={30} color="white" rightTag="Create your own plugin" title="XD Plugins" >
        </Description>
      </Cards>
      <Cards height={100} justifyContent="flex-start">
        <Description width={839} textFontSize={24} color="white" text="Designers who use Adobe XD rely on plugins to help them move even faster and deliver incredible designs. XD plugins provide users with new functionality built by developers of all sizes, from all over the world.">
        </Description>
      </Cards>
      <Cards height={330} marginLeft={16}>
        <FeatureCard name="Frontify" img={createPNG} width="13%" height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Collaboration" imgHeight={80} imgWidth={80}>

        </FeatureCard>
        <FeatureCard name="Frontify" img={createPNG} width="13%" height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Tools & Automation" imgHeight={80} imgWidth={80} marginLeft={20}>

        </FeatureCard>
        <FeatureCard name="Frontify" img={createPNG} width="13%" height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Publish & Handoff" imgHeight={80} imgWidth={80} marginLeft={20}>

        </FeatureCard>
        <FeatureCard name="Frontify" img={createPNG} width="13%" height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Usability & Testing" imgHeight={80} imgWidth={80} marginLeft={20}>

        </FeatureCard>
        <FeatureCard name="Frontify" img={createPNG} width="13%" height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Design Assets" imgHeight={80} imgWidth={80} marginLeft={20}>

        </FeatureCard>
      </Cards>
      <Cards height={30} justifyContent="flex-start">
        <Description width="100%" tagFontSize={30} color="white" rightTag="Start integrating today" title="XD Cloud Integrations" >
        </Description>
      </Cards>
      <Cards height={450} marginLeft={16} textAlign="left">
        <FeatureBoard text="The Adobe XD and Jira Software Cloud integration lets designers associate XD prototypes and design specs with Jira issues to keep projects organized and provide developers with everything they need to know in the environment they know." title="Design & develop together" color="white" img={logoPNG} img2={featureLogoPNG} tagFontSize={24} height="90%" backgroundColor="rgba( 0, 0, 0, 0.05 )" imgHeight="100%" imgWidth="100%">

        </FeatureBoard>
      </Cards>
      <Cards height={250} backgroundColor="#F4F4F4" justifyContent="flex-start">
        <Description width={839} textFontSize={24} color="black" title="Showcase it in XD" text="Adobe XD brings plugin and integration discovery right to where designers spend their time: in Adobe XD. The XD Plugin Manager is the place to be if you want to reach XD users with your product.">
        </Description>
      </Cards>
      <Cards height={600} backgroundColor="#F4F4F4" justifyContent="flex-start">
        <div style={styles.left}>
          <img src={marketplacePNG} style={styles.market}></img>
        </div>
        <div style={styles.right}>
          <Description marginTop={50} tagFontSize={24} width="100%" textFontSize={24} color="black" title="List your product" text="You can list your plugins and integrations with a description, screenshots, icons, help URL, localization, and more.">
          </Description>
          <Description marginTop={50} tagFontSize={24} width="100%" textFontSize={24} color="black" title="Link to your listing" text="The XD Plugin Manager supports deep links, meaning you can create a unique URL that opens the XD Plugin Manager right to your listing.">
          </Description>
          <Description marginTop={50} tagFontSize={24} width="100%" textFontSize={24} color="black" title="Get discovered" text="Users know that the place to find XD plugins and integrations is the XD Plugin Manager, where they can browse, search, and manage their plugins.">
          </Description>
        </div>
      </Cards>
      <Cards height={850} backgroundColor="white" justifyContent="flex-start">
        <Description marginTop={50} tagFontSize={50} width="100%" color="black" title="Community & Support">
        </Description>
        <div style={styles.row}>
          <Card level="h4" img={mainPNG} marginLeft={16} imgWidth="100%" imgHeight="100%" children="Join the XD Platform forums">
          </Card>
          <Card level="h4" img={mainPNG} marginLeft={100} imgWidth="100%" imgHeight="100%" children="Sign up for the CC Developer Newsletter">
          </Card>
          <Card level="h4" img={mainPNG} marginLeft={100} imgWidth="100%" imgHeight="100%" children="Visit Adobe XD on GitHub">
          </Card>
        </div>
      </Cards>
      <Footer />
    </Fragment >
  );
}