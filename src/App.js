import React from 'react';

import './App.css';
import Nav from './navigator';
import Photo from './photo';
import Text from './text';
import Project from './projects';

function App() {
  return (
    <div className="App">
      <Nav />
      <Photo />
      <Text />
      <Project />
    </div>
  );
}

export default App;
