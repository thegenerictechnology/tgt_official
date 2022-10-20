import React from 'react';
import Fsection from './fsection';
import { useState } from "react";
import Desc from './disc'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    div,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

const minfooter = () => {


    const [isActiveff, setIsActiveff] = useState(false)

    const ff = () => {
        setIsActiveff(!isActiveff);
    }



    return (
        
        
        <div className='mfd bg-dark '>
            <style jsx>
                {
                    `
                    .spdown{
                        border:1px solid gray;
                        padding:8px;
                        border-radius:34px;
                    }
                    .ccri8{
                        background:black;

                    }
                    `
                }
            </style>
        <div className="ccri8 text-center text-white p-3"><span className="cctext">© 2022 - The Generic Technology</span> <span onClick={ff} className="spdown"> <i className="bi bi-arrow-down-short"></i></span></div>
        {isActiveff && (  <>
            <section  className='bg-dark'>

                <div className='d-flex flex-column'>
                    <div className=''>
                        <p className='text-center text-white'>Follow Us!</p>
                        <div className="text-center mic">
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
                    </div>
                    <div className=''>
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
                    </div>
                    <div className=''>
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
                    </div>

                    <div className=''>
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
                    </div>

                    <div className=''>
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
                    </div>

                    <div className=''>
                        <p className='text-start'>Learn On the Go!</p>

                        <ul className=' '>
                            <li className=" "><i className="fab fab-android" aria-hidden="true"></i>
                                Get the Android App</li>
                            <li className=" fapp text-start"><i className="bi mr8 bi-apple"></i>Get the iOS App</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className='bg-dark'>
                <Fsection />
            </section>
            </>
        )}

        </div>
        
    )
}

export default minfooter