import React from 'react';
import NavBar from '../components/NavBar';
import '../index.css';
import cat from '../assets/cat.png'
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
            <img src={cat} className="profile-image-small"></img>
            <p>Hi! I'm Will :)</p>
            <br></br>
            <p>I'm a third-year student studying <span style={{fontWeight: 'bold'}}>Computer Science</span> at the <span style={{fontWeight: 'bold'}}>University of New South Wales.</span></p>
            <p>I also casually teach at the <span style={{fontWeight: 'bold'}}>School of Computer Science and Engineering</span> as well!</p>
            <p>I enjoy tinkering around with old consoles, and spending way too much time playing story-oriented video games.</p>
            <p>But anyways, welcome to my website! ^^</p>
          </div>
          <div className="profile-right">
            <img src={cat} className="profile-image-large"></img>
          </div>
        </div>
        
        <div className="profile-icons">
          <a href="https://github.com/WilliamHuynh5" target="_blank">
            <img className="icon-git" src={githubLogo}></img>
          </a>
          <a href="https://www.linkedin.com/in/william-huynh-582b62214/" target="_blank">
            <img className="icon-linked" src={linkedinLogo}></img>
          </a>
          
        </div>
        
      </div>      
    </>
  )

}

export default HomePage;