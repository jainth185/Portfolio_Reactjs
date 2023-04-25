import React from 'react'
import SummerIntern from "../assets/summerIntern.jpg"
import throwballNational from "../assets/NationalThowball.jpg"
import designTHinking from "../assets/DesignThinking.png";
import Cyber from "../assets/Cybersecurity.png";
import poc from "../assets/proofOfConcept.png"
import "./CertificationStyles.css"

const Certification = () => {
  return (
    <>
    <div className="container">
    <h1 className="heading">Certification</h1>
        
            
        <div className='SummerInter'>
            <img src={designTHinking} alt="Certificate" />
            <h4> Design Thinking</h4>
        </div>
        <div className='SummerInter'>
            <img src={Cyber} alt="Certificate" />
            <h4> Cyber Security</h4>
        </div>
        <div className='SummerInter'>
            <img src={poc} alt="Certificate" />
            <h4> 1st Place in Proof Of Concept</h4>
        </div>
        <div className='SummerInter'>
            <img src={SummerIntern} alt="Certificate" />
            <h4> Summer Intern</h4>
        </div>
        <div className='SummerInter'>
                <img src={throwballNational} alt="Certificate" />
                <h4> Throwball Nationals</h4>
        </div>
    </div>
    
    </>
  )
}

export default Certification