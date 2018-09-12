import React from "react";

export default function Hero({
  heading,
  footing,
  level = "h1",
  children,
  backgroundColor = "#F5F5F5",
  backgroundImage,
  color = "#323232",
} = {}) {
  const styles = {
    wrapper: {
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      backgroundSize: "cover",
      backgroundColor,
      paddingBottom: 48,
      color
    },
    h1: {
      fontWeight: 200,
      textAlign: "center",
      padding: 0,
      paddingTop: 48,
      margin: 0,
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
    body: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "nowrap",
      minWidth: 900,
      maxWidth: 1200,
      margin: "auto auto"
    }
  };
  return (
    <div className="hero" style={styles.wrapper}>
      {heading && <div style={styles[level]}>{heading}</div>}
      <div style={styles.body}>{children}</div>
      {footing}
    </div>
  );
}
