import HeadingLayout from "@/ui/layouts/HeadingLayout";
import styles from "./HeaderLayout.module.css"

interface CommonTypes {
    colorScheme: string;
}

export interface HeadingLayoutPropTypes {
    colorScheme: string;
    version: "contact us" | "services" | "about us"
}

const AboutUsHeader = ({colorScheme}: CommonTypes) => {
    return (
        <>
            <HeadingLayout colorScheme={colorScheme} heading={<p>The Gatekeepers of your <span>wealth</span></p>}
                           accentText={"ABOUT INVESGATE"} textAlignment={"left"}/>

            <p className={styles.bodyText}>We are an independent wealth advisory practice for investors who measure
                success in decades — and who
                value counsel they can trust without reservation.</p>
        </>
    )
}

const ServicesHeader = ({colorScheme}: CommonTypes) => {
    return (
        <>
            <HeadingLayout colorScheme={colorScheme} heading={<p>Comprehensive <span>wealth solution</span></p>}
                           accentText={"OUR SERVICES"} textAlignment={"left"}/>

            <p className={styles.bodyText}>We are an independent wealth advisory practice for investors who measure
                success in decades — and who
                value counsel they can trust without reservation.</p>
        </>
    )
}

const ContactUSHeader = ({colorScheme}: CommonTypes) => {
    return (
        <>
            <HeadingLayout colorScheme={colorScheme} heading={<p>Let's start the conversation.</p>}
                           accentText={"CONTACT US"} textAlignment={"left"}/>

            <p className={styles.bodyText}>Tell us about your financial goals and we'll reach out to schedule a private
                discussion — at your
                convenience, and entirely without obligation.</p>
        </>
    )
}


const renderHeader = (version: string, colorScheme: string) => {
    switch (version) {
        case "contact us":
            return (<ContactUSHeader colorScheme={colorScheme}/>)
        case "services":
            return (<ServicesHeader colorScheme={colorScheme}/>)
        case "about us":
            return (<AboutUsHeader colorScheme={colorScheme}/>)
        default:
            return (<></>)
    }
}

export default function HeaderLayout({version, colorScheme}: HeadingLayoutPropTypes) {
    return (
        <div className={`${styles.container} ${colorScheme}`}>
            {
                renderHeader(version, colorScheme)
            }
        </div>
    )
}