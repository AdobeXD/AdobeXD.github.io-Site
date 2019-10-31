import React from "react";

export default function Card({ bodyWeight = 400, outerAlignItems = "center", imgMaxWidth = "100%", spaceTop, marginRight, bodyHeight, href, space = 30, top = "auto", imgPosition = "static", bodyWidth = "100%", link, width, img, title, children, level = "h3", imgAlt = "", marginLeft = 0, imgWidth, imgHeight } = {}) {
  const styles = {
    wrapper: {
      // flexDirection: "column",
      display: "flex",
      justfiyContent: "center",
      flex: "1 1 auto",
      marginLeft,
      marginRight,
      alignItems: outerAlignItems,
      flexDirection: "column",
      width,
      position: "relative"
    },
    img: {
      // height: imgHeight,
      // width: imgWidth,
      maxWidth: imgMaxWidth,
      height: "auto",
      marginBottom: space,
      marginTop: spaceTop,
      position: imgPosition,
      top,
      verticalAlign: "top"
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
      width: bodyWidth,
      margin: 0
    },
    body: {
      margin: 0,
      padding: "6px 24px 0px",
      textAlign: "center",
      fontWeight: "normal",
      fontSize: 15,
      width: bodyWidth,
      height: bodyHeight,
      fontWeight: bodyWeight
    },
    link: {
      margin: 0,
      padding: "12px 24px 20px",
      textAlign: "center",
      fontWeight: "normal",
      fontSize: 15,
      color: "#1473E6"
    },
    inner: {
      display: "flex",
      flexDirection: "column",
      justfiyContent: "center",
      flex: "1 1 auto",
      alignItems: "center"
    }
  };
  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        {img && <a href={href}><img style={styles.img} src={img} alt={imgAlt} /></a>}
        {title && <div style={styles[level]}>{title}</div>}
        {children && <div style={styles.body}>{children}</div>}
        {link && <a style={styles.link} href={href}>{link}</a>}
      </div>
    </div>
  );
}
