import CTAButton from "@/ui/components/CTAButton";
import styles from "./HeroSectionLayout.module.css";
import Image from "next/image";
import heroImage from "../../../public/images/old_hero.png"

export default function HeroSectionLayout() {
    return (<div className={`${styles.container} colorScheme3`}>
        <div className={`${styles.flexContainer}`}>
            <div className={`${styles.detailsConatiner}`}>
                <div>
                    <p className={styles.accent}>AMFI Registered · Independent Advisory</p>

                    <p className={`${styles.gap6} heading2Cursive`}>Independent wealth management built on <span
                        className={`heading2Cursive`}>conviction</span></p>

                    <p className={`${styles.gap6} ${styles.light}`}>Helping investors grow, protect, and transfer wealth
                        through
                        disciplined, transparent advice — for
                        those who think in decades, not quarters.</p>

                    <CTAButton ctaText={"Talk to Us"} styling={styles.gap6}/>
                </div>

                <hr className={`${styles.gap6}`}/>

                <div className={`${styles.bottom} ${styles.gap6}`}>
                    <div>
                        <p className={"heading6Cursive"}>24</p>
                        <p className={`lightNStraight ${styles.gap1}`}>Years Combined Experiance</p>
                    </div>

                    <div>
                        <p className={"heading6Cursive"}>100 %</p>
                        <p className={`lightNStraight ${styles.gap1}`}>Independent Advice</p>
                    </div>

                    <div>
                        <p className={"heading6Cursive"}>9</p>
                        <p className={`lightNStraight ${styles.gap1}`}>Wealth disciplines</p>
                    </div>
                </div>
            </div>

            <div>
                {/*HEro Image*/}
                <Image src={heroImage} alt={"hero image"} className={`${styles.image}`}/>
            </div>


        </div>
    </div>)
}