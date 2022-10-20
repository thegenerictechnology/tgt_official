import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header1 from '../components/headers/header1'
import Header2 from '../components/headers/header2'
import Carousels from '../components/carousels/carousel1'
import Modal from '../components/modals/modal1'
import Footer from '../components/footers/footer'

export default function Home() {
  return (
<>

    <div className="">
      <Header1/>
      {/* <Header2/> */}
      <div className="container"></div>
      {/* <Modal/> */}
      <Footer/>
    </div>

</>

  )
}
