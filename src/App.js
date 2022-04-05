import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './drawer';

function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

export default App;
