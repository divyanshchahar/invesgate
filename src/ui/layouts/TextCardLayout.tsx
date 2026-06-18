import styles from "./TextCardLayout.module.css"

export interface TextCardLayoutPropTypes {
    accent: string,
    heading: string,
    body: string,
    colorScheme: string,
    styling?: string
}


export default function TextCardLayout({accent, heading, body, colorScheme, styling}: TextCardLayoutPropTypes) {
    return (
        <div className={`${colorScheme} ${styling} ${styles.container}`}>
            <div className={`${styles.top}`}>
                <p className={`${styles.accent}`}>{accent}</p>
                <p className={`${styles.heading}`}>{heading}</p>
            </div>

            <div>
                <p className={`${styles.body}`}>{body}</p>
            </div>
        </div>
    )
}