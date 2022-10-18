import React from 'react';
import '../index.css';
import NavBar from '../components/NavBar';
import Carousel from 'react-bootstrap/Carousel';
import githubLogo from '../assets/github-logo.png'
import vgImg from '../assets/vg-img.png'
import ytImg from '../assets/yt-img.png'
import pwImg from '../assets/pw-img.png'
import vgCliImg from '../assets/vg-cli-img.png'


const ProjectsPage = () => { 
  return (
    <>
      <NavBar></NavBar>
      <h1 className="tab-title">
        <span style={{fontWeight: 'bold'}}>my</span> projects
      </h1>     
      <div style={{marginBottom: '3rem'}}></div>
      <Carousel variant="dark">
        <Carousel.Item>
          <div class="d-flex justify-content-center" >
            <img
              className="carousel-image"
              src={vgImg}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>VG Price Tracker</h3>
            <p>A webapp for those interested in tracking the price of video games, both physical and digital.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="carousel-image"
              src={ytImg}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>YouTube Downloader</h3>
            <p>A webapp for those interested in downloading videos from YouTube. Supports MP4 and MP3 formats using the best available quality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="carousel-image"
              src={pwImg}
              alt="Second slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Personal Website</h3>
            <p>
              The website you are looking at right now!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <div class="d-flex justify-content-center">
            <img
              className="carousel-image"
              src={vgCliImg}
              alt="Third slide"
            />
          </div>
          <div style={{marginBottom:'3px'}}></div>
          <Carousel.Caption>
            <h3>Price Alert CLI</h3>
            <p>
            A command line application for scraping price of video games. Features SMS alerts and PDF catalogue generation.
            </p>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </>
  )
}

export default ProjectsPage;