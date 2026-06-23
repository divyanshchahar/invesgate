import TrendIconComponent from "../../../public/icons/TrendIconComponent";
import ServiceDetailCardLayout, {ServiceDetailCardLayoutPropsTypes} from "@/ui/layouts/ServiceDetailCardLayout";
import AlternativeInvestmentFundsIconComponent from "../../../public/icons/AlternativeInvestmentFundIconComponent";
import LoanIconComponent from "../../../public/icons/LoanIconComponent";
import FinancialPlanningIconComponent from "../../../public/icons/FinancialPlanningIconComponent";
import EstatePlanningIconComponent from "../../../public/icons/EstatePlanningIconComponent";
import RealEstateIconComponent from "../../../public/icons/RealEstateIconComponent";
import PortfolioIconComponentProps from "../../../public/icons/PortfolioIconComponent";
import MutualFundsIconComponent from "../../../public/icons/MutualFundsIconComponent";
import styles from "./index.module.css"
import HeaderLayout from "@/ui/layouts/HeaderLayout";
import CTALayout from "@/ui/layouts/CTALayout";

const serviceSectionColorScheme = "colorScheme1";

const props: ServiceDetailCardLayoutPropsTypes[] = [{
    service: "Alternative Investment Funds",
    description: "Access to professionally managed private market strategies that sit beyond conventional public markets — structured for sophisticated investors seeking differentiated returns.",
    benefits: ["Diversification beyond listed equities and bonds", "Access to private equity, credit, and structured strategies", "Professional management with institutional discipline"],
    idealFor: "Established investors with surplus capital seeking to diversify a mature portfolio and willing to commit for the long term.",
    colorScheme: serviceSectionColorScheme,
    icon: <AlternativeInvestmentFundsIconComponent/>,
    serialNo: "01"
},
    {
        service: "Equity Investment",
        description: "Research-led equity portfolios built on conviction, not consensus — owning quality businesses and holding them with the patience that compounding rewards.",
        benefits: ["Conviction-led selection of quality businesses", "A long-term, cycle-aware approach to ownership", "Transparent rationale behind every position\n"],
        idealFor: "Investors with a multi-year horizon who want disciplined equity exposure without the noise of short-term trading.",
        colorScheme: serviceSectionColorScheme,
        icon: <TrendIconComponent/>,
        serialNo: "02"
    },
    {
        service: "Loans & Credit Solutions",
        description: "Structured borrowing against your assets — unlocking liquidity without disturbing a well-built portfolio or forcing untimely sales",
        benefits: ["Liquidity without liquidating long-term holdings", "Transparent rationale behind every position", "Structures matched to your cash-flow and goals"],
        idealFor: "Asset-rich investors needing flexible liquidity for opportunities or obligations, while keeping investments intact..",
        colorScheme: serviceSectionColorScheme,
        icon: <LoanIconComponent/>,
        serialNo: "03"
    },
    {
        service: "Insurance",
        description: "Protection that anchors the wider plan — ensuring that a single event never undoes years of careful-wealth building.",
        benefits: ["Life, health, and asset protection reviewed holistically", "Cover sized to your liabilities and dependents", "Recommendations free of product-push incentives"],
        idealFor: "Families and earners who want their protection to be deliberate and right-sized — never over-sold.",
        colorScheme: serviceSectionColorScheme,
        icon: <LoanIconComponent/>,
        serialNo: "04"
    },
    {
        service: "Financial Planning",
        description: "A clear roadmap built around your life goals — coordinating income, investments, protection, and milestones into one coherent plan.",
        benefits: ["Goal-based planning across life stages", "Cash-flow, tax-awareness, and contingency built in", "A living plan, reviewed as your life evolves"],
        idealFor: "Anyone seeking structure and clarity — from first serious savings to managing substantial, complex wealth.",
        colorScheme: serviceSectionColorScheme,
        icon: <FinancialPlanningIconComponent/>,
        serialNo: "05"
    },
    {
        service: "Estate Planning",
        description: "Transfer wealth with intent and clarity — ensuring what you have built passes to the next generation on your terms, without friction.",
        benefits: ["Succession structured to your wishes", "Coordination of wills, nominations, and trusts", "Continuity that protects family and legacy"],
        idealFor: "Investors thinking beyond their own horizon, who want their legacy transferred smoothly and intentionally.",
        colorScheme: serviceSectionColorScheme,
        icon: <EstatePlanningIconComponent/>,
        serialNo: "06"
    },
    {
        service: "Real Estate",
        description: "Property treated as a deliberate allocation within the wider portfolio — assessed on merit, not sentiment, and integrated into your plan.",
        benefits: ["Real estate as a considered portfolio allocation", "Objective assessment of yield and liquidity", "Integration with your broader wealth strategy"],
        idealFor: "Investors weighing property decisions who want them framed within a complete wealth picture.",
        colorScheme: serviceSectionColorScheme,
        icon: <RealEstateIconComponent/>,
        serialNo: "07"
    },
    {
        service: "Portfolio Management",
        description: "Active stewardship of the whole picture — balancing every asset, every goal, and every market cycle with discipline and a steady hand.",
        benefits: ["Holistic oversight across all asset classes", "Disciplined rebalancing through market cycles", "One coherent view of your entire wealth"],
        idealFor: "Investors who want a single, trusted steward coordinating the full breadth of their wealth..",
        colorScheme: serviceSectionColorScheme,
        icon: <PortfolioIconComponentProps/>,
        serialNo: "08"
    },
    {
        service: "Mutual Funds",
        description: "As an AMFI-registered distributor, we guide you to mutual funds chosen on merit — not commission. The discipline of pooled, professionally managed investing, made plain and matched patiently to your goals.",
        benefits: ["Independent fund selection across categories and houses", "SIP discipline that turns patience into compounding", "Transparent, AMFI-registered, conflict-free recommendations"],
        idealFor: "Investors who want diversified, professionally managed exposure — whether beginning a first SIP or consolidating a scattered fund portfolio.",
        colorScheme: serviceSectionColorScheme,
        icon: <MutualFundsIconComponent/>,
        serialNo: "09"
    }
]

export default function AboutUsPage() {
    return (

        <>
            <HeaderLayout colorScheme={"colorScheme3"} version={"services"}/>

            <div className={`colorScheme1 ${styles.paddedContainer} paddedContainer`}>
                {
                    props.map((prop, i) => {
                            return (
                                <>
                                    <ServiceDetailCardLayout key={i} service={prop.service} description={prop.description}
                                                             benefits={prop.benefits} idealFor={prop.idealFor}
                                                             colorScheme={prop.colorScheme} icon={prop.icon}
                                                             serialNo={prop.serialNo}/>

                                    <hr/>
                                </>
                            )
                        }
                    )
                }
            </div>

            <CTALayout version={"services"}/>
        </>
    )
}
