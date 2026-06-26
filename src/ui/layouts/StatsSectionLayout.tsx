import {ReactElement} from "react";
import StatCardLayout, {StatCardLayoutPropTypes} from "@/ui/layouts/StatCardLayout";
import styles from "./StatsSectionLayout.module.css";
import HeadingLayout from "@/ui/layouts/HeadingLayout";

export interface StatsSectionLayoutPropTypes {
    colorScheme: string,
    heading: ReactElement,
    accentText: string,
    statCards: StatCardLayoutPropTypes[]
}

export default function StatsSectionLayout({colorScheme, heading, accentText, statCards}: StatsSectionLayoutPropTypes) {
    return (
        <div className={`paddedContainer ${colorScheme}`}>
            <HeadingLayout colorScheme={colorScheme} heading={heading} accentText={accentText}
                           textAlignment={"center"}/>


            <div className={styles.noGapFlex2}>
                {statCards.map((statCard, i) => {
                    return (
                        <>
                            <StatCardLayout key={i} bigText={statCard.bigText} accentText={statCard.accentText}
                                            description={statCard.description} colorScheme={colorScheme}
                                            styling={styles.statCard}/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}