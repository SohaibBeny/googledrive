import React from 'react'
import './Navbar2.css';
import { Icon } from '@iconify/react';
import img10 from '../Assets/images/Navbar2/pic1.png';
import img11 from '../Assets/images/Navbar2/pic2.png';
import img12 from '../Assets/images/Navbar2/pic3.png';

export default function Navbar2() {
  return (
    <>
      <section className='navbar-sec'>
        <div className='navbar-1'>

          <div className='navbar-a'>
            <img src={img10} alt="" />
            <img src={img11} alt="" />
            <img src={img12} alt="" />
            <div className='navbar-b'>
              <Icon className='icon-1' icon="carbon:add" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
