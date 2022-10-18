import './App.css';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Switch>
          <Route exact path="/" component={<HomePage />}></Route>
          <Route exact path="/resume" component={<ResumePage />}></Route>
          <Route exact path="/projects" component={<ProjectsPage />}></Route>
      </Switch>

    </>
  );
}

export default App;
