import React from 'react';
import { Grid } from 'react-bootstrap';
import cloudinary from 'cloudinary';
import NavBar from './components/NavBar';
import Hi from './components/Hi';
import './App.css';

cloudinary.config({
  cloud_name: 'alex-gaw'
});

console.log(cloudinary.image('sample.jpg', { alt: 'Sample' }));

const App = () => {
  return (
    <Grid className="App" fluid>
      <NavBar />
      <Hi />
    </Grid>
  );
};

export default App;
