import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import img from '../images/Rectangle 37.png'
export default function Theker() {
  return (
    <div>
        <Header/>

          <img src={img} className='mx-auto d-block' alt="" /><br /><br /><br /><br /><br />
        <Footer/>
    </div>
  )
}
