import React from 'react';
import NavBar from '../components/NavBar';
import '../index.css';
import profPic from '../assets/prof-pic.png'
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.png'



const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="homepage">
        <div className="profile">
          <div className="profile-left">
            <h1 className="profile-title">
                  <span style={{fontWeight: 'bold'}}>William</span> Huynh
            </h1> 
            <img src={profPic} className="profile-image-small" alt="prof-pic"></img>
            <p>Hi! I'm Will :)</p>
            <br></br>
            <p>I'm a fourth-year student studying <span style={{fontWeight: 'bold'}}>Advanced Computer Science (Honours)</span> at the <span style={{fontWeight: 'bold'}}>University of New South Wales.</span></p>
            <p>I also casually teach at the <span style={{fontWeight: 'bold'}}>School of Computer Science and Engineering</span> as well!</p>
            <p>I enjoy tinkering around with old consoles, and spending way too much time playing story-oriented video games.</p>
            <p>But anyways, welcome to my website! ^^</p>
          </div>
          <div className="profile-right">
            <img src={profPic} className="profile-image-large" alt="prof-pic-large"></img>
          </div>
        </div>
        
        <div className="profile-icons">
          <a href="https://github.com/WilliamHuynh5" target="_blank" rel="noreferrer">
            <img className="icon-git" src={githubLogo} alt="icon-git"></img>
          </a>
          <a href="https://www.linkedin.com/in/williamhuynh227/" target="_blank" rel="noreferrer">
            <img className="icon-linked" src={linkedinLogo} alt="icon-linkedin"></img>
          </a>
          
        </div>
        
      </div>      
    </>
  )

}

export default HomePage;