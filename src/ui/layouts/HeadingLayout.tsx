import styles from "./HeadingLayout.module.css"
import {ReactElement} from "react";

export interface HeadingLayoutPropTypes {
    colorScheme: string,
    heading: ReactElement,
    accentText: string,
    textAlignment: "center" | "left",
    styling?: string
}

export default function HeadingLayout({
                                          accentText,
                                          heading,
                                          textAlignment,
                                          styling,
                                          colorScheme
                                      }: HeadingLayoutPropTypes) {
    return (
        <div className={`${colorScheme} ${styling} ${textAlignment === "center" ? styles.center : styles.left} `}>
            <p className={styles.accentText}>{accentText}</p>
            <div className={styles.headingText}>{heading}</div>
        </div>
    )
}