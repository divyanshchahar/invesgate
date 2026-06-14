import styles from "./TextInputComponent.module.css"

export interface TextInputComponentPropTypes<T> {
    fieldName: string,
    colorScheme: string;
    props?: T;
}

export default function CTAButton({fieldName, colorScheme, ...props}: TextInputComponentPropTypes<T>) {
    return (
        <div className={`${colorScheme} ${styles.container}`}>
            <label>{fieldName}</label>
            <br/>
            <input type="text" {...props} />
        </div>)
}