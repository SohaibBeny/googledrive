import React from 'react';
import '../BackUp/BackUp.css';
import img33 from '../../Assets/images/Backup/pic1.png'

export default function BackUp() {
  return (
    <>
    <section className="Storage">
                <div className='home-1'>
                        <h6>Storage</h6>
                        <h6>Back</h6>   
                </div>


                <div className="Last-backup">
                    <p>Names</p>
                    <p>Last backup</p>
                </div>

                <div className="Backup-files">
                  <div>
                    <img src={img33} alt=""/> 
                    <h6>Realme pro backup</h6>
                  </div>
                    <h6>Nov 17, 2022</h6>
                </div>
                <div className="Backup-files">
                  <div>
                    <img src={img33} alt=""/> 
                    <h6>Vivo 1938 backUp</h6>
                  </div>
                    <h6>Jan 29, 2022</h6>
                </div>

                

            </section>
    </>
  )
}
