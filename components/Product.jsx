import styles from "../styles/Product.module.css"

export default function Product(props){
    return(
        <div className={styles.product}>
            <span className={styles.product__name}>{props.name}</span>
            <p className={styles.product__description}>{props.description}</p>

            <div className={styles.product__info}>
                <div className={styles.product__quantity}>
                    <p>Quantidade:</p>
                    <span>1</span>
                </div>
                <div className={styles.container}>
                    <span className={styles.product__currency}>R$</span>
                    <span className={styles.product__price}>{props.price}</span>
                </div>
            </div>
        </div>
    )
}