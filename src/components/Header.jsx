import React from "react";

import logo from "../assets/xd-logo.png";

export default function Header({ items = [] } = {}) {
  const styles = {
    heading: {
      height: 96,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: 120
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
      listStyle: "none",
      marginLeft: 50,
      marginTop: 15
    },
    li: {
      display: "inline-block",
      marginRight: 24,
      fontSize: 14,
      fontFamily: "roboto, medium"
    },
    a: {
      color: "#323232",
      textDecoration: "none",
      fontWeight: 500
    },
    aButton: {
      marginLeft: "auto",
      marginRight: "10%"
    },
    button: {
      color: "white",
      fontSize: "12px",
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
      marginTop: "5px",
      marginLeft: "auto",
      width: "200px",
      height: "40px",
      borderRadius: "24px"
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
      <a style={styles.aButton} href="https://console.adobe.io/plugins">
        <button style={styles.button} type="button"> I/O Developer Console</button>
      </a>
    </header>
  );
}
