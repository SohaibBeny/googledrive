import React from 'react'
import '../Componenets/Computer.css'
import { Icon } from '@iconify/react';
import img13 from '../Assets/images/home1/pict1.png';
import img14 from '../Assets/images/home1/pict2.png';
import img15 from '../Assets/images/home1/pict2.png';
import img16 from '../Assets/images/home/doc2.png';




export default function Home1() {
    return (
        <>
            <section className='home-sec'>

                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>Computers</h6>
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


                <div className='home-3'>
                    <h6>Folder</h6>
                    <div className='home-3-i'>

                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Figma Tools</p>
                        </div>
                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Solution</p>
                        </div>
                        <div className='home-3-a'>
                            <Icon className='home-img' icon="bi:folder2-open" />
                            <p>Course</p>
                        </div>

                    </div>
                </div>

                <div className='home-2'>
                    <h6>Suggested</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img13} alt="" />
                            <div className='home-2-b'>
                                
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Numbering System</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img7' src={img14} alt="" />
                            <div className='home-2-b'>
                                <img src={img16} alt="" />
                                <p>cs101MCQs</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img8' src={img15} alt="" />
                            <div className='home-2-b'>
                            <Icon className='icon-1' icon="bi:file-earmark-fill" />
                                <p>Typography</p>
                            </div>
                        </div>

                    </div>

                </div>


                

            </section>
        </>
    )
}
