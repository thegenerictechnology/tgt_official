import React from 'react';
import Fsection from './fsection';
import Desc from './disc'
import Minfooter from './minfooter';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const footer = () => {
  return (
    <>
      <Minfooter/>
      <MDBFooter className='text-center' color='white' bgColor='dark'>
        <div className='p-4 container'>
        
          <section className='maxfd'>
            

            <MDBRow>
              <MDBCol className='mb-2 fc fc1 mb-md-0'>
                <p className='text-start'>Follow Us!</p>
                <div className="idiv">
                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='facebook-f' />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='twitter' />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                  </MDBBtn>

                  <MDBBtn outline color="light" floating className='m1 alink' href='#!' role='button'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
                </div>
              </MDBCol>
              <MDBCol className='mb-4  fc mb-md-0'>
                <p className='text-start'>Company</p>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='fl'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      In the media
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Alumni speak
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Grievance redressal
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Contact us
                    </a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol className='mb-4 fc mb-md-0'>
                <p className='text-start'>Work with us</p>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='fl'>
                      Become an instructor
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Blog as guest
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol className='mb-4 fc mb-md-0'>
                <p className='text-start'>Discover</p>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='fl'>
                      Skillup
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Skillup Sitemap
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Resources
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      RSS feed
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Simplilearn Coupons and Discount Offers
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      City Sitemap
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol className='mb-4 fc mb-md-0'>
                <p className='text-start'>For Businesses</p>

                <ul className='list-unstyled mb-0'>
                  <li>
                    <a href='#!' className='fl'>
                      Corporate training
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href='#!' className='fl'>
                      Digital Transformation
                    </a>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol className='mb-4 fc mb-md-0'>
                <p className='text-start'>Learn On the Go!</p>

                <ul className=' list-group list-group-flush list-unstyled mb-0'>
                  <li className=" fapp text-start"><i className="fab fab-android" aria-hidden="true"></i>
                  <i className="bi mr8 bi-android"></i>Get the Android App</li>
                  <li className=" fapp text-start"><i className="bi mr8 bi-apple"></i>Get the iOS App</li>
                </ul>
              </MDBCol>
            </MDBRow>
          </section>
          <hr className='fhr maxfd' />
          <section className='maxfd'>
            <Fsection />
          </section>
          <hr />
          <section>

            <Desc />
          </section>
        </div>
        <div className="bfootdiv" >
          <div className='text-center pd-0 container bfoot ' >
            <div className="rcall p-2 "><a href=""> <i className="bi bi-phone"></i> Request a Callback</a></div>
            <div className="callus p-2 "><a href=""><i className="bi bi-telephone"></i> Call Us On +91 9999999999</a></div>
            <div className="livechat"><a href=""><i className="bi bi-chat"></i> Live Chat</a></div>

          </div>
          <div className='text-center bfootmin ' >
            <div className="rcall w-100 p-2 "><a href=""> <i className="bi bi-telephone"></i>  Call us</a></div>
            <div className="livechat w-100 "><a href=""><i className="bi bi-chat"></i> Live Chat</a></div>
            <div className="callus  w-100 p-2 "><a href=""><i className="bi bi-card-checklist"></i> Query?</a></div>

          </div>
        </div>
      </MDBFooter>
      <style jsx>
        {
          `
          .bfootmin{
            display:none;
          }

          .livechat{
            background:#04c3c3;
            padding:8px;
          }
          .bfootdiv{
            position:fixed;
            bottom:0;
            left:0;
            width:100%;
            background:black;

          }
          .bfoot{
            display : flex;
            justify-content:space-between;
          }
          @media(max-width:992px){
            .bfootmin{
              display:flex;
              background:#29bff6;
              color:white;
              
              
            }
            .bfootmin a{
              color:white;
            }
            .livechat{
              background:#0499cf;
              color:white;

            }
            .bfoot{
              display:none;
            }
          }
          .bfoot a{
            color:white;
          }
          .p{
            font-size:16px;
            text-align: start !important;
          }
          ul a{
            font-size:14px;
          }
          .fc{
            width:184px !important;
          }
          .fc1 .m-1{
            margin: 8px !important;
          }
          Get the iOS App    .alink{
            padding:22px;
          }
          .fl{
            color:rgba(255,255,255,.5);
          }
          ul li{
            text-align:start;
          }
          .fhr{
            margin-top:64px;
          }
          section{
            margin-top:34px;
          }
          `
        }
      </style>


    </>
  )
}

export default footer