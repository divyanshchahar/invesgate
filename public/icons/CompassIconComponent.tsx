export interface CompassIconComponentPropTypes {
    styling?: string,
}

export default function CompassIconComponent({styling}: CompassIconComponentPropTypes) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <g clipPath="url(#clip0_2026_309)">
                <path
                    d="M4.65335 11.3456C4.50455 11.1968 4.45709 10.9733 4.53229 10.777L6.18242 6.48745C6.23682 6.34665 6.34829 6.23518 6.48855 6.18078L10.7782 4.53118C10.9755 4.45652 11.1974 4.50292 11.3467 4.65225C11.4955 4.80105 11.543 5.02398 11.4678 5.22078L9.81762 9.51038C9.76322 9.65118 9.65175 9.76265 9.51149 9.81705L5.22189 11.4666C5.02562 11.5418 4.80215 11.4944 4.65335 11.3456ZM7.09282 7.09172L5.95895 10.04L8.90722 8.90612L10.0411 5.95785L7.09282 7.09172Z"
                    fill="currentColor"/>
                <path
                    d="M8 16C3.5888 16 0 12.4112 0 8C0 3.5888 3.5888 0 8 0C12.4112 0 16 3.5888 16 8C16 12.4112 12.4112 16 8 16ZM8 1.06667C4.17707 1.06667 1.06667 4.17707 1.06667 8C1.06667 11.8229 4.17707 14.9333 8 14.9333C11.8229 14.9333 14.9333 11.8229 14.9333 8C14.9333 4.17707 11.8229 1.06667 8 1.06667Z"
                    fill="currentColor"/>
            </g>
            <defs>
                <clipPath id="clip0_2026_309">
                    <rect width="100%" height="100%" fill="currentColor"/>
                </clipPath>
            </defs>
        </svg>
    )
}