import React from 'react'
import '../Componenets/Storage.css'
import { Icon } from '@iconify/react';

export default function Storage() {
    return (
        <>
            <section className="Storage">
                <div className='home-1'>

                    <div className='home-1-a'>
                        <h6>Storage</h6>
                    </div>

                    <div className='home-1-b'>

                        <Icon className='icon-1' icon="bx:dots-vertical-rounded" />
                        <Icon className='icon-1' icon="fe:insert-link" />
                        <Icon className='icon-1' icon="prime:user-plus" />
                        <Icon className='icon-1' icon="ph:eye" />
                        <Icon className='icon-1' icon="octicon:trash-24" />
                        <Icon className='icon-1' icon="fluent:info-20-regular" />
                        <div className='home-b-1'></div>
                        <p className='home6'>BackUp</p>

                    </div>
                </div>


                <div className="Storage__used">
                    <span>Files using Drive storage</span>
                    <span>Storage used </span>
                </div>

                <div className="Storage__allfiles">
                    <span><Icon className='icon-st' icon="file-icons:microsoft-powerpoint" />Files using Drive storage</span>
                    <span>3.3 MB</span>
                </div>

                <div className="Storage__allfiles">
                    <span><Icon className='icon-st' icon="mdi:file-pdf-box" color="red" width="24" height="27" />ABcdere.pdf</span>
                    <span>3.6 MB</span>
                </div>

            </section>

        </>
    )
}
