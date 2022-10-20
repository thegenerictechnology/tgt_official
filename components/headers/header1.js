import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import Styles from '../../styles/header.module.css'
import CloseButton from 'react-bootstrap/CloseButton';
import DownD from "./dropdown/down";
import MultiDrop from './dropdown/nestdropdown'





const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const confirm_modal = () => {
    console.log('modal is working ...')
    setShow(false)
  }

  const [isActive, setIsActive] = useState(false)
  const sidebar = () => {
    setIsActive(!isActive)
  }
  const [isActivefull, setIsActivefull] = useState(false)
  const sidebarfull = () => {
    setIsActivefull(!isActivefull)
  }
  const [isActiveSearch, setIsActiveSearch] = useState(false)
  const searchbar = () => {
    setIsActiveSearch(!isActiveSearch)
  }

  //top max dropdown

  const [isActiveTopbtn, setIsActiveTopbtn] = useState(false)
  const csbtn = () => {
    setIsActiveTopbtn(!isActiveTopbtn)
  }
  const [isActivec2, setIsActivec2] = useState(false)
  const c2 = () => {
    setIsActivec2(!isActivec2)
  }
  const [isActivec3, setIsActivec3] = useState(false)
  const c3 = () => {
    setIsActivec2(!isActivec2)
  }
  const [isActivec4, setIsActivec4] = useState(false)
  const c4 = () => {
    setIsActivec1(!isActivec1)
  }

  return (
    <>


      <style jsx>
        {

          `
    .dropdown a{
      margin-left:6px;
    }
    .navbar-toggler:focus{
      box-shadow:none;
    }
    .acbtn svg{
      height:22px;
      width:22px;
    }
    .acbtn{
      width:142px;
    }
    .sinput{
      border: none;
      width: 100%;
  }
  .sbtn{
    border: none;
    background-color: white;
    color: blue;
}
.sform{
  width: 415px;
  height:38px;
  display: flex;
  flex-direction: row-reverse;
  border:1px solid blue;
  border-radius:4px;
}
.loginbtndiv{
  width:48%;
}
.loginbtndiv a{
  float:right;
}
.mt-12{
  margin-top:14px;
}
.headc{
  width:100%;
  display: flex;
  justify-content: space-between;
}
::placeholder{
  color:#118aef;
}
.sidebarmin{
  position: fixed;
    background: white;
    top: 0;
    left: 0;
    right: 10%;
    height: 100vh;
}
.sidebarminfull{
  position:fixed;
    background: white;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
}
.sidebarmin ul, .sidebarminfull ul{
  list-style:none;
  line-height: 34px;
}
.sbarm{
  display: flex;
    justify-content: space-between;
    line-height: 44px;
    justify-content: center;
}
.backico{
  position:absolute;
  left:8px;
}
.xclose{
  position:absolute;
  right:8px;
}
.searchdiv{
  position:absolute;
  right:40px;
  left:0;
  top:0;
  height:74px;
  background:white;
}
.searchdiv input{
  border:1px solid #00000054 !important;
  width:96%;
  margin: 16px auto
}

@media(max-width:900px){
  .mnavitems , .loginbtndiv{
      display: none;
  }
  .sform{
    display:none !important;
  }
}
    
    `
        }
      </style>



      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${Styles.header}`}>
        <div className="container">
          <div className="headc">
            <button onClick={sidebar} className={Styles.minnavbtn} type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            {isActive && (
              <div className="sidebarmin"  >
                <div className="list-group-item sb-head-bg sbarm text-center list-group-item-dark"><span onClick={sidebar} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">Menu</span></div>
                <ul className={Styles.navlists}>
                  <li onClick={sidebarfull} className="items">All Courses</li>
                  <li className="items"><a href={"/about"}>Job Guarantee</a></li>
                  <li className="items"><a href={"/skills"}>Free Online Courses</a></li>
                  <li className="items"><a href={"/qualifications"} >Resources</a></li>
                  <li className="items"><a href={"/certifications"} >Corporate Training</a></li>
                  <li className="items"><a href={"/projects"}>Become an Instructor</a></li>
                  <li className="items"><a href={"/services"}>Hire From Us</a></li>
                  <li className="items"><a href={"contact"}>Digital transformation</a></li>
                </ul>
              </div>
            )}
            {isActivefull && (
              <div className="sidebarminfull"  >
                <div className="list-group-item sbarm sb-head-bg text-center list-group-item-dark"><span onClick={sidebarfull} className="backico"><i className="fa  fa-arrow-left"></i></span><span className="menuname text-center">All Courses</span> <div onClick={() => { sidebarfull(); sidebar(); }} className="xclose"><CloseButton /></div></div>
                <ul className={Styles.navlists}>
                  <li className="items"><a href="#" className="hh">Data Science {'&'} Business Analytics</a></li>
                  <li className="items"><a href="#" className="hh">AI {'&'} Machine Learning</a></li>
                  <li className="items"><a href="#" className="hh">Project Management</a></li>
                  <li className="items"><a href="#" className="hh">Cyber Security</a></li>
                  <li className="items"><a href="#" className="hh">Cloud Computing</a></li>
                  <li className="items"><a href="#" className="hh">DevOps</a></li>
                  <li className="items"><a href="#" className="hh">Business and Leadership</a></li>
                  <li className="items"><a href="#" className="hh">Quality Management</a></li>
                  <li className="items"><a href="#" className="hh">Software Development</a></li>
                  <li className="items"><a href="#" className="hh">Agile and Scrum</a></li>
                  <li className="items"><a href="#" className="hh">IT Service and Architecture</a></li>
                  <li className="items"><a href="#" className="hh">Digital Marketing</a></li>
                  <li className="items"><a href="#" className="hh">Big Data</a></li>

                </ul>
              </div>
            )}
            <a className="navbar-brand" href="#"><img className={Styles.logo} src="/tgt.png" alt="LOGO" /></a>

            <button className={Styles.minnavbtn} onClick={searchbar} type="submit"><i class="bi bi-search"></i></button>
            {isActiveSearch && (
              <form className="searchdiv"  >
                <input className="form-control ms-2 sinput " type="search" placeholder="What do you want to learn?" />
              </form>
            )}
            <div className={Styles.mnavitems}>
              <DownD />
            </div>
            <form className="d-flex btn mt-12 sform">
              <input className="form-control ms-2 sinput " type="search" placeholder="What do you want to learn?" aria-label="Search" />
              <button className="sbtn " type="submit"><i class="bi bi-search"></i></button>
            </form>
            <div className="loginbtndiv mt-12"><a className="btn btn-outline-secondary" href="#">Log in</a></div>

          </div>
        </div>
      </nav>
      <style jsx>
        {
          `
          .dm{
            list-style:none;
            padding-left:4px;
          }
          .items a {
            color:black;
          }
          .hbtn{
            width: 126px;
            margin: auto 22px;
        }
          .mdm{
            position:absolute;
            width:55vw;
            
          }
          .csdiv{
            position: absolute;
            width: 50vw;
            height: 20vh;
            top: 84px;
            background: white;
          }          
          `
        }


      </style>

    </>
  )
}

export default Nav
