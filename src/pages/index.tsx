import HeroSectionLayout from "@/ui/layouts/HeroSectionLayout";
import TraitCardLayout, {TraitCardLayoutPropTypes} from "@/ui/layouts/TraitCardLayout";
import Shield1IconComponent from "../../public/icons/Shield1IConComponent";
import CompassIconComponent from "../../public/icons/CompassIconComponent";
import ClockIconComponent from "../../public/icons/ClockIconComponent";
import VerifiedIconComponent from "../../public/icons/VerifiedIconComponent";
import styles from "./index.module.css"
import StatCardLayout, {StatCardLayoutPropTypes} from "@/ui/layouts/StatCardLayout";
import HeadingLayout from "@/ui/layouts/HeadingLayout";

// #########
// # TYPES #
// #########

interface TrustSectionPropTypes {
    colorScheme: string,
    traitCards: TraitCardLayoutPropTypes[],
}

interface StatSectionPropTypes {
    colorScheme: string,
    heading: string,
    accentText: string,
    statCards: StatCardLayoutPropTypes[]
}

// ###############
// # COLORSCHEME #
// ###############

const trustColorScheme = "colorScheme1"
const statSectionColorScheme = trustColorScheme
const philisphySectionColorScheme = "colorScheme3"


// #########
// # PROPS #
// #########
const trustSectionProps = {
    colorScheme: trustColorScheme,
    traitCards: [{
        icon: <Shield1IconComponent/>,
        bigText: "AMFI",
        smallText: "Registered",
        bodyText: "Association of Mutual Funds",
        serialNo: "",
        colorScheme: trustColorScheme,
        styling: styles.fullwidth
    },
        {
            icon: <CompassIconComponent/>,
            bigText: "Independent",
            smallText: "Advisory Approach",
            bodyText: "No Product quotas, no conflicts",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullwidth
        },
        {
            icon: <ClockIconComponent/>,
            bigText: "24 Years",
            smallText: "Combined Experiance",
            bodyText: "Across Market Cycles",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullwidth
        },
        {
            icon: <VerifiedIconComponent/>,
            bigText: "Transparent",
            smallText: "Client Relationship",
            bodyText: "Plain language, full clarity",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullwidth
        },
    ],
}

const statSectionProps = {
    colorScheme: statSectionColorScheme,
    heading: <p>A record measured in trust, not noise</p>,
    accentText: "BY THE NUMBER",
    statCards: [{
        bigText: "₹ 850",
        accentText: "cr",
        description: "Assets Under Management",
        colorScheme: statSectionColorScheme,
        styling: styles.statCard
    }, {
        bigText: "300",
        accentText: "+",
        description: "Families Guided",
        colorScheme: statSectionColorScheme,
        styling: styles.statCard
    }, {
        bigText: "24",
        accentText: "yrs",
        description: "Combined Experiance",
        colorScheme: statSectionColorScheme,
        styling: styles.statCard
    }, {
        bigText: "98",
        accentText: "%",
        description: "Client Retention",
        colorScheme: statSectionColorScheme,
        styling: styles.statCard
    }]
}

// ############
// # SECTIONS #
// ############

const TrustSection = ({traitCards, colorScheme}: TrustSectionPropTypes) => {
    return (
        <div className={`${colorScheme} ${styles.trustContainer}`}>
            <div className={styles.flexBox}>
                {
                    traitCards.map((traitCard, i) => {
                            return (
                                <TraitCardLayout key={i}
                                                 icon={traitCard.icon}
                                                 colorScheme={colorScheme}
                                                 bigText={traitCard.bigText}
                                                 smallText={traitCard.smallText}
                                                 bodyText={traitCard.bodyText}
                                                 serialNo={traitCard.serialNo}
                                                 styling={traitCard.styling}
                                />
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

const StatSection = ({colorScheme, heading, accentText, statCards}: StatSectionPropTypes) => {
    return (<div className={`${styles.statContainer} ${colorScheme}`}>
        <HeadingLayout colorScheme={colorScheme} heading={heading} accentText={accentText} textAlignment={"center"}/>

        <div className={`${styles.statContainer} ${colorScheme}`}>
            <div className={styles.flexBox2}>
                {statCards.map((statCard, i) => {
                    return (<StatCardLayout key={i} bigText={statCard.bigText} accentText={statCard.accentText}
                                            description={statCard.description} colorScheme={colorScheme}
                                            styling={statCard.styling}/>)
                })}
            </div>
        </div>
    </div>);
}

export default function Home() {
    return (
        <div>
            <HeroSectionLayout/>

            <TrustSection colorScheme={trustSectionProps.colorScheme} traitCards={trustSectionProps.traitCards}/>

            <StatSection colorScheme={statSectionProps.colorScheme} heading={statSectionProps.heading}
                         accentText={statSectionProps.accentText} statCards={statSectionProps.statCards}/>
        </div>
    );
}
