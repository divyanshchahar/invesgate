import StarIconComponent from "../../../public/icons/StarIconComponent";
import styles from "./ReviewCardLayout.module.css"
import Image, {StaticImageData} from "next/image";
import reviewersimage from "../../../public/images/reviewer1.jpeg"

export interface ReviewCardLayoutPropTypes {
    stars: number,
    review: string,
    name: string,
    designation: string,
    colorScheme: string,
    styling?: string,
    reviewersImage: StaticImageData,
}

export default function ReviewCardLayout({
                                             stars,
                                             review,
                                             name,
                                             designation,
                                             colorScheme,
                                             styling
                                         }: ReviewCardLayoutPropTypes) {
    const maxNumberOfStars = 5;

    const goldenStars = [];
    const greyStars = [];

    for (let i = 0; i < stars; i++) {
        goldenStars.push(<StarIconComponent/>)
    }

    for (let i = 0; i < (maxNumberOfStars - stars); i++) {
        greyStars.push(<StarIconComponent styling={`${styles.greyStar}`}/>)
    }

    return (
        <div className={`${styles.container} ${colorScheme} ${styling}`}>
            <div className={`${styles.starContainer}`}>
                {goldenStars}

                {greyStars}
            </div>

            <p className={`${styles.review} ${styles.topMargin}`}>{review}</p>

            <hr className={`${styles.topMargin}`}/>

            <div className={`${styles.topMargin} ${styles.reviewersDetailContainer}`}>

                <Image src={reviewersimage} alt={"reviewer's image"} width="48" height="48" className={styles.image}/>

                <div>
                    <p className={`${styles.name}`}>{name}</p>
                    <p className={`${styles.designation}`}>{designation}</p>
                </div>
            </div>
        </div>
    )
}