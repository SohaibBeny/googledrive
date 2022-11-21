import React from 'react'
import '../Componenets/Computer.css'
import { Icon } from '@iconify/react';
import img7 from '../Assets/images/home/pdf3.png';
import img25 from '../Assets/images/home4i/pict1.png';
import img26 from '../Assets/images/home4i/pict2.png';
import img27 from '../Assets/images/home4i/pict3.png';
import img16 from '../Assets/images/home/doc2.png';





export default function Home1() {
    return (
        <>
            <section className='home-sec'>

                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>Starred</h6>
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



                <div className='home-2'>
                    <h6>Files</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img25} alt="" />
                            <div className='home-2-b'>
                                
                            <img src={img16} alt="" />
                                <p>Figma </p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img7' src={img26} alt="" />
                            <div className='home-2-b'>
                            <Icon className='icon-1' icon="bi:file-earmark-fill" />
                                <p>Typography</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img8' src={img27} alt="" />
                            <div className='home-2-b'>
                            <img src={img7} alt="" />
                                <p>Screenshots</p>
                            </div>
                        </div>

                    </div>

                </div>


                

            </section>
        </>
    )
}

