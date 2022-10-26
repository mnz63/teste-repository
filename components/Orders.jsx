import styles from "../styles/Orders.module.css"
import Section from "./Section"
import Product from "./Product"
import { useState, useEffect } from 'react'

export default function Orders(){
    const [data, setData] = useState("")
    
    useEffect(() => {
        fetch('https://api-for-next.herokuapp.com/')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })
      }, [])

    return(
        <div className={styles.orders}>
            <Section sectionTitle="Meu pedido"/>
            <div className={styles.products}>
                {data && data.map(product=> <Product key={product.id} name={product.name} description={product.description} price={product.price}/> )}
            </div>
        </div>
    )
}