import {ReactElement} from "react";
import styles from "./ServiceDetailCardLayout.module.css"

export interface ServiceDetailCardLayoutPropsTypes {
    service: string,
    description: string,
    benefits: string[],
    idealFor: string,
    colorScheme: string,
    styling?: string,
    icon: ReactElement,
    serialNo: string
}

export default function ServiceDetailCardLayout({
                                                    service,
                                                    description,
                                                    benefits,
                                                    idealFor,
                                                    colorScheme,
                                                    styling,
                                                    icon,
                                                    serialNo
                                                }: ServiceDetailCardLayoutPropsTypes) {
    return (
        <div className={`${styles.container} ${colorScheme} ${styling}`}>

            <div>
                <div className={`${styles.header}`}>
                    {icon}
                    <p>{serialNo}</p>
                </div>

                <div className={`${styles.bigGap}`}>
                    <p className={`${styles.service}`}>{service}</p>
                    <p className={`${styles.smallGap}`}>{description}</p>
                </div>

                <p className={`${styles.bigGap} cursiveLink`}>{`Discuss ${service} \u2192`}</p>
            </div>

            <div className={`${styles.bottom}`}>
                <p className={`${styles.keyBenifits}`}>KEY BENEFITS</p>

                <ul>
                    {benefits.map((benefit, i) => {
                        return (<li key={i}>{benefit}</li>)
                    })}
                </ul>

                <div className={`${styles.idealForContainer}`}>
                    <p className={`${styles.idealFor}`}>Ideal For</p>

                    <p>{idealFor}</p>
                </div>
            </div>

        </div>
    )
}