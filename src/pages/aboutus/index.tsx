import Image from "next/image";
import foundersPhoto from "../../../public/images/founder.jpeg"
import styles from "./index.module.css"
import HeadingLayout, {HeadingLayoutPropTypes} from "@/ui/layouts/HeadingLayout";
import HeaderLayout from "@/ui/layouts/HeaderLayout";
import invesgateTeam from "../../../public/images/old_team.png"
import StatsSectionLayout, {StatsSectionLayoutPropTypes} from "@/ui/layouts/StatsSectionLayout";
import TraitCardLayout, {TraitCardLayoutPropTypes} from "@/ui/layouts/TraitCardLayout";
import VerifiedIconComponent from "../../../public/icons/VerifiedIconComponent";
import CompassIconComponent from "../../../public/icons/CompassIconComponent";
import ClockIconComponent from "../../../public/icons/ClockIconComponent";
import CTALayout from "@/ui/layouts/CTALayout";
import CheckIconComponent from "../../../public/icons/CheckIconComponent"
import TextCardLayout, {TextCardLayoutPropTypes} from "@/ui/layouts/TextCardLayout";


interface TrustSectionPropsTypes {
    colorScheme: string,
    headingLayoutProps: HeadingLayoutPropTypes,
    traitCards: TraitCardLayoutPropTypes[],
}

interface PhilosphySectionPropsTypes {
    colorScheme: string,
    headingLayoutProps: HeadingLayoutPropTypes,
    textCards: TextCardLayoutPropTypes[],
}

const statSectionColorScheme = "colorScheme3"
const trustSectionColorScheme = "colorScheme1"
const philosphySectionColorScheme = "colorScheme2"

const statSectionProps: StatsSectionLayoutPropTypes = {
    colorScheme: statSectionColorScheme,
    heading: <p>A record measured in trust, not noise</p>,
    accentText: "BY THE NUMBER",
    statCards: [{
        bigText: "₹ 850",
        accentText: "cr",
        description: "Assets Under Management",
        colorScheme: statSectionColorScheme,
        // styling: styles.statCard
    }, {
        bigText: "300",
        accentText: "+",
        description: "Families Guided",
        colorScheme: statSectionColorScheme,
        // styling: styles.statCard
    }, {
        bigText: "24",
        accentText: "yrs",
        description: "Combined Experiance",
        colorScheme: statSectionColorScheme,
        // styling: styles.statCard
    }, {
        bigText: "98",
        accentText: "%",
        description: "Client Retention",
        colorScheme: statSectionColorScheme,
        // styling: styles.statCard
    }]
}

const trustSectionProps: TrustSectionPropsTypes = {
    colorScheme: trustSectionColorScheme,
    headingLayoutProps: {
        colorScheme: trustSectionColorScheme,
        heading: <p>Built around a simple promise.</p>,
        accentText: "WHY CHOOSE INVESGATE",
        textAlignment: "left",
        styling: styles.statCard,
    },
    traitCards: [{
        icon: <VerifiedIconComponent/>,
        serialNo: "",
        bigText: "Transparent",
        smallText: "No hidden incentives",
        bodyText: "Every recommendation explained in plain language.",
        colorScheme: trustSectionColorScheme,
        styling: styles.statCard,
    }, {
        icon: <CompassIconComponent/>,
        serialNo: "",
        bigText: "Independent",
        smallText: "Free of product quotas",
        bodyText: "Advice that answers to you, never to a product house.",
        colorScheme: trustSectionColorScheme,
        styling: styles.statCard,
    }, {
        icon: <CheckIconComponent/>,
        serialNo: "",
        bigText: "Simple",
        smallText: "Plain investing principles",
        bodyText: "Clarity over complexity, always.",
        colorScheme: trustSectionColorScheme,
        styling: styles.statCard,
    }, {
        icon: <ClockIconComponent/>,
        serialNo: "",
        bigText: "24 years",
        smallText: "Combinned Experiance",
        bodyText: "Counsel seasoned across multiple market cycles.",
        colorScheme: trustSectionColorScheme,
        styling: styles.statCard,
    }]
}

const philosphySectionProps: PhilosphySectionPropsTypes = {
    colorScheme: philosphySectionColorScheme,
    headingLayoutProps: {
        colorScheme: philosphySectionColorScheme,
        heading: <p>Three convictions guide every recommendation we make.</p>,
        accentText: "WHAT WE BELIEVE",
        textAlignment: "left",
    },
    textCards: [
        {
            accent: "COURAGE",
            heading: "Buy what others won't",
            body: "Opportunity is greatest precisely when comfort is lowest. We have the courage to act with conviction when the crowd retreats — because lasting wealth is built in the moments others flinch.",
            colorScheme: philosphySectionColorScheme
        },
        {
            accent: "VISION",
            heading: "See what others can't.",
            body: "We look past the noise of the moment to the structure of the decade. Recognising enduring quality before it becomes consensus is the difference between chasing returns and compounding them.",
            colorScheme: philosphySectionColorScheme
        },
        {
            accent: "PATIENCE",
            heading: "Hold when others sell.",
            body: "Time is the investor's greatest ally and impulse its greatest enemy. We have the patience to let compounding do its quiet work — and the discipline to keep our clients invested through it.",
            colorScheme: philosphySectionColorScheme
        }
    ]
}

