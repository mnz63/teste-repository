import Image from "next/image"
import bannerImg from '../public/assets/banner.png'
import styles from "../styles/Banner.module.css"

export default function Logo(){
    return (
        <div className={styles.banner}>
            <span className={styles.banner__text}>Farmácia de Manipulação que há 28 anos leva saúde e<br/>
                qualidade de vida até você!
            </span>
           <Image src={bannerImg} alt="Logo" className={styles.banner__image}/>
        </div>
    )
}