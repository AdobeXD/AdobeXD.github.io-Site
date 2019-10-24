import React from "react";

export default function FeatureBoard({ link, linkUrl, text, backgroundColor, height, width, img, title, img2, imgAlt2, imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
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
            marginBottom: "20px",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 4
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
            marginLeft: 0,
            fontWeight: 200
        },
        leftBox: {
            display: "flex",
            flexDirection: "column",
            textAign: "left",
            width: "45%",
            marginBottom: 40,
            height: 300
        },
        rightBox: {
            verticalAlign: "middle",
            width: "60%",
            height: 300
        },
        video: {
            marginLeft: "15%",
            verticalAlign: "middle",
            width: "80%",
            height: "100%"
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
                {link && <a style={styles.link} href={linkUrl}>{link}</a>}
            </div>
            <div style={styles.rightBox}>
                <iframe style={styles.video} src="https://www.youtube.com/embed/bEIbaZ8DtcY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* {img2 && <img style={styles.img2} src={img2} alt={imgAlt2} />} */}
            </div>
        </div>
    );
}
