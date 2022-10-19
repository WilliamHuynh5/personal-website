import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import resume from '../assets/resume.png';


const ResumePage = () => { 
  return (
    <>
      <NavBar></NavBar>
      <h1 className="tab-title">
        <span style={{fontWeight: 'bold'}}>my</span> resumè
      </h1> 
      <div style={{textAlign: 'center'}}>
        <img className="resume-image" src={resume}></img>
      </div>
      
    </>
  )
}

export default ResumePage;
