export interface CTAButton {
    ctaText: string;
}


import styles from "./CTAButton.module.css"

export default function CTAButton({ctaText}: CTAButton) {
    return <button className={`boldNSerif ${styles.container}`}>
        {ctaText}
    </button>
}