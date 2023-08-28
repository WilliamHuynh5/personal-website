import './App.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>

    </>
  );
}

export default App;
