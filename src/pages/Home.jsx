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
import collaborationPNG from "../assets/collaboration.png";
import designSVG from "../assets/design.svg";
import toolsPNG from "../assets/tools.png";
import usabilityPNG from "../assets/usability.png";
import publishSVG from "../assets/publish.svg";
import forumSVG from "../assets/forum.svg";
import newsletterSVG from "../assets/newsletter.svg";
import githubSVG from "../assets/github.svg";
import jiraSVG from "../assets/jira.svg";
import mainPNG from "../assets/main@2x.png";
import rightPNG from "../assets/right.png";
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
    { label: "Cloud Content APIs", href: "//adobexdplatform.com/cloud-api-docs/" },
    { label: "Community & Support", href: "//adobexdplatform.com/community-and-support" }
  ];
  const styles = {
    row: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
      paddingLeft: 20,
      width: "100%"
    },
    market: {
      width: 730,
      height: 770,
      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      float: "left"
    }
  }
  return (
    <Fragment>
      <Header items={items} />
      <Cards justifyContent="flex-start" height={440} wrapperPaddingBottom={0}>
        <Description padding={0} width="50%" textFontSize={24} tagFontSize={45} title="Adobe XD Platform" text="Push the boundaries of design work even further">
        </Description>
        <Card level="h4" space={0} img={mainPNG} marginLeft="15%" width="30%" imgWidth={463} imgHeight={310}>
        </Card>
      </Cards>
      <Cards backgroundColor="white" height="auto" justifyContent="center" wrapperPaddingBottom={5}>
        <Description marginTop={20} width={1000} color="black" align="center" tagFontSize={35} textFontSize={24} title="Documentation and resources" text="Everything you need to extend the Adobe XD experience">
        </Description>
      </Cards>
      <Cards wrapperPaddingBottom={20} marginLeft={"20%"} marginRight={"20%"} minWidth={500} paddingTop={0} backgroundColor="white" height="auto" justifyContent="center">
        <Card level="h4" bodyWidth={400} space={20} img={pluginPNG} imgWidth={243} imgHeight={162} width="40%" title="Plugin APIs" children="Bring new capabilities to XD" link="Create a plugin">
        </Card>
        <Card level="h4" bodyWidth={400} space={20} img={cloudPNG} imgWidth={243} imgHeight={162} width="40%" marginLeft={0} title="Cloud Content APIs" children="Connect XD designs to your product" link="Start integrating">
        </Card>
      </Cards>
      <Cards height="auto" justifyContent="flex-start" wrapperPaddingBottom={10}>
        <Description marginTop={30} tagFontSize={27} color="white" title="See what developers are building" >
        </Description>
      </Cards>
      <Cards height={100} justifyContent="flex-start" wrapperPaddingBottom={15}>
        <Description width="100%" tagFontSize={15} color="white" rightTag="Create your own plugin" title="XD Plugins" text="Developers extend XD's core functionality with these types of plugins and more, all powered by the XD Plugin APIs." >
        </Description>
      </Cards>
      <Cards height="auto" marginLeft={32} wrapperPaddingBottom={10}>
        <FeatureCard body="Enhance teamwork with connected workflows" img={collaborationPNG} width="20%" height={247} backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Collaboration" imgHeight={41} imgWidth={41}>

        </FeatureCard>
        <FeatureCard body="Accelerate design work with new and unique features" img={toolsPNG} width="20%" height={247} backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Tools & Automation" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Enable designers to share their work anywhere" img={publishSVG} width="20%" height={247} backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Publish & Handoff" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Help designers ensure their work connects with users" img={usabilityPNG} width="20%" height={247} backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Usability & Testing" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Provide direct access to icons, images, data, and more" img={designSVG} width="20%" height={247} backgroundColor="rgba( 0, 0, 0, 0.05 )" title="Design Assets" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
      </Cards>
      <Cards height={100} justifyContent="flex-start" wrapperPaddingBottom={10}>
        <Description width="100%" tagFontSize={15} color="white" rightTag="Start integrating today" title="XD Cloud Content Integrations" text="With the XD Cloud Content APIs, you can bring design work created in XD directly to your product or service.">
        </Description>
      </Cards>
      <Cards height="auto" marginLeft={32} textAlign="left">
        <FeatureBoard link="Learn more" text="The Adobe XD and Jira Software Cloud integration uses the XD Cloud Content APIs to let designers associate XD prototypes and design specs with Jira issues. This keeps projects organized while providing developers with everything they need to know in the environment they know." title="Bringing designers and developers together" color="white" img={jiraSVG} img2={featureLogoPNG} tagFontSize={14} height="100%" backgroundColor="rgba( 0, 0, 0, 0.05 )" imgHeight={60} imgWidth={300}>

        </FeatureBoard>
      </Cards>
      <Cards paddingTop={30} marginLeft={25} width={760} wrapperPaddingBottom={20} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <Description center={true} marginTop={50} width="100%" textFontSize={24} tagFontSize={30} color="black" title="Showcase it in XD" text="The XD Plugin Manager lets designers discover plugins and integrations right where they spend their time: in Adobe XD.">
        </Description>
      </Cards>
      <Cards paddingTop={10} marginLeft={40} wrapperPaddingBottom={20} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <div class="left">
          <img src={marketplacePNG} style={styles.market}></img>
        </div>
        <div class="right">
          <Card level="h4" img={rightPNG} imgWidth={245} imgHeight={246}></Card>
          <Description padding={0} marginTop={30} tagFontSize={15} width="100%" textFontSize={15} color="black" title="List your product" text="You can list your plugins and integrations with a description, screenshots, and more.">
          </Description>
          <Description padding={0} marginTop={36} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Link to your listing" text="You'll get a unique URL that opens the XD Plugin Manager right to your plugin listing.">
          </Description>
          <Description padding={0} marginTop={36} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Get discovered" text="Users can browse and search for any plugin you publish in the XD Plugin Manager.">
          </Description>
        </div>
      </Cards>
      <Cards height="auto" backgroundColor="white" justifyContent="flex-start">
        <Description marginTop={50} tagFontSize={30} width="100%" color="black" title="Community & Support">
        </Description>
        <div style={styles.row}>
          <Card level="h4" space={10} img={forumSVG} marginLeft={16} imgWidth={"100%"} imgHeight={"auto"} children="Join the XD Platform forums">
          </Card>
          <Card level="h4" space={10} img={newsletterSVG} marginLeft={20} imgWidth={"100%"} imgHeight={"auto"} children="Sign up for the CC Developer Newsletter">
          </Card>
          <Card level="h4" space={10} img={githubSVG} marginLeft={20} imgWidth={"100%"} imgHeight={"auto"} children="Visit Adobe XD on GitHub">
          </Card>
        </div>
      </Cards>
      <Footer />
    </Fragment >
  );
}