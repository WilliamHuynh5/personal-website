import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';
import NavBar from '../components/NavBar';
import vgImg from '../assets/vg-img.png'
import ytImg from '../assets/yt-img.png'
import pwImg from '../assets/pw-img.png'
import vgCliImg from '../assets/vg-cli-img.png'
import sparkImg from '../assets/spark-img.png'
import itenImg from '../assets/iten-img.png'

const projects = [
  {
    imgSrc: sparkImg,
    title: 'Spark',
    description: 'A Society Management Application to help organisations manage user created clubs, events, posts, and member permissions.',
    link: 'https://github.com/WilliamHuynh5/spark'
  },
  {
    imgSrc: vgImg,
    title: 'VG Price Tracker',
    description: 'A webapp for those interested in tracking the price of video games, both physical and digital.',
    link: 'https://github.com/WilliamHuynh5/vg-price-tracker'
  },
  {
    imgSrc: itenImg,
    title: 'Itinerary Cooker',
    description: 'Itinerary Cooker is a web-app solution designed to assist users in creating optimal travel itineraries based on their chosen destinations.',
    link: 'https://github.com/WilliamHuynh5/csesoc-2023-hackathon'
  },
  {
    imgSrc: ytImg,
    title: 'YouTube Downloader',
    description: 'A webapp for those interested in downloading videos from YouTube. Supports MP4 and MP3 formats using the best available quality.',
    link: 'https://github.com/WilliamHuynh5/youtube-downloader'
  },
  {
    imgSrc: pwImg,
    title: 'Personal Website',
    description: 'The website you are looking at right now!',
    link: 'https://github.com/WilliamHuynh5/personal-website'
  },
  {
    imgSrc: vgCliImg,
    title: 'Price Alert CLI',
    description: 'A command line application for scraping price of video games. Features SMS alerts and PDF catalogue generation.',
    link: 'https://github.com/WilliamHuynh5/vg-price-alert-cli'
  }
];

const ProjectsPage = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const handleHover = (index) => setHoverIndex(index);
  const handleLeave = () => setHoverIndex(null);
  const openLink = (link) => window.open(link, '_blank');

  return (
    <>
      <NavBar />
      <h1 className="tab-title">
        <span style={{ fontWeight: 'bold' }}>my</span> projects
      </h1>
      <div style={{ marginBottom: '3rem' }} />

      <Carousel variant="dark" interval={5000} ride="carousel">
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-center">
              <img
                className="carousel-image"
                style={{ cursor: 'pointer' }}
                src={project.imgSrc}
                alt="project-banner"
                onClick={() => openLink(project.link)}
              />
            </div>

            <Carousel.Caption>
              <h3 style={{ cursor: 'pointer' }} onClick={() => openLink(project.link)}>
                {project.title}
              </h3>
              <p>{project.description}</p>

              <button
                style={getButtonStyle(hoverIndex === index)}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleLeave}
                onClick={() => openLink(project.link)}
              >
                View on GitHub &nbsp;
                <FaGithub size={18} />
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

const getButtonStyle = (isHovered) => ({
  cursor: 'pointer',
  backgroundColor: isHovered ? '#555' : '#333',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  marginBottom: '1.5rem',
});

export default ProjectsPage;