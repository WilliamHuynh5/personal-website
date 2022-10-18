import './App.css';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/AboutPage';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/resume" element={<ResumePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>

    </>
  );
}

export default App;
