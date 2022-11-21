import React from 'react'
import './ShareMe.css'
import { Icon } from '@iconify/react';

import img7 from '../Assets/images/home/pdf3.png';
import img8 from '../Assets/images/home/ms-word.png';
import img9 from '../Assets/images/home/ms-word3.png'
import img14 from '../Assets/images/home1/pict2.png';
import img16 from '../Assets/images/home/doc2.png';
import img17 from '../Assets/images/home2/pict1.png';
import img20 from '../Assets/images/home2/pict4.png';
import img21 from '../Assets/images/home2/pict5.png';
import img22 from '../Assets/images/Home3/pict1.png';
import img23 from '../Assets/images/Home3/pict2.png';



export default function Home2() {
    return (
        <>
            <section className='home-sec'>

                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>Share with me</h6>
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
                    <h6>Earlier this months</h6>

                    <div className='home-2-i'>

                    <div className='home-2-a'>
                            <img className='home-img8' src={img21} alt="" />
                            <div className='home-2-b'>
                            <img src={img7} alt="" />
                                <p>Language##</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img7' src={img22} alt="" />
                            <div className='home-2-b'>
                            <img src={img16} alt="" />
                                <p>Sentences</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img8' src={img23} alt="" />
                            <div className='home-2-b'>
                            <img src={img7} alt="" />
                                <p>Concept Tools</p>
                            </div>
                        </div>

                    </div>

                </div>



                <div className='home-2'>
                    <h6>Earlier this year</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img20} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Video</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img6' src={img17} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Lecture #1</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img7' src={img14} alt="" />
                            <div className='home-2-b'>
                                <img src={img16} alt="" />
                                <p>cs101MCQs</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='home-2'>
                    <h6>Older</h6>

                    <div className='home-2-i'>

                    <div className='home-2-a'>
                    <img className='home-img3' src={img9} alt="" />
                            <div className='home-2-b'>
                                <img src={img8} alt="" />
                                <p>Result #3</p>
                            </div>
                        </div>

                        <div className='home-2-a'>
                            <img className='home-img7' src={img22} alt="" />
                            <div className='home-2-b'>
                                <img src={img16} alt="" />
                                <p>Sentences</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img8' src={img17} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Lecture #1</p>
                            </div>
                        </div>
                    </div>

                </div>




            </section>
        </>
    )
}
