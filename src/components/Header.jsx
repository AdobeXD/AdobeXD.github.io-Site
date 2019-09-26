import React from "react";

import logo from "../assets/xd-logo.png";

export default function Header({ items = [] } = {}) {
  const styles = {
    heading: {
      height: 96,
      display: "flex",
      flexDirection: "row",
      alignItems: "baseline"
    },
    logo: {
      height: 48,
      width: 48,
      margin: 24,
      marginTop: 10,
      position: "relative",
      top: 14
    },
    h1: {
      fontSize: 24
    },
    ul: {
      listStyle: "none"
    },
    li: {
      display: "inline-block",
      marginRight: 24,
      fontSize: 14
    },
    a: {
      color: "#FF26BE",
      fontWeight: "bold",
      textDecoration: "none"
    },
    button: {
      fontSize: "12px",
      fontWeight: 700,
      borderWidth: "2px",
      borderRadius: "1rem",
      paddingRight: "1rem",
      paddingLeft: "1rem",
      backgroundColor: "#1473e6",
      borderColor: "#1473e6",
      lineHeight: ".875rem",
      textAlign: "center",
      whiteSpace: "nowrap",
      userSelect: "none",
      border: "1px solid transparent",
      padding: ".4375rem 1rem",
      transition: "all .2s ease-in-out",
      overflow: "visible",
      textTransform: "none",
      marginTop: "10px",
      marginLeft: "450px",
      width: "100px",
      height: "40px",
      borderRadius: "20px",
      float: "right"
    }
  };

  return (
    <header style={styles.heading}>
      <img style={styles.logo} src={logo} alt="Adobe XD logo" />
      <h1 style={styles.h1}>Adobe XD Platform</h1>
      <ul style={styles.ul}>
        {items.map((item, idx) => (
          <li key={idx} style={styles.li}>
            <a style={styles.a} href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="https://console.adobe.io/plugins">
        <button style={styles.button} type="button"> I/O Console</button>
      </a>
    </header>
  );
}
