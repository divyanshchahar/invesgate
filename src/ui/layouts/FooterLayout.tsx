import FacebookComponent from "../../../public/icons/FacebookIconComponent"
import Link from 'next/link'
import styles from "./FooterLayout.module.css"
import {ReactElement} from "react";
import InstagramIconComponent from "../../../public/icons/InstagramIconComponent";
import LinkedinIconComponent from "../../../public/icons/LinkedinIconComponent";
import TwitterIconComponent from "../../../public/icons/TwitterIconComponent";
import BigLogoComponent from "../../../public/logo/BigLogoComponent";
import contactDetails from "../../../src/consts/contactDetails.json"
import internalLinks from "./../../../src/consts/internalLinks.json"

export interface IconCarrierPropTypes {
    icon: ReactElement;
}

export interface LinkCarrierPropTypes {
    heading: string;
    links: { linkText: string, linkAddress: string }[];
}

const IconCarrier = ({icon}: IconCarrierPropTypes) => {
    return (
        <Link href={""} className={styles.iconCarrier}>
            <div>
                {icon}
            </div>
        </Link>

    )
}

const LinkCarrier = ({heading, links}: LinkCarrierPropTypes) => {
    return <div className={`${styles.linkCarrier}`}>
        <p className={`boldNStraight`}>{heading}</p>
        {links.map((link, i) => {
            return (
                <>
                    <div>
                        <Link href={link.linkAddress} key={i} className={styles.paddingTopSmall}>{link.linkText}</Link>
                    </div>
                </>
            )
        })}
    </div>
}

const OfficeDetails = () => {
    return <div className={styles.officeDetails}>
        <p className={"boldNStraight"}>OFFICE</p>

        <p className={styles.paddingTopSmall}>{contactDetails.officeAddress}</p>

        <p className={styles.paddingTopSmall}>{contactDetails.mobileNumber}</p>

        <p className={styles.paddingTopSmall}>{contactDetails.email}</p>

        <button className={`straightLink ${styles.paddingTopSmall}`}>Talk to Us</button>
    </div>
}

export default function FooterLayout() {
    return (
        <div className={`colorScheme3 ${styles.container}`}>
            <div className={`${styles.top}`}>
                <div className={styles.iconAndSocialMedia}>
                    <BigLogoComponent version={"solid"}/>

                    <div className={`${styles.socialMedia}`}>
                        <IconCarrier icon={<FacebookComponent/>}/>

                        <IconCarrier icon={<InstagramIconComponent/>}/>

                        <IconCarrier icon={<LinkedinIconComponent/>}/>

                        <IconCarrier icon={<TwitterIconComponent/>}/>
                    </div>
                </div>

                <div className={`${styles.textContainer}`}>
                    <LinkCarrier heading={"NAVIGATION"} links={
                        [
                            {linkText: "Home", linkAddress: internalLinks.home},
                            {
                                linkText: "About Us",
                                linkAddress: internalLinks.aboutUS
                            },
                            {
                                linkText: "Services",
                                linkAddress: internalLinks.services
                            },
                            {
                                linkText: "Contact Us",
                                linkAddress: ""
                            }
                        ]}/>

                    <LinkCarrier heading={"SERVICES"} links={[{
                        linkText: "Alternative Investment Funds",
                        linkAddress: ""
                    }, {
                        linkText: "Equity Investment",
                        linkAddress: ""
                    }, {
                        linkText: "Loans & Credit Solutions",
                        linkAddress: ""
                    }, {
                        linkText: "Insurance",
                        linkAddress: ""
                    }, {
                        linkText: "Financial Planning",
                        linkAddress: ""
                    }, {
                        linkText: "Estate Planning",
                        linkAddress: ""
                    }, {
                        linkText: "Real Estate",
                        linkAddress: ""
                    }, {
                        linkText: "Portfolio Management",
                        linkAddress: ""
                    }, {
                        linkText: "Mutual Funds",
                        linkAddress: ""
                    }
                    ]}/>

                    <OfficeDetails/>


                </div>
            </div>

            <hr/>

            <p className={`lightNStraight ${styles.paddingTopLarge} ${styles.centerAlignedText} ${styles.secondaryText}`}>©
                2026 Invesgate ·
                Investigate Edge LLP. All
                rights reserved.</p>

            <p className={`boldNStraight ${styles.paddingTopLarge} ${styles.centerAlignedText} ${styles.accentText}`}>AMFI
                Registered Mutual
                Fund Distributor (ARN-164158)</p>
        </div>
    )
}