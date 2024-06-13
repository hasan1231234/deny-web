import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo1 from '../images/muslim (1) 1.png'
import logo2 from '../images/Vector.png'
import logo3 from '../images/makiyyah.png'
import logo4 from '../images/book.png'
import { Link } from 'react-router-dom'
export default function Save() {
    const data = [ 
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
        {
          name1 : 'الفاتحة',
          name2 : 'Al-Fātiḥah',
          mints : '3دقائق',
          type : 'مكية',
          number : '7ايات',
          id : 1
        },
  ]
  return (
    <div>
        <Header/>

     <h3 className='container mb-3'>المحفوظات</h3>

     <div className="d-flex container align-items-center justify-content-between flex-wrap">

{data.map((item) => {
  return(
<Link to='/sora'>
              <div className='sora-div d-flex align-items-center justify-content-between '>

<div className="d-flex justify-content-between w-80">
<h3 className='text-success fw-bold fs-14'>{item.name1}</h3>

<div>
<h3 className='float-left fs-14'>{item.name2}</h3>
<div className="d-flex align-items-center mt-4 gap-3 mr-35">
<div className="sora1 d-flex align-items-center"><span className='span-sora'>{item.mints}</span><img src={logo2} alt="" /></div>
<div className="sora1 d-flex align-items-center"><span className='span-sora'>{item.type}</span><img src={logo3} alt="" /></div>
<div className="sora1 d-flex align-items-center"><span className='span-sora'>{item.number}</span><img src={logo4} alt="" /></div>


</div>
</div>
</div>
<div className='position-relative'>
<span className='span-absolute'>{item.id}</span>
<img src={logo1} alt="" />
</div>
</div></Link>
  )
})}





</div><br /><br /><br /><br /><br /><br /><br /><br />

        <Footer/>
    </div>
  )
}
