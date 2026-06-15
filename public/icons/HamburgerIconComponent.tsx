export interface HamburgerIconComponentPropType {
    styling?: string,
}

export default function HamburgerIconComponent({styling}: HamburgerIconComponentPropType) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <path
                d="M14.9333 3.73343H1.06667C0.4776 3.73343 0 3.25583 0 2.66676C0 2.0777 0.4776 1.6001 1.06667 1.6001H14.9333C15.5224 1.6001 16 2.0777 16 2.66676C16 3.25583 15.5224 3.73343 14.9333 3.73343Z"
                fill="currentColor"/>
            <path
                d="M14.9333 14.3999H1.06667C0.4776 14.3999 0 13.9223 0 13.3333C0 12.7442 0.4776 12.2666 1.06667 12.2666H14.9333C15.5224 12.2666 16 12.7442 16 13.3333C16 13.9223 15.5224 14.3999 14.9333 14.3999Z"
                fill="currentColor"/>
            <path
                d="M14.9333 9.06693H1.06667C0.4776 9.06693 0 8.58933 0 8.00026C0 7.41119 0.4776 6.93359 1.06667 6.93359H14.9333C15.5224 6.93359 16 7.41119 16 8.00026C16 8.58933 15.5224 9.06693 14.9333 9.06693Z"
                fill="currentColor"/>
        </svg>
    )
}