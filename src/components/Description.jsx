import React from "react";

export default function Description({ center = false, padding = 20, align = "left", marginTop, title, text, color = "white", highlight, rightTag, width = 739, tagFontSize = 50, textFontSize = 15 } = {}) {
    const styles = {
        wrapper: {
            textAlign: align,
            flex: "0 1 auto",
            width,
            marginTop,
            padding
        },
        tag: {
            color,
            display: "inline-block",
            textAlign: align,
            fontSize: tagFontSize
        },
        text: {
            color,
            display: "block",
            fontSize: textFontSize,
            fontWeight: 100,
            textAlign: align
        },
        highlight: {
            color: "#1D7DEE",
            fontSize: tagFontSize,
            fontWeight: 400
        },
        rightTag: {
            color,
            display: "inline",
            float: "right",
            fontSize: textFontSize,
            textDecoration: "underline"
        },
        arrow: {
            color,
            display: "inline-block",
            float: "right",
            fontSize: 20,
            marginTop: -2,
            marginLeft: 0
        }
    };
    if (center) {
        return (
            <div class="center">
                {highlight && <p style={styles.highlight}>{highlight}</p>}
                {title && <p style={styles.tag}>{title}</p>}
                {rightTag && <p style={styles.arrow}>></p>}
                {rightTag && <p style={styles.rightTag}>{rightTag}</p>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
        );
    } else {
        return (
            <div style={styles.wrapper}>
                {highlight && <p style={styles.highlight}>{highlight}</p>}
                {title && <p style={styles.tag}>{title}</p>}
                {rightTag && <p style={styles.arrow}>></p>}
                {rightTag && <p style={styles.rightTag}>{rightTag}</p>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
        );
    }

}
