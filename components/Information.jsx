import Section from "./Section"
import styles from "../styles/Information.module.css"
import { useState, useEffect } from 'react'

export default function Information(props){
   const [data, setData] = useState("")
    
    useEffect(() => {
        fetch('https://api-for-next.herokuapp.com/users')
          .then((res) => res.json())
          .then((data) => {
            const [user] = data
            setData(user) 
          })
      }, [])

    return(
        <div className={styles.information}>
            <Section sectionTitle="Minhas informações"/>
            <div className={styles.information__data}>
                <span>Nome:</span>
                <p>{data.name}</p>
                <span>Endereço:</span>
                <p>{data.adress}</p>
                <span>Telefone:</span>
                <p>{data.fone}</p>
            </div>
        </div>
    )
}