import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo1 from '../images/muslim (1) 1.png'
import { Link } from 'react-router-dom'

export default function Athkar() {

    const data = [
        {
            id: 1,
            name : 'اذكار الصباح'
        },
        {
            id: 2,
            name : 'اذكار المساء'
        },
        {
            id: 3,
            name : 'اذكار النوم'
        },
    ]
  return (
    <div>
        <Header/>

        <div className="d-flex container align-items-center justify-content-between flex-wrap">
        {data.map((item) => {
            return(
          <Link to='/theker'>
                        <div className='sora-div d-flex align-items-center justify-content-between '>

<div className="d-flex justify-content-between w-80">
<h3 className='text-success fw-bold fs-14'>{item.name}</h3>


</div>
<div className='position-relative'>
  <span className='span-absolute'>{item.id}</span>
<img src={logo1} alt="" />
</div>
</div></Link>
            )
          })} 
</div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />



        <Footer/>
    </div>
  )
}
