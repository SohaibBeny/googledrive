import React from 'react'
import { Icon } from '@iconify/react';
import img1 from '../Assets/images/Navbar/img-nav-1.png'
import img2 from '../Assets/images/Navbar/maaz.png'
import './Navbar.css';


export default function Navbar() {
  return (
    <>
    <section className='nav-sec'>

      <div className='nav-1'>  
      
      <Icon className='icon-1' icon="bx:menu-alt-left" />

       <div className='nav-1-a'>
       <img src={img1} alt=""/>
       <h3>Drive</h3>
       </div>

       </div>

      <div className='nav-2'>
        <form action="">
            <div className='nav-2-a'>
            <Icon className='icon-1' icon="carbon:search" />
            <input type="text" placeholder='Search in Drive'/>
            <Icon  className='icon-2'icon="heroicons:adjustments-horizontal" />
            </div>
        </form>
      </div>

      <div className='nav-3'>
      <Icon  className='icon-1' icon="ep:setting" />
      <Icon className='icon-2' icon="bx:help-circle" />
      <img src={img2} alt=""/>
      </div>
     
    </section>    

    
    
    </>
  )
}
