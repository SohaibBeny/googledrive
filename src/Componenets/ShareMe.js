import React from 'react'
import './ShareMe.css'
import { Icon } from '@iconify/react';
import img6 from '../Assets/images/home/pdf2.png';
import img7 from '../Assets/images/home/pdf3.png';
import img8 from '../Assets/images/home/ms-word.png';
// import img13 from '../Assets/images/home1/pict1.png';
import img14 from '../Assets/images/home1/pict2.png';
import img16 from '../Assets/images/home/doc2.png';
import img17 from '../Assets/images/home2/pict1.png';
import img18 from '../Assets/images/home2/pict2.png';
import img19 from '../Assets/images/home2/pict3.png';
import img20 from '../Assets/images/home2/pict4.png';
import img21 from '../Assets/images/home2/pict5.png';
import img9 from '../Assets/images/home/ms-word3.png'
import { useState, useEffect, useRef } from 'react';

export default function Home2() {
    const [open3, setOpen3] = useState(false);

    let menuRef3 = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef3.current.contains(e.target)) {
                setOpen3(false);
                console.log(menuRef3.current);
            }
        };

        document.addEventListener("mousedown", handler);


        return () => {
            document.removeEventListener("mousedown", handler);
        }

    });

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
                        
                        <div className='Dropdown3'>
                            <div className=' menu-container3' ref={menuRef3}>
                                <Icon className='icon-1 menu-trigger3' icon="bx:dots-vertical-rounded" onClick={() => { setOpen3(!open3) }} />
                            </div>
                            <div className={`Drop3 ${open3 ? 'active' : 'inactive'}`} >
                                <ul>
                                    <div className='list1'>
                                        <Icon className='icon-2'  icon="ph:folder-light" />
                                        <li>Show file location</li>
                                    </div>
                                    <div className='list1'>
                                        <Icon className='icon-2' icon="bi:folder-symlink" />
                                        <li>Move to</li>
                                    </div>
                                    <div className='list1'>
                                        <Icon className='icon-2'  icon="bi:star" />
                                        <li>Add to Starred</li>
                                    </div>
                                    <div className='list1'>
                                        <Icon className='icon-2' icon="mdi:folder-edit-outline" />
                                        <li>Rename</li>
                                    </div>
                                    <div className='list1'>
                                        <Icon className='icon-2'  icon="fluent:copy-16-regular" />
                                        <li>Make a Copy</li>
                                    </div>

                                </ul>
                            </div>
                        </div>

                        <div className='home-b-1'></div>
                        <Icon className='icon-1' icon="eva:list-fill" />
                        <Icon className='icon-1' icon="fluent:info-20-regular" />

                    </div>
                </div>




                <div className='home-2'>
                    <h6>Suggested</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img17} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Lecture #1</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img7' src={img18} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-3' icon="bxs:spreadsheet" />
                                <p>A to Z Shortcut keys</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img8' src={img19} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-3' icon="bxs:spreadsheet" />
                                <p>LoginPage</p>
                            </div>
                        </div>

                    </div>

                </div>



                <div className='home-2'>
                    <h6>Last Week</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img20} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Video</p>
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
                            <img className='home-img8' src={img21} alt="" />
                            <div className='home-2-b'>
                                <img src={img7} alt="" />
                                <p>Language##</p>
                            </div>
                        </div>

                    </div>

                </div>


                <div className='home-2'>
                    <h6>Older</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img6' src={img20} alt="" />
                            <div className='home-2-b'>

                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Lecture #1</p>
                            </div>
                        </div>

                        <div className='home-2-a'>
                            <img className='home-img8' src={img21} alt="" />
                            <div className='home-2-b'>
                                <img src={img7} alt="" />
                                <p>Language##</p>
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
                    <h6>Earlier this year</h6>

                    <div className='home-2-i'>

                        <div className='home-2-a'>
                            <img className='home-img3' src={img9} alt="" />
                            <div className='home-2-b'>
                                <img src={img8} alt="" />
                                <p>Result #3</p>
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
