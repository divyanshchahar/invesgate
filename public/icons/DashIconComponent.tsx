export interface DashIconComponentPropType {
    styling?: string,
}

export default function DashIconComponent({styling}: DashIconComponentPropType) {
    return (
        <svg viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
             className={styling}>
            <path d="M16 8H0V8.96899H16V8Z" fill="currentColor"/>
        </svg>
    )
}