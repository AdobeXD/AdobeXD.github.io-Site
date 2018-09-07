import React from "react";

export default function Cards({
  heading,
  footing,
  level = "h1",
  children,
  backgroundColor = "#F5F5F5",
  backgroundImage
} = {}) {
  const styles = {
    wrapper: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: "cover",
      backgroundColor,
      paddingBottom: 48
    },
    h1: {
      fontWeight: 200,
      textAlign: "center",
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 32
    },
    h2: {
      fontWeight: 700,
      textAlign: "center",
      padding: 0,
      paddingTop: 48,
      margin: 0,
      marginBottom: 24,
      fontSize: 20
    },
    cards: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      flexWrap: "wrap",
      minWidth: 900,
      maxWidth: 1200,
      margin: "auto auto"
    }
  };
  return (
    <div style={styles.wrapper}>
      {heading && <div style={styles[level]}>{heading}</div>}
      <div style={styles.cards}>{children}</div>
      {footing}
    </div>
  );
}
