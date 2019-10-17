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
            padding: "auto"
        },
        img: {
            height: imgHeight,
            width: imgWidth,
            margin: "50px 0px 20px"
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
            marginTop: 50,
            fontWeight: "normal"
        },
        box: {
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "40%",
            marginLeft: 30,
            flex: "0 0 20%"
        }
    }
    return (
        <div style={styles.wrapper}>
            {title && <p style={styles.title}>{title}</p>}
            {body && <p style={styles.body}>{body}</p>}
            <div style={styles.box}>
                {img && <img style={styles.img} src={img} alt={imgAlt} />}
                {/* {name && <p style={styles.name}>{name}</p>} */}
            </div>
        </div>
    );
}
