export interface ClockIconComponentProps {
    styling?: string
}

export default function ClockIconComponent({styling}: ClockIconComponentProps) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <g clip-path="url(#clip0_2026_308)">
                <path
                    d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                    fill="currentColor"/>
                <path
                    d="M10.7331 10.6909L8.33326 8.72723V4.72728C8.33326 4.32509 8.03528 4 7.66663 4C7.29798 4 7 4.32509 7 4.72728V9.09091C7 9.31998 7.09867 9.536 7.26665 9.67273L9.9331 11.8545C10.0531 11.9527 10.1931 12 10.3324 12C10.5357 12 10.7357 11.9004 10.8664 11.7084C11.0878 11.3876 11.0277 10.9316 10.7331 10.6909Z"
                    fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_2026_308">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>
    )
}

