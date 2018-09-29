import React from "react";

export default function Card({ img, title, children, level = "h3", imgAlt="" } = {}) {
  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      flex: "1 1 256px",
      padding: 24
    },
    img: {
      height: 128,
      width: 128,
      margin: "auto auto"
    },
    h3: {
      textAlign: "center",
      padding: 24,
      fontSize: 24,
      fontWeight: 300,
      margin: 0
    },
    h4: {
      textAlign: "center",
      padding: 24,
      fontSize: 20,
      fontWeight: 300,
      margin: 0
    },
    body: {
      margin: 0,
      padding: "0 24px",
      textAlign: "center",
      fontWeight: "normal",
      fontSize: 16
    }
  };
  return (
    <div style={styles.wrapper}>
      {img && <img style={styles.img} src={img} alt={imgAlt} />}
      <div style={styles[level]}>{title}</div>
      <div style={styles.body}>{children}</div>
    </div>
  );
}
