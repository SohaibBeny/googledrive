import React from 'react'
import '../Componenets/Trash.css'
import { Icon } from '@iconify/react';
import img7 from '../Assets/images/home/pdf3.png';
import img21 from '../Assets/images/home2/pict5.png';
import img25 from '../Assets/images/home4i/pict1.png';
// import img26 from '../Assets/images/home4i/pict2.png';
// import img27 from '../Assets/images/home4i/pict3.png';
import img28 from '../Assets/images/home5/pict1.png'
import img16 from '../Assets/images/home/doc2.png';





export default function Home1() {
    return (
        <>
            <section className='home-sec'>

                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>Trash for My Drive</h6>
                    </div>

                    <div className='home-1-b'>
                        <Icon className='icon-1' icon="material-symbols:settings-backup-restore-rounded" />
                        <Icon className='icon-1' icon="octicon:trash-24" />
                        <div className='home-b-1'></div>
                        <Icon className='icon-1' icon="eva:list-fill" />
                    </div>
                </div>

                <div className='home-5a'>
                  <p>Items in trash are deleted forever after 30 days</p>
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
                            <img className='home-img8' src={img21} alt="" />
                            <div className='home-2-b'>
                                <img src={img7} alt="" />
                                <p>Languages##</p>
                            </div>
                        </div>
                        <div className='home-2-a'>
                            <img className='home-img6' src={img28} alt="" />
                            <div className='home-2-b'>
                                <Icon className='icon-1' icon="material-symbols:movie-outline" />
                                <p>Video</p>
                            </div>
                        </div>

                    </div>

                </div>




            </section>
        </>
    )
}