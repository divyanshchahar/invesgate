import {ReactElement} from "react";
import styles from "./ServiceBriefLayout.module.css"


export interface ServiceBriefLayoutPropTypes {
    colorScheme: string,
    styling?: string,
    icon: ReactElement,
    number: string,
    service: string,
}

export default function ServiceBriefLayout({colorScheme, styling, icon, number, service}: ServiceBriefLayoutPropTypes) {
    return (
        <div className={`${colorScheme} ${styling} ${styles.container}`}>
            <div className={`${styles.header}`}>
                {icon}
                <p className={styles.number}>{number}</p>
            </div>
            <p className={`${styles.service}`}>{service}</p>
        </div>
    )

}