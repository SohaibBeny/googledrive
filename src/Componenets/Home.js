import React from 'react'
import './Home.css'
import { Icon } from '@iconify/react';
import img4 from '../Assets/images/home/doc1.png';
import img5 from '../Assets/images/home/doc2.png';
import img6 from '../Assets/images/home/pdf2.png';
import img7 from '../Assets/images/home/pdf3.png';
import img8 from '../Assets/images/home/ms-word.png';
import img9 from '../Assets/images/home/ms-word3.png';



export default function home() {
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

                <div className='home-2'>
                    <h6>Suggested</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img1' src={img4} alt="" />
                            <div className='home-2-b'>
                                <img src={img5} alt="" />
                                <p>Research #1</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img2' src={img6} alt="" />
                            <div className='home-2-b'>
                                <img src={img7} alt="" />
                                <p>Theory #2</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img3' src={img9} alt="" />
                            <div className='home-2-b'>
                                <img src={img8} alt="" />
                                <p>Result #3</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='home-3'>
                    <h6>Folder</h6>
                    <div className='home-3-i'>

                        <div className='home-3-a'>
                        <Icon className='home-img'  icon="bi:folder2-open" />
                        <p>Slides</p>
                        </div>
                        <div className='home-3-a'>
                        <Icon className='home-img' icon="bi:folder2-open" />
                        <p>Classroom</p>
                        </div>
                        <div className='home-3-a'>
                        <Icon className='home-img' icon="bi:folder2-open" />
                        <p>Home</p>
                        </div>

                    </div>
                </div>

            </section>

        </>
    )
}
