export interface CTAButton {
    ctaText: string;
    styling?: string,
}


import styles from "./CTAButton.module.css"

export default function CTAButton({ctaText, styling}: CTAButton) {
    return <button className={`boldNSerif ${styles.container} ${styling}`}>
        {ctaText}
    </button>
}