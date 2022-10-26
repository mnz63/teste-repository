import styles from '../styles/Home.module.css'
import Logo from '../components/Logo'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Orders from '../components/Orders'
import Subtotal from '../components/Subtotal'
import Checkout from '../components/Checkout'

export default function Home() {
  return (
    <div>
      <Logo/>
      <Banner/>
      <Information/>
      <Orders/>
      <Subtotal/>
      <Checkout/>
    </div>
  )
}
