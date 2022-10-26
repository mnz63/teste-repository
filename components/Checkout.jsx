import styles from "../styles/Checkout.module.css"
import check from "../public/assets/check.svg"
import Image from "next/image"


export default function Checkout(){
    return(
        <div className={styles.checkout}>
            <div className={styles.checkout__content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Est temporibus accusantium vitae harum corporis impedit molestiae iure ipsa placeat?</p>

                <div className={styles.checkout__social}>

                    <span className={styles.checkout__item}>
                        <input type="radio" name="social" value="Facebook"/>
                        <label>Facebook</label>
                    </span>
                    <span className={styles.checkout__item}>
                        <input type="radio" name="social" value="Instagram"/>
                        <label>Instagram</label>
                    </span>
                    <span className={styles.checkout__item}>
                        <input type="radio" name="social" value="Indicação"/>
                        <label>Indicação</label>
                    </span>
                    
                 </div>
                 <button className={styles.checkout__button}>
                     <span><Image src={check} alt="Check" className={styles.checkout__check}/></span>
                    Confirmar pedido</button>
            </div>
            
            
        </div>
    )
}