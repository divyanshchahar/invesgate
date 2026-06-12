export interface LinkedinIconComponentPropType {
    styling?: string,
}

export default function LinkedinIconComponent({styling}: LinkedinIconComponentPropType) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <g clip-path="url(#clip0_2060_1049)">
                <path
                    d="M16 16.0001V10.1401C16 7.26006 15.38 5.06006 12.02 5.06006C10.4 5.06006 9.31997 5.94006 8.87997 6.78006H8.83997V5.32006H5.65997V16.0001H8.97997V10.7001C8.97997 9.30006 9.23997 7.96006 10.96 7.96006C12.66 7.96006 12.68 9.54006 12.68 10.7801V15.9801H16V16.0001Z"
                    fill="currentColor"/>
                <path d="M0.26001 5.31982H3.58001V15.9998H0.26001V5.31982Z" fill="currentColor"/>
                <path
                    d="M1.92 0C0.86 0 0 0.860001 0 1.92C0 2.98 0.86 3.86 1.92 3.86C2.98 3.86 3.84 2.98 3.84 1.92C3.84 0.860001 2.98 0 1.92 0Z"
                    fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_2060_1049">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>
    )
}