import Section from "./Section"
import styles from "../styles/Information.module.css"
import { useState, useEffect } from 'react'

interface IUser {
    name: string,
    address: string,
    fone: string
}

export default function Information(){
   const [data, setData] = useState<IUser>([])
    
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
            <Section title="Minhas informações"/>
            <div className={styles.information__data}>
                <span>Nome:</span>
                <p>{data.name}</p>
                <span>Endereço:</span>
                <p>{data.address}</p>
                <span>Telefone:</span>
                <p>{data.fone}</p>
            </div>
        </div>
    )
}