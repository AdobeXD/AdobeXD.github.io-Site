import React from "react";

export default function FeatureCard({ body, backgroundColor, height, width, img, img2, title, name, imgAlt = "", imgAlt2 ="", marginLeft = 0, imgWidth = 260, imgHeight = 260 } = {}) {
    const styles = {
        wrapper: {
            // flexDirection: "column",
            flex: "2 1 auto",
            marginLeft: marginLeft,
            width,
            backgroundColor,
            height,
            marginBottom: 30,
            // padding: "auto",
            position: "relative",
            padding: 10,
            borderRadius: 4
        },
        img: {
            height: imgHeight,
            width: imgWidth,
            position: "absolute",
            top: "75%",
            left: 25
        },
        img2: {
            height: imgHeight,
            width: imgWidth,
            position: "absolute",
            top: "75%",
            left: 92
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
        <div style={styles.wrapper} class="featureWrapper">
            {title && <p class="featureTitle" style={styles.title}>{title}</p>}
            {body && <p class="featureBody" style={styles.body}>{body}</p>}
            {/* <div style={styles.box}> */}
            {img && <img class="featureImage" style={styles.img} src={img} alt={imgAlt} />}
            {img2 && <img class="featureImage2" style={styles.img2} src={img2} alt={imgAlt2} />}
            {/* {name && <p style={styles.name}>{name}</p>} */}
            {/* </div> */}
        </div>
    );
}
