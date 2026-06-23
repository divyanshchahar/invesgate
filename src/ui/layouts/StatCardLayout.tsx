import styles from "./StatCardLayout.module.css"

export interface StatCardLayoutPropTypes {
    bigText: string,
    accentText: string,
    description: string,
    colorScheme: string,
    styling?: string,
}

export default function StatCardLayout({
                                           bigText,
                                           accentText,
                                           description,
                                           colorScheme,
                                           styling
                                       }: StatCardLayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme} ${styling}`}>
            <p className={`${styles.mainText}`}>{`${bigText} `}<span
                className={`${styles.accentText}`}>{accentText}</span>
            </p>

            <p className={`${styles.lightText}`}>{description}</p>
        </div>
    )
}