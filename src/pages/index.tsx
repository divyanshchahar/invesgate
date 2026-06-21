import HeroSectionLayout from "@/ui/layouts/HeroSectionLayout";
import TraitCardLayout, {TraitCardLayoutPropTypes} from "@/ui/layouts/TraitCardLayout";
import Shield1IconComponent from "../../public/icons/Shield1IConComponent";
import CompassIconComponent from "../../public/icons/CompassIconComponent";
import ClockIconComponent from "../../public/icons/ClockIconComponent";
import VerifiedIconComponent from "../../public/icons/VerifiedIconComponent";
import styles from "./index.module.css"

// #########
// # TYPES #
// #########

interface TrustSectionPropTypes {
    colorScheme: string,
    traitCards: TraitCardLayoutPropTypes[],
}


const trustColorScheme = "colorScheme1"

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


export default function Home() {
    return (
        <div>
            <HeroSectionLayout/>
            <TrustSection colorScheme={trustSectionProps.colorScheme} traitCards={trustSectionProps.traitCards}/>
        </div>
    );
}
