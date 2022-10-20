import React from 'react'

const disc = () => {
    return (
        <>
        <div class="disc-section mb" id="disclaimers">
            <div class="container disclam-container">
                <ul className='discul text-start'>
                    <p className='head'>Disclaimer</p>
                    <li>PMP, PMI, PMBOK, CAPM, PgMP, PfMP, ACP, PBA, RMP, SP, and OPM3 are registered marks of the Project Management Institute, Inc.</li>
                    <li>ITIL® is a registered trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                    <li>IT Infrastructure Library is a [registered] trade mark of AXELOS Limited used, under permission of AXELOS Limited. All rights reserved.</li>
                    <li>The Swirl logo™ is a trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                    <li>PRINCE2® is a [registered] trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                    <li>MSP® is a [registered] trade mark of AXELOS Limited, used under permission of AXELOS Limited. All rights reserved.</li>
                    <li>Certified ScrumMaster® (CSM) and Certified Scrum Trainer® (CST) are registered trademarks of SCRUM ALLIANCE®</li>
                    <li>Professional Scrum Master is a registered trademark of Scrum.org</li>
                    <li>The APMG-International Finance for Non-Financial Managers and Swirl Device logo is a trade mark of The APM Group Limited.</li>
                    <li>The Open Group®, TOGAF® are trademarks of The Open Group.</li>
                    <li>IIBA®, the IIBA® logo, BABOK® and Business Analysis Body of Knowledge® are registered trademarks owned by International Institute of Business Analysis. </li>
                    <li>CBAP® is a registered certification mark owned by International Institute of Business Analysis. Certified Business Analysis Professional, EEP and the EEP logo are trademarks owned by International Institute of Business Analysis.</li><li>COBIT® is a trademark of ISACA® registered in the United States and other countries.</li>
                    <li>CISA® is a Registered Trade Mark of the Information Systems Audit and Control Association (ISACA) and the IT Governance Institute.</li>
                    <li>CISSP® is a registered mark of The International Information Systems Security Certification Consortium ((ISC)2). </li>
                    <li>CISCO®, CCNA®, and CCNP® are trademarks of Cisco and registered trademarks in the United States and certain other countries.</li>
                    <li>Simplilearn and its affiliates, predecessors, successors and assigns are in no way associated, sponsored or promoted by SAP SE and neither do they provide any SAP based online or real-time courses or trainings</li>
                    <li>The KPMG name and logo are trademarks used under license by the independent member firms of the KPMG global organization. KPMG International’s Trademarks are the sole property of KPMG International and their use here does not imply auditing by or endorsement of KPMG International or any of its member firms.</li>
                    <li className='mb'>*According to Simplilearn survey conducted and subject to <a href="" target="_blank">terms &amp; conditions </a> with Ernst &amp; Young LLP (EY) as Process Advisors </li>
                </ul>
            </div>
        </div>
        <style jsx>

            {
                `
                .mb{
                    margin-bottom:54px;
                }
                .discul li{
                    font-size:12px;
                    color:rgba(255,255,255,.5);
                }
                @media(max-width:992px){
                    .discul li{
                        font-size:10px;
                    }
                    .discul{
                        padding-left:0px;
                    }
                }
                `
            }
        </style>

        </>
    )
}

export default disc