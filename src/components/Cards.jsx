import React from "react";

export default function Cards({
  heading,
  footing,
  level = "h1",
  children,
  backgroundColor = "#242F6F",
  backgroundImage,
  justifyContent = "center",
  height = 648,
  paddingLeft = "10%",
  paddingRight = "10%",
  marginLeft,
  marginRight,
  wrapperPaddingBottom = 35,
  width = 1750,
  flexDirection = "row",
  textAlign = "center",
  paddingTop,
  minWidth = 800,
  buffer
} = {}) {
  const styles = {
    wrapper: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: "cover",
      backgroundColor,
      paddingBottom: wrapperPaddingBottom,
      paddingLeft,
      paddingRight,
      height,
      paddingTop: buffer
    },
    h1: {
      fontWeight: 200,
      textAlign,
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 32
    },
    h2: {

      fontWeight: 700,
      textAlign,
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 20
    },
    cards: {
      display: "flex",
      flexDirection,
      justifyContent,
      alignItems: "center",
      textAlign,
      flexWrap: "wrap",
      minWidth,
      maxWidth: width,
      marginLeft,
      marginRight,
      padding: "12 24",
      paddingTop,
      height: "100%"
    }
  };
  return (
    <div style={styles.wrapper}>
      {heading && <div style={styles[level]}>{heading}</div>}
      <div style={styles.cards}>{children}</div>
      {/* {footing} */}
    </div>
  );
}
