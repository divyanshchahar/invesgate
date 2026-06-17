export interface Shield1IconComponentPropTypes {
    styling?: string;
}

export default function Shield1IconComponent({styling}: Shield1IconComponentPropTypes) {
    return (
        <svg viewBox="0 0 17 17" fill="currentColor" fillOpacity={0} xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <path
                d="M8.5 0.499923L0.5 3.25848V6.61188C0.5 10.9517 3.662 14.86 8.5 16.5C13.338 14.86 16.5 10.9517 16.5 6.61188V3.25848L8.5 0.499923Z"
                stroke="currentColor" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.5 7.99859L7.78139 9.89331L11.8673 6.4999" stroke="currentColor" strokeMiterlimit="10"
                  strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}