import styles from "./PhilosphyCardLayout.module.css"

export interface PhilosphyCardLayoutProptypes {
    serial: string,
    trait: string,
    description: string,
    colorScheme: string,
    styling?: string,
}

export default function PhilosphyCardLayout({
                                                serial,
                                                trait,
                                                description,
                                                colorScheme,
                                                styling
                                            }: PhilosphyCardLayoutProptypes) {
    return (
        <div className={`${colorScheme} ${styling} ${styles.container}`}>
            <p className={`${styles.serial}`}>{serial}</p>
            <p className={`${styles.trait} ${styles.marginTop}`}>{trait}</p>
            <p className={`${styles.description} ${styles.marginTop}`}>{description}</p>
        </div>
    )
}