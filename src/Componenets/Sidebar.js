import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import img3 from '../Assets/images/sidebar/line.png';
import img29 from '../Assets/images/home/pic1.png'
import img30 from '../Assets/images/home/pic2.png'
import img31 from '../Assets/images/home/pic3.png'
import img32 from '../Assets/images/home/pic4.png'
import { useState, useEffect, useRef } from 'react';


export default function Sidebar() {

  const [opened, setOpened] = useState(false);

  let menuRef1 = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef1.current.contains(e.target)) {
        setOpened(false);
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
      <section className='bar-sec'>

        <div className='bar-1'>
          <h4>Brandora Agency</h4>

          <div className='bar-1-a menu-container1' ref={menuRef1}>
            <h5>New</h5>
            <Icon className='icon-1 menu-trigger1' icon="carbon:add" onClick={() => { setOpened(!opened) }} />
          </div>

          <div className={`Drope ${opened ? 'active' : 'inactive'}`} >
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

        </div>

        <div className='bar-2'>

          <Link to={""}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="clarity:tape-drive-line" />
              <h6>My Drive</h6>
            </div>
            <Icon className='icon-2' icon="bx:caret-right" />
          </div> </Link>

          <Link to={"Computer"}> <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="fluent:phone-laptop-20-regular" />
              <h6>Computers</h6>
            </div>
            <Icon className='icon-2' icon="bx:caret-right" />
          </div> </Link>

          <Link to={"ShareMe"}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="mdi:user-multiple-outline" />
              <h6>Share with me</h6>
            </div>
          </div></Link>

          <Link to={"Recent"}> <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="bytesize:clock" />
              <h6>Recent</h6>
            </div>
          </div></Link>

          <Link to={"Starred"}>  <div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="clarity:star-line" />
              <h6>Starred</h6>
            </div>
          </div></Link>

          <Link to={"Trash"}><div className='bar-2-a'>
            <div className='bar-i'>
              <Icon className='icon-1' icon="octicon:trash-24" />
              <h6>Trash</h6>
            </div>
          </div></Link>

        </div>

        <div className='bar-3'>

          <Link to={"Storage"}> <div className='bar-3-a'>
            <Icon className='icon-1' icon="bi:cloud" />
            <h5>Storage</h5>
          </div></Link>

          <div className='bar-3-b'>
            <img src={img3} alt="" />
            <p>1.97 GB of 15 GB used </p>
            <button>Buy Storage</button>
          </div>


        </div>





      </section>
    </>
  )
}
