import './Resume.css';
import React from 'react';

import Header from './components/header/header';
import WorkExperience from './components/work_experience/work_experience';

class Resume extends React.Component {
  render() {

    return (
      <div className='resume-container'>
        <Header />
        <WorkExperience />
      </div>
    );
  }
}

export default Resume;
