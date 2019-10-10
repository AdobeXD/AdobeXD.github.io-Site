import React from "react";

export default function FeatureCard({ backgroundColor, height, width, img, title, name, imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
    const styles = {
        wrapper: {
            // flexDirection: "column",
            flex: "2 1 auto",
            marginLeft: marginLeft,
            width,
            backgroundColor,
            height
        },
        img: {
            height: imgHeight,
            width: imgWidth,
            // margin: "150px 40px 0px 40px"
            top: "70%"
        },
        name: {
            display: "inline-block",
            color: "white",
            fontSize: 19,
            margin: "0 0 0 20px"
        },
        title: {
            display: "block",
            color: "white",
            fontSize: 24,
            margin: "30px 0px 0px 40px"
        },
        box: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "40%",
            marginLeft: 30
        }
    }
    return (
        <div style={styles.wrapper}>
            {title && <p style={styles.title}>{title}</p>}
            <div style={styles.box}>
                {img && <img style={styles.img} src={img} alt={imgAlt} />}
                {name && <p style={styles.name}>{name}</p>}
            </div>
        </div>
    );
}
