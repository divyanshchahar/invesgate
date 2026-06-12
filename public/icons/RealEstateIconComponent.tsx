export interface RealEstateIconComponentPropTypes {
    styling?: string,
}

export default function RealEstateIconComponent({styling}: RealEstateIconComponentPropTypes) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <g clip-path="url(#clip0_2026_313)">
                <path d="M3.19995 11.4646H4.26662V13.0646H3.19995V11.4646Z" fill="currentColor"/>
                <path d="M5.33325 11.4646H6.39992V13.0646H5.33325V11.4646Z" fill="currentColor"/>
                <path
                    d="M14.9333 0.800537L7.46667 4.53387V6.81095L1.06667 10.011V14.1328H0V15.1995H16V14.1328H14.9333V0.800537ZM13.8667 2.52658V14.1328H8.53333V5.19325L13.8667 2.52658ZM2.13333 10.6703L7.46667 8.00366V14.1328H2.13333V10.6703Z"
                    fill="currentColor"/>
                <path d="M9.59998 11.4646H10.6666V13.0646H9.59998V11.4646Z" fill="currentColor"/>
                <path d="M9.59998 8.80054H10.6666V10.4005H9.59998V8.80054Z" fill="currentColor"/>
                <path d="M9.59998 6.13257H10.6666V7.73257H9.59998V6.13257Z" fill="currentColor"/>
                <path d="M11.7334 11.4646H12.8001V13.0646H11.7334V11.4646Z" fill="currentColor"/>
                <path d="M11.7334 8.80054H12.8001V10.4005H11.7334V8.80054Z" fill="currentColor"/>
                <path d="M11.7334 6.13257H12.8001V7.73257H11.7334V6.13257Z" fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_2026_313">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>
    )
}