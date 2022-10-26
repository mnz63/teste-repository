import styles from "../styles/Section.module.css"

export default function Section (props){
    return (
        <div className={styles.section}>
            <span className={styles.section__title}>{props.sectionTitle}</span>
        </div>
    )
}