const TeamMember = () => {
    return (
        <div className={`colorScheme3 paddedContainer`}>
            <div className={`maxWidthContainer`}>
                <HeadingLayout colorScheme={"colorScheme3"} heading={<p>The people who guard your wealth</p>}
                               accentText={"LEADERSHIP & EXPERTISE"}
                               textAlignment={"left"}/>

                <div className={`${styles.teamMemberContainer}`}>


                    <div>
                        <Image src={foundersPhoto} alt={"founder's photo"} className={styles.image}/>
                    </div>

                    <div>
                        <p className={"heading6Cursive"}>Vishal Sood</p>
                        <p className={styles.designation}>FOUNDER AND PRINCIPAL ADVISOR</p>
                    </div>

                    <p>Vishal founded Invesgate on a belief that wealth advice should be independent, transparent, and
                        built to last. He leads client strategy across equity, alternatives, and long-term wealth
                        planning.</p>

                    <div className={styles.teamMemberBullet}>
                        <ul>
                            <li>Two decades across Indian capital markets</li>
                            <li> MFI-registered mutual fund distribution</li>
                            <li>Specialist in conviction-led portfolio strategy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AboutUsSesction = () => {
    return (
        <div className={`colorScheme1 paddedContainer`}>
            <div className={`maxWidthContainer ${styles.aboutUsContainer}`}>

                <div className={`${styles.aboutUsText}`}>
                    <HeadingLayout colorScheme={"colorScheme1"}
                                   heading={<p>An independent practice, operated by Invesgate Edge LLP.</p>}
                                   accentText={"ABOUT US"} textAlignment={"left"}/>

                    <p className={styles.secondaryText}>Invesgate is the wealth management brand of Invesgate Edge LLP —
                        a registered partnership built
                        to
                        give discerning investors what the conventional industry rarely offers: advice that answers to
                        the
                        client, and the client alone.
                        <br/>
                        <br/>
                        As an AMFI-registered practice, we sit on your side of the table. We are not tied to a single
                        product house, a sales quota, or a quarterly target. Our role is simpler and older than that —
                        to be
                        the gatekeepers of your wealth, guarding it with discipline and growing it with conviction.
                        <br/>
                        <br/>
                        We believe investing should be plain and simple. No jargon, no theatre — only a clear strategy,
                        honestly explained, and patiently executed across market cycles.
                    </p>

                </div>
                <Image src={invesgateTeam} alt={"invesgate team"} className={`${styles.teamImage}`}/>
            </div>
        </div>
    )
}

const TrustSection = ({headingLayoutProps, colorScheme, traitCards}: TrustSectionPropsTypes) => {
    return (
        <div className={`${colorScheme} paddedContainer`}>
            <div className={`maxWidthContainer `}>
                <HeadingLayout colorScheme={headingLayoutProps.colorScheme}
                               heading={headingLayoutProps.heading}
                               accentText={headingLayoutProps.accentText}
                               textAlignment={headingLayoutProps.textAlignment}/>

                <div className={`${styles.noGapFlex1}`}>
                    {
                        traitCards.map((traitCard, i) => {
                                return <TraitCardLayout key={i} icon={traitCard.icon} serialNo={traitCard.serialNo}
                                                        bigText={traitCard.bigText} smallText={traitCard.smallText}
                                                        bodyText={traitCard.bodyText}
                                                        colorScheme={traitCard.colorScheme} styling={traitCard.styling}/>
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const PhilosphySection = ({colorScheme, headingLayoutProps, textCards}: PhilosphySectionPropsTypes) => {
    return (
        <div className={`paddedContainer ${colorScheme}`}>
            <div className={`maxWidthContainer outerFlexContainer`}>
                <HeadingLayout colorScheme={headingLayoutProps.colorScheme}
                               heading={headingLayoutProps.heading}
                               accentText={headingLayoutProps.accentText} textAlignment={"left"}
                               styling={styles.mediumWidthContainer}/>

                <div className={`${styles.philosphyFlexContainer}`}>
                    {
                        textCards.map((textCard, i) => {
                                return (
                                    <>
                                        <TextCardLayout key={i} accent={textCard.accent} heading={textCard.heading}
                                                        body={textCard.body}
                                                        colorScheme={textCard.colorScheme}/>

                                        <hr/>
                                    </>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default function AboutUS() {
    return (
        <>
            <HeaderLayout colorScheme={"colorScheme3"} version={"about us"}/>

            <AboutUsSesction/>

            <StatsSectionLayout colorScheme={statSectionProps.colorScheme} heading={statSectionProps.heading}
                                accentText={statSectionProps.accentText} statCards={statSectionProps.statCards}/>

            {/*add section here*/}
            <PhilosphySection textCards={philosphySectionProps.textCards}
                              headingLayoutProps={philosphySectionProps.headingLayoutProps}
                              colorScheme={philosphySectionProps.colorScheme}/>

            <TrustSection colorScheme={trustSectionProps.colorScheme}
                          headingLayoutProps={trustSectionProps.headingLayoutProps}
                          traitCards={trustSectionProps.traitCards}/>

            <TeamMember/>

            <CTALayout version={"about us"}/>
        </>
    )
}