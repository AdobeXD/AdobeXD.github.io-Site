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
    }
  };

  return (
    <heading style={styles.heading}>
      <img style={styles.logo} src={logo} />
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
    </heading>
  );
}
