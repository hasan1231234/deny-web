import React from 'react'
import down from '../images/tabler-icon-chevron-down.png'
import logo from '../images/Frame 7450.png'
import search from '../images/tabler-icon-search.png'
import logo1 from '../images/Tab Button.png'
import { TbCircleDotted } from "react-icons/tb";
import { GiOpenBook } from "react-icons/gi";
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='container p-5'>
        <div className="d-flex align-items-center justify-content-between">

             <div className='d-flex align-items-center gap-3'>
                 <div className='polit'>أ س </div>
                 <h3>الاء سعيد</h3>
                 <img src={down} alt="" />
             </div>
             <div>
                <img src={logo} alt="" />
             </div>
             <div></div>
        </div>
        <div className='position-relative'>
        <input type="search" placeholder='ابحث هنا ' className='input-search'/>
        <img src={search} alt="" className='icon-search'/>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
            <span className='sora'>الكهف </span>
            <span className='sora'>الرحمن</span>
            <span className='sora'>تبارك</span>
            <span className='sora'>الانسان</span>
            <span className='sora'>البقرة</span>
        </div>

        <div className="d-flex align-items-center my-3 justify-content-center gap-3">
            <img src={logo1} alt="" />
            <div className='d-flex align-items-center gap-3 type'><span>السور</span><TbCircleDotted className='fw-bold fs-3'/></div>
            <Link to='/athkar'><div className='d-flex align-items-center gap-3 type'><span>الاذكار</span><GiOpenBook className='fw-bold fs-3'/></div></Link>

</div>

    </div>
  )
}
