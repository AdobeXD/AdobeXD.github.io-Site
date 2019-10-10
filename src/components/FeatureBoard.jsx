import React from "react";

export default function FeatureBoard({ text, backgroundColor, height, width, img, title, img2, imgAlt2, imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "row",
            flex: "2 1 auto",
            marginLeft: marginLeft,
            width,
            backgroundColor,
            height,
            padding: "50px 0px 0px 50px",
            marginBottom: "50px"
        },
        img: {
            height: imgHeight,
            width: imgWidth
        },
        title: {
            display: "block",
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginTop: 40,
            textAign: "left"
        },
        text: {
            display: "block",
            color: "white",
            fontSize: 24
        },
        leftBox: {
            display: "flex",
            flexDirection: "column",
            textAign: "left",
            width: "60%"
        },
        rightBox: {
            width: "40%",
            height: "100%"
        },
        img2: {
            height: "90%",
            width: "80%",
            marginLeft: 120
        }
    }
    return (
        <div style={styles.wrapper}>
            <div style={styles.leftBox}>
                {img && <img style={styles.img} src={img} alt={imgAlt} />}
                {title && <p style={styles.title}>{title}</p>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
            <div>
                {img2 && <img style={styles.img2} src={img2} alt={imgAlt2} />}
            </div>
        </div>
    );
}
