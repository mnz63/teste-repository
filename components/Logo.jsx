import Image from "next/image"
import logoImg from '../public/assets/logo.png'
import styles from "../styles/Logo.module.css"

export default function Logo(){
    return (
        <div className={styles.logo}>
           <Image src={logoImg} alt="Logo"/> 
        </div>
    )
}