import React from "react";

export default function FeatureBoard({ link, text, backgroundColor, height, width, img, title, img2, imgAlt2, imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "row",
            flex: "2 1 auto",
            marginLeft: marginLeft,
            width,
            backgroundColor,
            height,
            padding: 40,
            marginBottom: "20px"
        },
        img: {
            height: imgHeight,
            width: imgWidth
        },
        title: {
            display: "block",
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 40,
            textAign: "left",
            marginLeft: 0
        },
        text: {
            display: "block",
            color: "white",
            fontSize: 15,
            marginLeft: 0
        },
        leftBox: {
            display: "flex",
            flexDirection: "column",
            textAign: "left",
            width: "50%",
            marginBottom: 40
        },
        rightBox: {
            width: "40%",
            height: 300
        },
        img2: {
            height: "90%",
            width: "100%",
            marginLeft: "15%",
            verticalAlign: "middle"
        },
        link: {
            display: "block",
            color: "white",
            fontSize: 15
        },
    }
    return (
        <div style={styles.wrapper}>
            <div style={styles.leftBox}>
                {img && <img style={styles.img} src={img} alt={imgAlt} />}
                {title && <p style={styles.title}>{title}</p>}
                {text && <p style={styles.text}>{text}</p>}
                {link && <a style={styles.link}>{link}</a>}
            </div>
            <div style={styles.rightBox}>
                {img2 && <img style={styles.img2} src={img2} alt={imgAlt2} />}
            </div>
        </div>
    );
}
