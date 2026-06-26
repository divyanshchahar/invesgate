import TraitCardLayout, {TraitCardLayoutPropTypes} from "@/ui/layouts/TraitCardLayout";
import Shield1IconComponent from "../../public/icons/Shield1IConComponent";
import CompassIconComponent from "../../public/icons/CompassIconComponent";
import ClockIconComponent from "../../public/icons/ClockIconComponent";
import VerifiedIconComponent from "../../public/icons/VerifiedIconComponent";
import styles from "./index.module.css"
import StatCardLayout, {StatCardLayoutPropTypes} from "@/ui/layouts/StatCardLayout";
import HeadingLayout from "@/ui/layouts/HeadingLayout";
import PhilosphyCardLayout, {PhilosphyCardLayoutProptypes} from "@/ui/layouts/PhilosphyCardLayout";
import {ReactElement} from "react";
import ServiceBriefLayout, {ServiceBriefLayoutPropTypes} from "@/ui/layouts/ServiceBriefLayout";
import Link from "next/link";
import AlternativeInvestmentFundsIconComponent from "../../public/icons/AlternativeInvestmentFundIconComponent";
import TrendIconComponent from "../../public/icons/TrendIconComponent";
import LoanIconComponent from "../../public/icons/LoanIconComponent";
import InsuranceIconComponent from "../../public/icons/InsuranceIconComponent";
import FinancialPlanningIconComponent from "../../public/icons/FinancialPlanningIconComponent";
import EstatePlanningIconComponent from "../../public/icons/EstatePlanningIconComponent";
import RealEstateIconComponent from "../../public/icons/RealEstateIconComponent";
import PortfolioIconComponentProps from "../../public/icons/PortfolioIconComponent";
import MutualFundsIconComponent from "../../public/icons/MutualFundsIconComponent";
import CTAButton from "@/ui/components/CTAButton";
import meetingImage from "../../public/images/old_meeting.png"
import HeroSectionLayout from "@/ui/layouts/HeroSectionLayout";
import Image from "next/image";
import CTALayout from "@/ui/layouts/CTALayout";


// #########
// # TYPES #
// #########

interface TrustSectionPropTypes {
    colorScheme: string,
    traitCards: TraitCardLayoutPropTypes[],
}

interface StatSectionPropTypes {
    colorScheme: string,
    heading: ReactElement,
    accentText: string,
    statCards: StatCardLayoutPropTypes[]
}

interface PhilosphySectionPropTypes {
    accentText: string,
    headingText: ReactElement,
    philosphyCards: PhilosphyCardLayoutProptypes[]
    colorScheme: string,
}

interface FinancialServicesSectionPropTypes {
    colorScheme: string,
    headingText: ReactElement,
    accentText: string,
    linkText: string,
    serviceBriefCards: ServiceBriefLayoutPropTypes[],
}

interface ComparisonCardLayoutPropTypes {
    // colorScheme: string,
    headingText: string,
    accentText: string,
    points: string[],
    version: "benefits" | "drawbacks"
}

// ###############
// # COLORSCHEME #
// ###############

