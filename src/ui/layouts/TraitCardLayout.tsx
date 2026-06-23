import {ReactNode} from "react";

import styles from "./TraitCardLayout.module.css"

export interface TraitCardLayoutPropTypes {
    icon: ReactNode,
    serialNo: string,
    bigText: string,
    smallText: string,
    bodyText: string,
    colorScheme: string,
    styling?: string
}

export default function TraitCardLayout({
                                            icon,
                                            serialNo,
                                            bigText,
                                            smallText,
                                            bodyText,
                                            colorScheme,
                                            styling,
                                        }: TraitCardLayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme} ${styling}`}>

            <div className={`${styles.header}`}>
                {icon} {serialNo}
            </div>

            <p className={`${styles.bigText} ${styles.topMargin}`}>
                {bigText}
            </p>

            <p className={`${styles.smallText} ${styles.topMargin}`}>
                {smallText}
            </p>

            <p className={`${styles.bodyText} ${styles.topMargin}`}>
                {bodyText}
            </p>
        </div>
    )
}