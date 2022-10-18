import React from 'react';
import NavBar from '../components/NavBar';
import '../index.css';
import cat from '../assets/cat.png'


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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
          <div className="profile-right">
            <img src={cat} className="profile-image"></img>
          </div>
        </div>
      </div>
      
      
      
    </>
  )

}

export default HomePage;