import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';


const ResumePage = () => { 
  return (
    <>
      <NavBar></NavBar>
      <h1 className="tab-title">
        <span style={{fontWeight: 'bold'}}>my</span> resumè
      </h1> 
    </>
  )
}

export default ResumePage;
