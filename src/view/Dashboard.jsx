import React from 'react'
import Navbar from '../Componenets/Navbar'
import Sidebar from '../Componenets/Sidebar'

import Navbar2 from '../Componenets/Navbar2'

import {Outlet} from 'react-router-dom'

export default function Dashboard() {
  return (
    <div>

      <Navbar/>
      <div className='home'>
      <Sidebar/>
      <Outlet/>
      <Navbar2/>
      </div>


    </div>
  )
}
