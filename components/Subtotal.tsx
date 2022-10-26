import { Component } from "react"
import styles from "../styles/Subtotal.module.css"

export default function Subtotal() {
    return (
        <div className={styles.subtotal}>
            <div className={styles.subtotal__frete}>
                <span>Frete</span>
                <div className={styles.pricing}>
                    <span className={styles.subtotal__currency}>R$</span>
                    <span className={styles.subtotal__price}>5.00</span>
                </div>
            </div>

            <div className={styles.subtotal__total}>
                <span>Total</span>
                <div className={styles.pricing}>
                    <span className={styles.subtotal__currency_green}>R$</span>
                    <span className={styles.subtotal__price_green}>121.47</span>
                </div>
            </div>
        </div>
    )
}