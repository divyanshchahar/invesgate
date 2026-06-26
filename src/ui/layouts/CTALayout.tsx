import CTAButton from "@/ui/components/CTAButton";
import styles from "./CTALayout.module.css"

const AboutUSCTA = () => {
    return (
        <div className={styles.maxWidth}>
            <p className={styles.accent}>BEGIN THE CONVERSATION</p>
            <p className={styles.heading}>Ready to discuss your <span>financial future?</span></p>
            <p className={styles.text}>Let's start with a conversation — no cost, no obligation, only a clear and
                independent perspective.</p>
        </div>
    )
}


const ServiceCTA = () => {
    return (
        <div className={styles.maxWidth}>
            <p className={styles.accent}>FIND YOUR STRATEGY</p>
            <p className={styles.heading}>Discuss the right strategy for <span>your goals.</span></p>
            <p className={styles.text}>Every plan begins with understanding. Tell us where you stand, and we'll help you
                see where you could go.</p>
        </div>
    )
}


const HomeCTA = () => {
    return (
        <>
            <div className={styles.maxWidth}>
                <p className={styles.accent}>BEGIN THE CONVERSATION</p>
                <p className={styles.heading}>Let's build your wealth with <span>discipline and clarity</span></p>
                <p className={styles.text}>A single conversation can reframe how you think about the decades ahead.
                    There is
                    no cost, and no obligation — only perspective.</p>
            </div>

            <div className={styles.flexBox}>
                <p>Personalized guidance</p>
                <p>Long-term focus</p>
                <p>Independent recommendations</p>
                <p>Structured wealth planning</p>
            </div>
        </>
    )
}

export interface CTALayoutPropTypes {
    version: "about us" | "services" | "home"
}

const renderCTA = (version: string) => {
    switch (version) {
        case "about us":
            return (<AboutUSCTA/>)
        case "services":
            return (<ServiceCTA/>)
        case "home":
            return (<HomeCTA/>)
        default:
            return (<></>)
    }
}

export default function CTALayout({version}: CTALayoutPropTypes) {
    return (
        <div className={`${styles.container} colorScheme3`}>

            {
                renderCTA(version)
            }

            <CTAButton ctaText={"Talk to Us"}/>
        </div>
    )
}