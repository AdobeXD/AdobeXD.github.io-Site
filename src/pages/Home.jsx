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
import frontify from "../assets/frontify@3x.png";
import jira from "../assets/jira@3x.png";
import arranger from "../assets/arranger@3x.png";
import renameit from "../assets/renameit@3x.png";
import quest from "../assets/quest@3x.png";
import stark from "../assets/stark@3x.png";
import usertesting from "../assets/usertesting@3x.png";
import uifaces from "../assets/uifaces@3x.png";
import icondrop from "../assets/icondrop@3x.png";
import overflow from "../assets/overflow@3x.png";
import righttopPNG from "../assets/right-top@3x.png";
import collaborationPNG from "../assets/collaboration.png";
import designSVG from "../assets/design.svg";
import toolsPNG from "../assets/tools.png";
import usabilityPNG from "../assets/usability.png";
import publishSVG from "../assets/publish.svg";
import chevronSVG from "../assets/chevron.svg";
import forumSVG from "../assets/forum.svg";
import newsletterSVG from "../assets/newsletter.svg";
import githubSVG from "../assets/github.svg";
import jiraSVG from "../assets/jirawide.svg";
import mainPNG from "../assets/main@3x.png";
import mainSVG from "../assets/main.svg";
import rightPNG from "../assets/right.png";
import updatePluginPNG from "../assets/update-your-plugin@2x.png";
import logoPNG from "../assets/logo.png";
import featureLogoPNG from "../assets/feature-plugin@2x.png";
import marketplacePNG from "../assets/marketplace-desktop@3x.png";
import pluginPNG from "../assets/Essential-Plugins@3x.png";
import cloudPNG from "../assets/Connect-Your-Tools@3x.png";
import pluginSVG from "../assets/Plugin-APIs.svg";
import cloudSVG from "../assets/Cloud-APIs.svg";
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

const cloudLink = "https://adobexdplatform.com/cloud-content-api-docs/";
const pluginLink = "https://adobexdplatform.com/plugin-docs/";
const communityLink = "https://adobexdplatform.com/community-and-support/";
const homeLink = "https://adobexdplatform.com/";
const consoleLink = "https://console.adobe.io";
const cloudConsoleLink = "https://adobe.allegiancetech.com/cgi-bin/qwebcorporate.dll?JDQ78F";
const forumLink = "https://forums.adobexdplatform.com";
const newsletterLink = "https://www.adobe.com/subscription/ccdevnewsletter.html"
const githubLink = "https://github.com/AdobeXD";
const blogUrl = "https://theblog.adobe.com/adobe-xd-for-jira-cloud-streamline-design-to-development-workflows/";

