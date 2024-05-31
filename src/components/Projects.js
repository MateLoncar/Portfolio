import React from 'react';
import '../styles/Projects.css';
import { useLanguage } from './LanguageContext';
import TimerGamePreview from '../assets/img/timer_game.png';
import WorldTravelMapPreview from '../assets/img/world_travel_map.png';
import TikTakToePreview from '../assets/img/tik_tak_toe.png'

const Projects = () => {
  const { translate } = useLanguage();

  return (
    <section id="projects" className="section-content">
    <h2>{translate('myProjects')}</h2>
    <div className="project-list">
      <div className="project-card">
        <h3>{'Timer Game'}</h3>
        <a href="https://timer-game-woad.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={TimerGamePreview} alt="Timer Game Preview" className="project-preview" />
        </a>
        <p>{translate('projectTimerGameDescription')}</p>
        <br></br>
        <a href="https://github.com/MateLoncar/Timer-game" target="_blank" rel="noopener noreferrer">
          {translate('CODE')}
        </a>
      </div>
      <div className="project-card">
        <h3>{'World Travel Map'}</h3>
        <a href="https://capstone-project-alpha-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={WorldTravelMapPreview} alt="World Travel Map Preview" className="project-preview" />
        </a>
        <p>{translate('projectWorldTravelMapDescription')}</p>
        <br></br>
        <a href="https://github.com/MateLoncar/capstone-project" target="_blank" rel="noopener noreferrer">
          {translate('CODE')}
        </a>
      </div>
      <div className="project-card">
        <h3>{'Tik Tak Toe'}</h3>
        <a href="https://tik-tak-toe-react.vercel.app/" target="_blank" rel="noopener noreferrer">
          <img src={TikTakToePreview} alt="Tik Tak Toe Preview" className="project-preview" />
        </a>
        <p>{translate('projectTikTakToeDescription')}</p>
        <br></br>
        <a href="https://github.com/MateLoncar/Tik-tak-toe-react" target="_blank" rel="noopener noreferrer">
          {translate('CODE')}
        </a>
      </div>
    </div>
  </section>
  
  );
};

export default Projects;
