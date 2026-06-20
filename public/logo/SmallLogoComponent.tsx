interface IconPropTypes {
    styling?: string
}

const ColoredIcon = ({styling}: IconPropTypes) => {
    return (
        <svg viewBox="0 0 95 89" fill="none" xmlns="http://www.w3.org/2000/svg" className={styling}>
            <path d="M47.2266 29.1641V42.7246L58.7598 49.3828V88.4531H70.5039V42.6035L47.2266 29.1641Z" fill="#0D2C8A"/>
            <path d="M47.2266 29.1641V42.7246L35.6934 49.3828V88.4531H23.9492V42.6035L47.2266 29.1641Z" fill="#1841BD"/>
            <path d="M44.6289 13.5391V0.0683899L44.5898 0L0 25.7461V88.4531H11.7441V32.5254L44.6289 13.5391Z"
                  fill="#3765F1"/>
            <path d="M49.8242 13.5391V0.0683899L49.8633 0L94.4532 25.7461V88.4531H82.709V32.5254L49.8242 13.5391Z"
                  fill="#1841BD"/>
        </svg>
    )
}

const SolidIcon = ({styling}: IconPropTypes) => {
    return (
        <svg viewBox="0 0 95 89" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={styling}>
            <path d="M47.2266 29.1641V42.7246L58.7598 49.3828V88.4531H70.5039V42.6035L47.2266 29.1641Z"
                  fill="currentColor"/>
            <path d="M47.2266 29.1641V42.7246L35.6934 49.3828V88.4531H23.9492V42.6035L47.2266 29.1641Z"
                  fill="currentColor"/>
            <path d="M44.6289 13.5391V0.0683899L44.5898 0L0 25.7461V88.4531H11.7441V32.5254L44.6289 13.5391Z"
                  fill="currentColor"/>
            <path d="M49.8242 13.5391V0.0683899L49.8633 0L94.4532 25.7461V88.4531H82.709V32.5254L49.8242 13.5391Z"
                  fill="currentColor"/>
        </svg>
    )
}

export interface SmallLogoComponentPropTypes {
    styling?: string,
    version: "colored" | "solid"
}

export default function SmallLogoComponent({styling, version}: SmallLogoComponentPropTypes) {
    return (
        <>
            {
                version === "colored" ? <ColoredIcon styling={styling}/> : <SolidIcon styling={styling}/>
            }
        </>
    )
}