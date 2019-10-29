import React from "react";

export default function Description({ paddingBottom=20, tagBottomMargin=16, textWeight=200, banner=false, href, arrowSVG, center = false, padding = 20, align = "left", marginTop, title, text, color = "white", highlight, rightTag, width = 739, tagFontSize = 50, textFontSize = 15, imgAlt = "" } = {}) {
    const styles = {
        wrapper: {
            textAlign: align,
            flex: "0 1 auto",
            width,
            marginTop,
            padding,
            paddingBottom
        },
        tag: {
            color,
            display: "inline-block",
            textAlign: align,
            fontSize: tagFontSize,
            fontWeight: 400,
            marginBottom: tagBottomMargin
        },
        text: {
            color,
            display: "block",
            fontSize: textFontSize,
            fontWeight: textWeight,
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
            textDecoration: "underline",
            marginTop: 6,
            marginBottom: 6
        },
        arrow: {
            display: "inline-block",
            float: "right",
            marginTop: 10
        }
    };
    if (center) {
        return (
            <div class="center" >
                {highlight && <p style={styles.highlight}>{highlight}</p>}
                {title && <p style={styles.tag}>{title}</p>}
                {rightTag && <img style={styles.arrow} src={arrowSVG} alt={imgAlt}></img>}
                {rightTag && <a href={href}><p style={styles.rightTag}>{rightTag}</p></a>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
        );
    } else if (banner){
        return (
            <div class="banner" style={styles.wrapper}>
                {highlight && <p style={styles.highlight}>{highlight}</p>}
                {title && <p style={styles.tag}>{title}</p>}
                {rightTag && <img style={styles.arrow} src={arrowSVG} alt={imgAlt}></img>}
                {rightTag && <a href={href}><p style={styles.rightTag}>{rightTag}</p></a>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
        );
    } else {
        return (
            <div style={styles.wrapper}>
                {highlight && <p style={styles.highlight}>{highlight}</p>}
                {title && <p style={styles.tag}>{title}</p>}
                {rightTag && <img style={styles.arrow} src={arrowSVG} alt={imgAlt}></img>}
                {rightTag && <a href={href}><p style={styles.rightTag}>{rightTag}</p></a>}
                {text && <p style={styles.text}>{text}</p>}
            </div>
        );
    }

}
