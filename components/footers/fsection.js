import React from 'react'

const fsection = () => {
    return (<>

        <div class="brand-courses">
            <div className='text-start fclink'>
                <p>Trending Post Graduate Programs</p>
                <a href="" title="Project Management Certification Course">Project Management Certification Course</a> |
                <a href="" title="Cyber Security Certification Course">Cyber Security Certification Course</a> |
                <a href="" title="Data Science Certification Program">Data Science Certification Program</a> |
                <a href="" title="Data Analytics Certification Program">Data Analytics Certification Program</a> |
                <a href="" title="Business Analysis Certification Course">Business Analysis Certification Course</a> |
                <a href="" title="Digital Marketing Certification Program">Digital Marketing Certification Program</a> |
                <a href="" title="Lean Six Sigma Certification Course">Lean Six Sigma Certification Course</a> |
                <a href="" title="Cloud Computing Certification Course">Cloud Computing Certification Course</a> |
                <a href="" title="Data Engineer Certification Program">Data Engineer Certification Program</a> |
                <a href="" title="AI and Machine Learning Course">AI and Machine Learning Course</a> |
                <a href="" title="Full Stack Web Development Course">Full Stack Web Development Course</a> |
                <a href="" title="Digital Marketing Bootcamp">Digital Marketing Bootcamp</a></div>
            <div className='text-start fclink'>
                <p>Trending Master Programs</p>
                <a href="" title="PMP Plus Certification Training Course">PMP Plus Certification Training Course</a> |
                <a href="" title="Big Data Engineering Courses">Big Data Engineering Courses</a> |
                <a href="" title="Data Science Course">Data Science Course</a> |
                <a href="" title="Data Analyst Course">Data Analyst Course</a> |
                <a href="" title="Artificial Intelligence Course">Artificial Intelligence Course</a> |
                <a href="" title="Cloud Architect Certification Training Course">Cloud Architect Certification Training Course</a> |
                <a href="" title="DevOps Engineer Certification Training Course">DevOps Engineer Certification Training Course</a> |
                <a href="" title="Digital Marketing Course">Digital Marketing Course</a> |
                <a href="" title="Cyber Security Expert Course">Cyber Security Expert Course</a> |
                <a href="" title="MEAN Stack Developer Course">MEAN Stack Developer Course</a>
            </div>
            <div className='text-start fclink'><p>Trending Courses</p>
                <a href="" title="PMP Certification Training Course">PMP Certification Training Course</a> |
                <a href="" title="Big Data Hadoop Certification Training Course">Big Data Hadoop Certification Training Course</a> |
                <a href="" title="Data Science with Python Course">Data Science with Python Course</a> |
                <a href="" title="AWS Solutions Architect Certification Training Course">AWS Solutions Architect Certification Training Course</a> |
                <a href="" title="CISSP Certification Training">CISSP Certification Training</a> |
                <a href="" title="Certified ScrumMaster (CSM) Certification Training">Certified ScrumMaster (CSM) Certification Training</a> |
                <a href="" title="ITIL 4 Foundation Certification Training Course">ITIL 4 Foundation Certification Training Course</a> |
                <a href="" title="Java Certification Course">Java Certification Course</a> |
                <a href="" title="Python Certification Training Course">Python Certification Training Course</a>
            </div>
            <div className='text-start fclink'>
                <p>Trending Resources</p>
                <a href="" title="Python Tutorial">Python Tutorial</a> |
                <a href="" title="JavaScript Tutorial">JavaScript Tutorial</a> |
                <a href="" title="Java Tutorial">Java Tutorial</a> |
                <a href="" title="Angular Tutorial">Angular Tutorial</a> |
                <a href="" title="Node.js Tutorial">Node.js Tutorial</a> |
                <a href="" title="Docker Tutorial">Docker Tutorial</a> |
                <a href="" title="Git Tutorial">Git Tutorial</a> |
                <a href="" title="Kubernetes Tutorial">Kubernetes Tutorial</a> |
                <a href="" title="Power BI Tutorial">Power BI Tutorial</a> |
                <a href="" title="CSS Tutorial">CSS Tutorial</a>
            </div>
        </div>
        <div className="text-center ppmain">
            <ul className='ppdiv text-center'>
                <li><a href="" title="Terms of Use">Terms of Use</a></li>
                <li><a href="" rel="nofollow" title="Privacy Policy">Privacy Policy</a></li>
                <li><a href="" rel="nofollow" title="Refund Policy">Refund Policy</a></li>
                <li><a href="" rel="nofollow" title="Reschedule Policy">Reschedule Policy</a></li>
            </ul>
            <div><p class="copy_rights cgray">© 2022 - The Generic Technology. All Rights Reserved. The certification names are the trademarks of their respective owners.</p>
            </div>
        </div>

        <style jsx>
            {
                `
                .ppdiv{
                    display:flex;
                }
                .ppdiv li a{
                    color: rgba(255,255,255,255);
                }
                .ppmain{
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:center;
                    margin-top:22px ;
                }
                .ppmain p{
                    color:rgba(255,255,255,.5)!important;
                    position:relative !important ;
                    top:-24px !important;
                    font-size:12px !important;
                }
                .ppdiv li{
                    margin:22px;
                }
                .cgray{
                    color:rgba(255,255,255,.5);

                }
                @media(max-width:600px){
                    .ppdiv{
                        list-style:none;
                        flex-wrap:wrap;
                        text-align:center;
                        padding-left:0px;
                        justify-content: center;
                    }
                }

                `
            }
        </style>
    </>

    )
}

export default fsection