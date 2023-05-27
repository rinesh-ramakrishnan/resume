import './Resume.css';
import React from 'react';

import Header from './components/header/header';
import WorkExperience from './components/work_experience/work_experience';
import Skills from './components/skills/skills';
import Certifications from './components/certifications/certifications';
import Awards from './components/awards/awards';
import Education from './components/education/education';

class Resume extends React.Component {
  render() {

    return (
      <div className='resume-container'>
        <Header />
        <Skills />
        <WorkExperience />
        <Certifications />
        <Awards />
        <Education />
      </div>
    );
  }
}

export default Resume;
