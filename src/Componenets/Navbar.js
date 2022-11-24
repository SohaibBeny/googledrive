import React from 'react'
import { Icon } from '@iconify/react';
import img1 from '../Assets/images/Navbar/img-nav-1.png'
import img2 from '../Assets/images/Navbar/maaz.png'
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';


export default function Navbar() {
  const [open4, setOpen4] = useState(false);

  let menuRef4 = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef4.current.contains(e.target)) {
        setOpen4(false);
        console.log(menuRef4.current);
      }
    };

    document.addEventListener("mousedown", handler);


    return () => {
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <>
      <section className='nav-sec'>

        <div className='nav-1'>

          <Icon className='icon-1' icon="bx:menu-alt-left" />

          <div className='nav-1-a'>
            <img src={img1} alt="" />
            <h3>Drive</h3>
          </div>

        </div>

        <div className='nav-2'>
          <form action="">
            <div className='nav-2-a'>
              <Icon className='icon-1' icon="carbon:search" />
              <input type="text" placeholder='Search in Drive' />
              <Icon className='icon-2' icon="heroicons:adjustments-horizontal" />
            </div>
          </form>
        </div>

        <div className='nav-3'>
          <Icon className='icon-1' icon="ep:setting" />
          <Icon className='icon-2' icon="bx:help-circle" />

          
            <div className='profile menu-container ' ref={menuRef4}>
              <img className='menu-trigger4' src={img2} alt="" onClick={() => { setOpen4(!open4) }} />
            </div>
            <div className={`Drop4 ${open4 ? 'active' : 'inactive'}`} >

              <div className='profile-info'>

                <div className='profile-img'>
                  <img src={img2} alt="" />
                  <Icon className='cam' icon="ph:camera" />
                </div>

                <div className='profile-mail'>
                  <h6>Muhammad maaz</h6>
                  <p>maazafridi9765@gamil.com</p>
                </div>

                <div className='profile-btn'>
                  <button>Manage your account</button>
                </div>
                <div className='profile-btn-2'>
                  <button>
                  <Icon className='logout' icon="majesticons:logout-line" />
                  <p>Log out</p>
                  </button>
                </div>

              </div>
            </div>
         

        </div>

      </section>



    </>
  )
}
