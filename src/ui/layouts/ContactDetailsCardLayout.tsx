import {ReactElement} from "react";
import styles from "./ContactDetailsCardLayout.module.css"

export interface ContactDetailsCardLayoutPropTypes {
    icon: ReactElement,
    fieldValue: string,
    fieldName: string,
    colorScheme: string,
    styling?: string,
}

export default function ContactDetailsCardLayout({
                                                     icon,
                                                     fieldValue,
                                                     fieldName,
                                                     colorScheme,
                                                     styling
                                                 }: ContactDetailsCardLayoutPropTypes) {
    return (<div className={`${colorScheme} ${styling} ${styles.container}`}>
        <div className={`${styles.icon}`}>
            {icon}
        </div>

        <div>
            <p className={`${styles.secondryText}`}>{fieldName}</p>

            <p className={`${styles.primaryText}`}>{fieldValue}</p>
        </div>
    </div>)
}