export interface CheckIconComponentPropTypes {
    styling?: string,
}

export default function CheckIconComponent({styling}: CheckIconComponentPropTypes) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.7061 2.3316C16.0674 2.64774 16.1002 3.1985 15.7788 3.55518L6.73218 13.5964C6.40913 13.955 5.85447 13.9778 5.50309 13.647L0.268105 8.71871C-0.0583653 8.41136 -0.0896166 7.89923 0.190485 7.54911C0.499557 7.16277 1.07512 7.10959 1.44295 7.44044L5.50459 11.0938C5.85757 11.4113 6.401 11.3829 6.71901 11.0304L14.5005 2.40277C14.8153 2.05364 15.3523 2.02199 15.7061 2.3316Z"
                  fill="currentColor"/>
        </svg>
    )
}