export default function Home() {
  const items = [
    { label: "Plugin APIs", href: pluginLink },
    { label: "Cloud Content APIs", href: cloudLink },
    { label: "Community & Support", href: communityLink }
  ];
  const styles = {
    row: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 10,
      paddingLeft: 20,
      width: "100%"
    }
  }
  return (
    <Fragment>
      <Header items={items} home={homeLink} />
      <Cards marginLeft={20} justifyContent="flex-start" height={440} wrapperPaddingBottom={0} buffer={96} backgroundColor="#721957">
        <Description banner={true} textWeight={400} bodyMarginBottom={0} padding={0} width="50%" textFontSize={24} tagFontSize={45} title="Adobe XD Platform" text="Push the boundaries of design work">
        </Description>
        <Card level="h4" space={0} img={mainSVG} imgAlt="Adobe XD Platform" marginLeft="5%" width="45%">
        </Card>
      </Cards>
      <Cards backgroundColor="white" height="auto" justifyContent="center" wrapperPaddingBottom={5}>
        <Description paddingBottom={12} tagBottomMargin={6} marginTop={40} width={1000} color="black" align="center" tagFontSize={30} textWeight={400} textFontSize={24} title="Documentation" text="Everything you need to extend the Adobe XD experience">
        </Description>
      </Cards>
      <Cards twoApis={true} wrapperPaddingBottom={40} minWidth={300} paddingTop={0} backgroundColor="white" height="auto" justifyContent="center">
        <Card bodyWeight={200} outerAlignItems="flex-end" level="h4" space={20} img={pluginSVG} imgAlt="XD Plugin APIs" title="Plugin APIs" href={pluginLink} children="Bring your ideas and features to XD" link="Create a plugin">
        </Card>
        <Card bodyWeight={200} outerAlignItems="flex-start" level="h4" spaceTop={18} space={18} img={cloudSVG} imgAlt="XD Cloud Content APIs" marginLeft={0} title="Cloud Content APIs" href={cloudLink} children="Connect XD designs to your product" link="Start integrating">
        </Card>
      </Cards>
      <Cards wrapperMarginBottom={-1} height="auto" justifyContent="flex-start" wrapperPaddingBottom={0}>
        <Description paddingBottom={0} marginTop={30} tagFontSize={30} color="white" title="See what developers are building" >
        </Description>
      </Cards>
      <Cards wrapperMarginBottom={-1} height={100} justifyContent="flex-start" wrapperPaddingBottom={15}>
        <Description paddingBottom={10} arrowSVG={chevronSVG} imgAlt="Create your own plugin" width="100%" tagFontSize={24} color="white" rightTag="Create your own plugin" href={pluginLink} title="XD Plugins" text="Developers extend XD's core functionality with these types of plugins and more, all powered by the XD Plugin APIs." >
        </Description>
      </Cards>
      <Cards wrapperMarginBottom={-1} height="auto" marginLeft={32} wrapperPaddingBottom={10}>
        <FeatureCard body="Connect designers with their teams and stakeholders" img={frontify} href="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=30cb8db1" href2="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=28192327" imgAlt="Frontify" img2={jira} imgAlt2="Jira" width="20%" height={243} backgroundColor="#505050" title="Collaboration" imgHeight={41} imgWidth={41}>

        </FeatureCard>
        <FeatureCard body="Accelerate design work with new and unique features" img={arranger} imgAlt="Arranger" href="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=f0aac907" href2="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=bcd7a3a9" img2={renameit} imgAlt2="Rename It" width="20%" height={243} backgroundColor="#505050" title="Tools & Automation" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Enable designers to share their work anywhere" img={quest} href="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=2c680b2b" href2="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=232cee78" imgAlt="Quest" img2={overflow} imgAlt2="Overflow" width="20%" height={243} backgroundColor="#505050" title="Publish & Handoff" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Help designers ensure their work connects with users" img={stark} href="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=6cbf275e" href2="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=713b61ec" imgAlt="Stark" img2={usertesting} imgAlt2="UserTesting" width="20%" height={243} backgroundColor="#505050" title="Usability & Testing" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
        <FeatureCard body="Provide direct access to icons, images, data, and more" img={uifaces} href="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=aa845143" href2="https://adobe.com/go/xd_plugins_discover_plugin?pluginId=570d8b62" imgAlt="UI Faces" img2={icondrop} imgAlt2="Icondrop" width="20%" height={243} backgroundColor="#505050" title="Design Assets" imgHeight={41} imgWidth={41} marginLeft={20}>

        </FeatureCard>
      </Cards>
      <Cards wrapperMarginBottom={-1} height={100} justifyContent="flex-start" wrapperPaddingBottom={15}>
        <Description paddingBottom={15} arrowSVG={chevronSVG} imgAlt="Start integrating today" width="100%" tagFontSize={24} color="white" rightTag="Start integrating today" href={cloudLink} title="XD Cloud Content Integrations" text="With the XD Cloud Content APIs, you can bring design work created in XD directly to your product or service.">
        </Description>
      </Cards>
      <Cards height="auto" marginLeft={32} textAlign="left" wrapperPaddingBottom={40}>
        <FeatureBoard link="Learn more" linkUrl={blogUrl} text="The Adobe XD and Jira Software Cloud integration uses the XD Cloud Content APIs to let designers associate XD prototypes and design specs with Jira issues. This keeps projects organized while providing developers with everything they need to know in the environment they know." title="Bringing designers and developers together" color="white" img={jiraSVG} imgAlt="Adobe XD and Jira Software Cloud" img2={featureLogoPNG} imgAlt2="Adobe XD and Jira Software Cloud video" tagFontSize={15} height="100%" backgroundColor="#505050" imgHeight={60} imgWidth={300}>
        </FeatureBoard>
      </Cards>
      <Cards paddingTop={60} marginLeft={20} wrapperPaddingBottom={16} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <Description center={true} marginTop={40} width="100%" textFontSize={24} tagFontSize={30} color="black" title="Showcase it in XD" >
        </Description>
      </Cards>

      <Cards paddingTop={0} marginLeft={40} wrapperPaddingBottom={40} height="auto" backgroundColor="#F4F4F4" justifyContent="flex-start">
        <div class="middle-section">
          <div class="left">
            <img src={marketplacePNG} title="XD Plugin Manager" class="market"></img>
          </div>
          <div class="right">
            <img src={righttopPNG} title="Open the XD Plugin Manager" class="righttop"></img>
            <div class="topText">
              <p class="normal">Plugin Manager</p>
              <p>The XD Plugin Manager lets designers discover plugins and integrations right where they spend their time: in Adobe XD.</p>
              <a style={styles.a} href="https://adobexd.app.link/IxAIxfGzjZ">Open in XD</a>
              <Description padding={0} paddingBottom={0} marginTop={24} tagFontSize={15} width="100%" textFontSize={15} color="black" title="List your product" text="You can publish your plugins and integrations with a description, screenshots, and more.">
              </Description>
              <Description padding={0} paddingBottom={0} marginTop={24} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Link to your listing" text="You'll get a unique URL that opens the XD Plugin Manager right to your plugin listing.">
              </Description>
              <Description padding={0} paddingBottom={0} marginTop={24} tagFontSize={15} width="100%" textFontSize={15} color="black" title="Get discovered" text="Users can visit the XD Plugin Manager to browse and search for plugins you publish.">
              </Description>
            </div>
          </div>
        </div>
      </Cards>
      <Cards height="auto" backgroundColor="white" justifyContent="flex-start" wrapperPaddingBottom={0}>
        <Description marginTop={30} paddingBottom={16} tagFontSize={30} width="100%" color="black" title="Community & Support">
        </Description>
      </Cards>
      <Cards marginLeft={20} height="auto" backgroundColor="white" wrapperPaddingBottom={60} justifyContent="space-between">
        <Card imgMaxWidth="100%" level="h4" bodyHeight={30} space={12} href={forumLink} img={forumSVG} imgAlt="XD Platform developer forums" marginLeft={16} children="Join the XD Platform forums">
        </Card>
        <Card imgMaxWidth="100%" level="h4" bodyHeight={30} space={12} href={newsletterLink} img={newsletterSVG} imgAlt="CC Developer Newsletter" marginLeft={20} children="Sign up for the CC Developer Newsletter">
        </Card>
        <Card imgMaxWidth="100%" level="h4" bodyHeight={30} space={12} href={githubLink} img={githubSVG} imgAlt="Adobe XD on GitHub" marginLeft={20} children="Visit Adobe XD on GitHub">
        </Card>
      </Cards>
      <Footer />
    </Fragment >
  );
}