const trustColorScheme = "colorScheme1"
const statSectionColorScheme = trustColorScheme
const philisphySectionColorScheme = "colorScheme3"
const financialServicesSectionColorScheme = "colorScheme1"
const comparisonCardDrawbacks = "colorScheme1"
const comparisonCardBenefits = "colorScheme3"


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
        styling: styles.fullWidth
    },
        {
            icon: <CompassIconComponent/>,
            bigText: "Independent",
            smallText: "Advisory Approach",
            bodyText: "No Product quotas, no conflicts",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullWidth
        },
        {
            icon: <ClockIconComponent/>,
            bigText: "24 Years",
            smallText: "Combined Experiance",
            bodyText: "Across Market Cycles",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullWidth
        },
        {
            icon: <VerifiedIconComponent/>,
            bigText: "Transparent",
            smallText: "Client Relationship",
            bodyText: "Plain language, full clarity",
            serialNo: "",
            colorScheme: trustColorScheme,
            styling: styles.fullWidth
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

const philosphySectionProps: PhilosphySectionPropTypes = {
    colorScheme: philisphySectionColorScheme,
    accentText: "OUR INVESTMENT PHILOSPHY",
    headingText: <p>Successful investing is a discipline of <span>temperament </span>, not timing.</p>,
    philosphyCards: [{
        serial: "1",
        trait: "Courage",
        description: "The courage to buy what others won't — to act with conviction when the crowd retreats and value is greatest.",
        colorScheme: philisphySectionColorScheme
    }, {
        serial: "2",
        trait: "Vision",
        description: "The vision to see what others can't — to recognise enduring quality and opportunity before it becomes consensus.",
        colorScheme: philisphySectionColorScheme
    }, {
        serial: "3",
        trait: "Patience",
        description: "The patience to hold when others sell — to let compounding and time do the work that impulse undoes.",
        colorScheme: philisphySectionColorScheme
    }]
}

const financialServicesSectionProps: FinancialServicesSectionPropTypes = {
    colorScheme: financialServicesSectionColorScheme,
    headingText: <p>A complete suite of wealth disciplines.</p>,
    accentText: "WHAT WE DO",
    linkText: "View All Services",
    serviceBriefCards: [
        {
            icon: <AlternativeInvestmentFundsIconComponent/>,
            number: "1",
            service: "Alternative Investment Funds",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <TrendIconComponent/>,
            number: "2",
            service: "Equity Investment",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <LoanIconComponent/>,
            number: "3",
            service: "Loans & Credit Solutions",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <InsuranceIconComponent/>,
            number: "4",
            service: "Insurance",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <FinancialPlanningIconComponent/>,
            number: "5",
            service: "Financial Planning",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <EstatePlanningIconComponent/>,
            number: "6",
            service: "Estate Planning",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <RealEstateIconComponent/>,
            number: "7",
            service: "Real Estate",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <PortfolioIconComponentProps/>,
            number: "8",
            service: "Portfolio Management",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },
        {
            icon: <MutualFundsIconComponent/>,
            number: "9",
            service: "Mutual Funds",
            colorScheme: financialServicesSectionColorScheme,
            styling: styles.fullWidth,
        },]
}

const comparisonCardPropsDrawbackProps: ComparisonCardLayoutPropTypes = {
    headingText: "Product-led selling",
    accentText: "The Conventional Model",
    points: ["Commission-driven recommendations", "Opaque fee structures and jargon", "One-size-fits-all portfolios", "Short-term, performance-chasing advice"],
    version: "drawbacks"
}

const comparisonCardPropsBenefitsProps: ComparisonCardLayoutPropTypes = {
    headingText: "Independent counsel",
    accentText: "Product-led selling",
    points: ["Transparent approach in plain language", "Independent advice, free of product quotas", "Plain & simple investing principles", "24 years of experience across cycles"],
    version: "benefits"
}


// #################
// # LOCAL LAYOUTS #
// #################

const ComparisonCard = ({accentText, headingText, points, version}: ComparisonCardLayoutPropTypes) => {
    return (
        <div
            className={`${styles.comparisonCardContainer} ${version === "drawbacks" ? comparisonCardDrawbacks : comparisonCardBenefits}`}>
            <p className={version === "drawbacks" ? styles.comparisonSecondaryText : styles.comparisonAccentText}>{accentText}</p>

            <p className={`heading6Cursive`}>{headingText}</p>

            <div className={styles.comparisonPoints}>
                {points.map((point, i) => {
                    return (
                        <>
                            <p key={i}
                               className={`${version === "drawbacks" ? styles.comparisonDrawback : styles.comparisonBenefits}`}> {`${point}`}</p>
                            <hr/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

// ############
// # SECTIONS #
// ############

const TrustSection = ({traitCards, colorScheme}: TrustSectionPropTypes) => {
    return (
        <div className={`${colorScheme} ${styles.trustPaddedContainer}`}>
            <div className={styles.noGapFlex1}>
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
    return (
        <div className={`${styles.statsPaddedContainer} ${colorScheme}`}>
            <HeadingLayout colorScheme={colorScheme} heading={heading} accentText={accentText}
                           textAlignment={"center"}/>

            <div className={`${styles.statsPaddedContainer} ${colorScheme}`}>
                <div className={styles.noGapFlex2}>
                    {statCards.map((statCard, i) => {
                        return (
                            <>
                                <StatCardLayout key={i} bigText={statCard.bigText} accentText={statCard.accentText}
                                                description={statCard.description} colorScheme={colorScheme}
                                                styling={statCard.styling}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const PhilosphySection = ({accentText, headingText, colorScheme, philosphyCards}: PhilosphySectionPropTypes) => {
    return (
        <div className={`${colorScheme} paddedContainer`}>

            <div className={`maxWidthContainer outerFlexContainer`}>

                <HeadingLayout colorScheme={colorScheme} heading={headingText} accentText={accentText}
                               textAlignment={"left"}/>

                <div className={`innerFlexContainer ${styles.centeredFlexContent}`}>
                    {philosphyCards.map((philosphyCard, i) => {
                        return (
                            <PhilosphyCardLayout key={i} serial={philosphyCard.serial}
                                                 colorScheme={philosphyCard.colorScheme}
                                                 description={philosphyCard.description} trait={philosphyCard.trait}/>)
                    })}
                </div>
            </div>
        </div>
    )
}

const FinancialServicesSection = ({
                                      colorScheme,
                                      linkText,
                                      headingText,
                                      accentText,
                                      serviceBriefCards
                                  }: FinancialServicesSectionPropTypes) => {
    return (
        <div className={`${colorScheme} paddedContainer`}>
            <div className={`maxWidthContainer outerFlexContainer`}>
                <HeadingLayout colorScheme={colorScheme} heading={headingText} accentText={accentText}
                               textAlignment={"left"}/>

                <Link href={linkText} className={"straightLink"}>{linkText}</Link>

                <div className={`${styles.noGapFlex3}`}>
                    {serviceBriefCards.map((briefCard, i) => {
                        return <ServiceBriefLayout key={i} colorScheme={briefCard.colorScheme} icon={briefCard.icon}
                                                   number={briefCard.number} service={briefCard.service}
                                                   styling={briefCard.styling}/>
                    })
                    }
                </div>

                <CTAButton ctaText={"Discuss your Financial Goals"}
                           styling={`${styles.smallCtaButton} ${styles.centered}`}/>
            </div>
        </div>
    )
}


const CompariosonSection = () => {
    return (
        <div className={`colorScheme2 paddedContainer`}>

            <div className={`outerFlexContainer maxWidthContainer`}>

                <HeadingLayout colorScheme={"colorScheme1"}
                               heading={<p>Advice you can trace back to your interest — and only yours.</p>}
                               accentText={"WHY CLIENTS CHOOSE INVESGATE"} textAlignment={"center"}/>

                <div className={`innerFlexContainer ${styles.centeredFlexContent}`}>
                    <ComparisonCard
                        headingText={comparisonCardPropsDrawbackProps.headingText}
                        accentText={comparisonCardPropsDrawbackProps.accentText}
                        points={comparisonCardPropsDrawbackProps.points} version={"drawbacks"}/>

                    <ComparisonCard
                        headingText={comparisonCardPropsBenefitsProps.headingText}
                        accentText={comparisonCardPropsBenefitsProps.accentText}
                        points={comparisonCardPropsBenefitsProps.points} version={"benefits"}/>
                </div>
            </div>
        </div>
    )
}

const MeetingSection = () => {
    return (
        <div className={`colorScheme2 paddedContainer`}>
            <div className={`${styles.meetingContainer} maxWidthContainer`}>
                <div className={`${styles.meetingDetailsContainer}`}>
                    <HeadingLayout colorScheme={"colorScheme1"}
                                   heading={<p>A simple conversation, whenever you’re ready.</p>}
                                   accentText={"PRIVATE CONSULTATION"} textAlignment={"left"}/>

                    <p className={"normalLStraight"}>Sit down with an independent advisor for an unhurried reading of where your wealth stands
                        today — and where disciplined planning could take it. No cost, no obligation.</p>

                    <CTAButton ctaText={"Talk to Us"} styling={styles.smallCtaButton}/>
                </div>

                <Image src={meetingImage} alt={"meeting image"} width={100} height={100}
                       className={styles.image}/>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div>
            <HeroSectionLayout/>

            <TrustSection colorScheme={trustSectionProps.colorScheme} traitCards={trustSectionProps.traitCards}/>

            <StatSection colorScheme={statSectionProps.colorScheme} heading={statSectionProps.heading}
                         accentText={statSectionProps.accentText} statCards={statSectionProps.statCards}/>

            <PhilosphySection accentText={philosphySectionProps.accentText}
                              headingText={philosphySectionProps.headingText}
                              philosphyCards={philosphySectionProps.philosphyCards}
                              colorScheme={philosphySectionProps.colorScheme}/>

            <FinancialServicesSection colorScheme={financialServicesSectionProps.colorScheme}
                                      headingText={financialServicesSectionProps.headingText}
                                      accentText={financialServicesSectionProps.accentText}
                                      linkText={financialServicesSectionProps.linkText}
                                      serviceBriefCards={financialServicesSectionProps.serviceBriefCards}/>

            <CompariosonSection/>

            <MeetingSection/>

            <CTALayout version={"home"}/>

        </div>
    )
}
