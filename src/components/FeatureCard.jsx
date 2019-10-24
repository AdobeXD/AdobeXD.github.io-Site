import React from "react";

export default function FeatureCard({ body, backgroundColor, height, width, img, title, name, imgAlt = "", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
    const styles = {
        wrapper: {
            // flexDirection: "column",
            flex: "1 1 0",
            marginLeft: marginLeft,
            width,
            backgroundColor,
            height,
            marginBottom: 30,
            // padding: "auto",
            position: "relative",
            padding: "0.9%",
            borderRadius: 4
        },
        img: {
            height: imgHeight,
            width: imgWidth,
            position: "absolute",
            top: "75%",
            left: 25
        },
        name: {
            display: "inline-block",
            color: "white",
            fontSize: 15,
            margin: "0 0 0 20px"
        },
        title: {
            display: "block",
            color: "white",
            fontSize: 15,
            textAlign: "left",
            marginTop: 20,
            fontWeight: "bold"
        },
        body: {
            display: "block",
            color: "white",
            fontSize: 15,
            textAlign: "left",
            fontWeight: 200,
            position: "absolute",
            top: "33%"
        }
    }
    return (
        <div style={styles.wrapper}>
            {title && <p style={styles.title}>{title}</p>}
            {body && <p class="featureBody" style={styles.body}>{body}</p>}
            {/* <div style={styles.box}> */}
            {img && <img style={styles.img} src={img} alt={imgAlt} />}
            {/* {name && <p style={styles.name}>{name}</p>} */}
            {/* </div> */}
        </div>
    );
}
