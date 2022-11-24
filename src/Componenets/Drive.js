import React from 'react'
import './Drive.css'
import { Icon } from '@iconify/react';
import img4 from '../Assets/images/home/doc1.png';
import img5 from '../Assets/images/home/doc2.png';
import img6 from '../Assets/images/home/pdf2.png';
import img7 from '../Assets/images/home/pdf3.png';
import img8 from '../Assets/images/home/ms-word.png';
import img9 from '../Assets/images/home/ms-word3.png';
import img29 from '../Assets/images/home/pic1.png'
import img30 from '../Assets/images/home/pic2.png'
import img31 from '../Assets/images/home/pic3.png'
import img32 from '../Assets/images/home/pic4.png'
import { useState, useEffect, useRef } from 'react';



export default function Home() {
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
    const [open1, setOpen1] = useState(false);

    let menuRef1 = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef1.current.contains(e.target)) {
                setOpen1(false);
                console.log(menuRef1.current);
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

                    <div className='menu-container1' ref={menuRef1}>
                        <div className='home-1-a menu-trigger1' onClick={() => { setOpen1(!open1) }}>
                            <h6>My Drive</h6>
                            <Icon className='icon-1' icon="ci:caret-down" />
                        </div>
                    </div>

                    <div className={`Drop1 ${open1 ? 'active' : 'inactive'}`} >
                        <ul>
                            <div className='list1'>
                                <Icon className='icon-2' icon="material-symbols:create-new-folder-outline" />
                                <li>New Folder</li>
                            </div>
                            <div className='list1'>
                                <Icon className='icon-2' icon="ic:baseline-upload-file" />
                                <li>File Upload</li>
                            </div>
                            <div className='list1'>
                                <Icon className='icon-2' icon="material-symbols:drive-folder-upload-outline" />
                                <li>Folder Upload</li>
                            </div>

                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img29} alt="" />
                                    </div>
                                    <li>Docs</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img30} alt="" />
                                    </div>
                                    <li>Sheets</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img31} alt="" />
                                    </div>
                                    <li>Slides</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='Docs'>

                                <div className='list1'>
                                    <div className='list-1-a'>
                                        <img src={img32} alt="" />
                                    </div>
                                    <li>Forms</li>
                                </div>
                                <div className='list2'>
                                    <div className='list-2-a'></div>
                                    <Icon className='icon-2' icon="grommet-icons:form-next" />
                                </div>

                            </div>
                            <div className='list1'>
                                <li>More</li>
                            </div>

                        </ul>
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
                            <Icon className='home-img' icon="bi:folder2-open" />
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