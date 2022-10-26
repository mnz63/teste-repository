import styles from "../styles/Section.module.css"

interface IProps {
    title: string;
}

export default function Section (props: IProps) {
    return (
        <div className={styles.section}>
            <span className={styles.section__title}>{props.title}</span>
        </div>
    )
}