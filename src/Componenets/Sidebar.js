import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import img3 from '../Assets/images/sidebar/line.png';
export default function Sidebar() {
  return (
    <>
      <section className='bar-sec'>

        <div className='bar-1'>
          <h4>Brandora Agency</h4>

          <div className='bar-1-a'>
            <h5>New</h5>
            <Icon className='icon-1' icon="carbon:add" />
          </div>

        </div>

        <div className='bar-2'>

          <Link to={"home"}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="clarity:tape-drive-line" />
              <h6>My Drive</h6>
            </div>
            <Icon className='icon-2' icon="bx:caret-right" />
          </div> </Link>

          <Link to={"home1"}> <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="fluent:phone-laptop-20-regular" />
              <h6>Computers</h6>
            </div>
            <Icon className='icon-2' icon="bx:caret-right" />
          </div> </Link>

          <Link to={"home2"}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="mdi:user-multiple-outline" />
              <h6>Share with me</h6>
            </div>
          </div></Link>

          <Link to={"home3"}> <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="bytesize:clock" />
              <h6>Recent</h6>
            </div>
          </div></Link>

          <Link to={"home4i"}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="clarity:star-line" />
              <h6>Starred</h6>
            </div>
          </div></Link>

          <Link to={"home5"}><div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="octicon:trash-24" />
              <h6>Trash</h6>
            </div>
          </div></Link>

        </div>

        <div className='bar-3'>

          <Link to={"Storage"}> <div className='bar-3-a'>
            <Icon className='icon-1' icon="bi:cloud" />
            <h5>Storage</h5>
          </div></Link>

          <div className='bar-3-b'>
            <img src={img3} alt="" />
            <p>1.97 GB of 15 GB used </p>
            <button>Buy Storage</button>
          </div>


        </div>





      </section>
    </>
  )
}
