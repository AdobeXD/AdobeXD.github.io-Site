import React from "react";

export default function Card({ bodyWidth = "100%", link, width, img, title, children, level = "h3", imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
  const styles = {
    wrapper: {
      // flexDirection: "column",
      display: "flex",
      justfiyContent: "center",
      flex: "2 1 auto",
      marginLeft: marginLeft,
      alignItems: "center",
      flexDirection: "column",
      width
    },
    img: {
      height: imgHeight,
      width: imgWidth,
      marginBottom: 15
    },
    h3: {
      textAlign: "center",
      padding: 24,
      fontSize: 30,
      fontWeight: "bold",
      margin: 0
    },
    h4: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      color: "#1473E6",
      margin: 0
    },
    body: {
      margin: 0,
      padding: "0 24px",
      textAlign: "center",
      fontWeight: "normal",
      fontSize: 15,
      marginTop: 20,
      width: bodyWidth
    },
    link: {
      margin: 0,
      padding: "20px 24px",
      textAlign: "center",
      fontWeight: "normal",
      fontSize: 15,
      color: "#1473E6"
    }
  };
  return (
    <div style={styles.wrapper}>
      {img && <img style={styles.img} src={img} alt={imgAlt} />}
      {title && <div style={styles[level]}>{title}</div>}
      {children && <div style={styles.body}>{children}</div>}
      {link && <a style={styles.link}>{link}</a>}
    </div>
  );
}
