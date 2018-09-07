import React from "react";

export default function Button({ href, children } = {}) {
  const styles = {
    wrapper: {
      display: "flex",
      paddingTop: 32
    },
    a: {
      backgroundColor: "#1592E6",
      color: "white",
      fontWeight: "bold",
      lineHeight: "32px",
      padding: "0px 32px",
      borderRadius: "16px",
      margin: "auto auto",
      textDecoration: "none",
      display: "block"
    }
  };
  return (
    <div style={styles.wrapper}>
      <a aria-role="button" href={href} style={styles.a}>
        {children}
      </a>
    </div>
  );
}
