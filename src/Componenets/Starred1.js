import React from 'react'
import './Starred1.css'
import { Icon } from '@iconify/react';
import img24  from '../Assets/images/home4/pict1.png'

export default function Home4() {
    return (
        <>
            <section className='home-sec'>

                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>My Drive</h6>
                        <Icon className='icon-1' icon="ci:caret-down" />
                    </div>

                    <div className='home-1-b'>

                        <Icon className='icon-1' icon="fe:insert-link" />
                        <Icon className='icon-1' icon="prime:user-plus" />
                        <Icon className='icon-1' icon="octicon:trash-24" />
                        <Icon className='icon-1' icon="bx:dots-vertical-rounded" />
                        <div className='home-b-1'></div>
                        <Icon className='icon-1' icon="eva:list-fill" />
                        <Icon className='icon-1' icon="fluent:info-20-regular" />

                    </div>
                </div>

                <div className='home-4a'>
                   

                    <div className='home-2-ii'>

                       <img src={img24} alt="" />
                        <h5>No Stared file</h5>
                        <p>Add starts to things that want to easily find later</p>  
                    </div>

                </div>             
            </section>
        </>
    )
}
