import React from 'react';
import { Grid } from 'react-bootstrap';
import cloudinary from 'cloudinary';
import NavBar from './components/NavBar';
import Hi from './components/Hi';
import './App.css';

cloudinary.config({
  cloud_name: 'alex-gaw'
});

const App = () => {
  return (
    <Grid className="App" fluid>
      <NavBar />
      <Hi />
    </Grid>
  );
};

export default App;
