import './Resume.css';
import React from 'react';

import Header from './components/header/header';

class Resume extends React.Component {
  render() {

    return (
      <div className='resume-container'>
        <Header />
      </div>
    );
  }
}

export default Resume;
