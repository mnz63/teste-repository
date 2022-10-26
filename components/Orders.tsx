import styles from "../styles/Orders.module.css"
import Section from "./Section"
import Product from "./Product"
import { useState, useEffect } from 'react'

interface IProduct  {
    id: number,
    name: string,
    description: string,
    price: number
}

export default function Orders(){
    const [data, setData]= useState<Array<IProduct>>()
    
    useEffect(() => {
        fetch('https://api-for-next.herokuapp.com/')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
          })
      }, [])

    return(
        <div className={styles.orders}>
            <Section title="Meu pedido"/>
            <div className={styles.products}>
                {data && data.map((product: IProduct) => 
                <Product 
                id={product.id}
                key={product.id}
                name={product.name}
                description={product.description} 
                price={product.price}/>)}
            </div>
        </div>
    )
}