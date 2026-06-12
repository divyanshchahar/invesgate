export interface TrendIconComponentPropTypes {
    styling?: string,
}

export default function TrendIconComponent({styling}: TrendIconComponentPropTypes) {
    return (
        <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styling}>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.8047 3.52851C16.0651 3.78887 16.0651 4.21097 15.8047 4.47133L9.4714 10.8047C9.21107 11.065 8.78893 11.065 8.5286 10.8047L5.66667 7.94272L1.13807 12.4713C0.87772 12.7317 0.455611 12.7317 0.195262 12.4713C-0.0650874 12.211 -0.0650874 11.7889 0.195262 11.5285L5.19526 6.52851C5.45561 6.26817 5.87772 6.26817 6.13807 6.52851L9 9.39045L14.8619 3.52851C15.1223 3.26817 15.5444 3.26817 15.8047 3.52851Z"
                  fill="currentColor"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.6667 3.99992C10.6667 3.63173 10.9652 3.33325 11.3334 3.33325H15.3334C15.7016 3.33325 16 3.63173 16 3.99992V7.99992C16 8.36812 15.7016 8.66659 15.3334 8.66659C14.9652 8.66659 14.6667 8.36812 14.6667 7.99992V4.66659H11.3334C10.9652 4.66659 10.6667 4.36811 10.6667 3.99992Z"
                  fill="currentColor"/>
        </svg>
    )
}
