import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1>Positioning with Flexbox</h1>
      <div style={styles.boxContainer}>
        <div style={styles.box1}>Box1</div>
        <div style={styles.box2}>Box2</div>
      </div>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: 'grey'
  },
  boxContainer: {
    backgroundColor: 'white'
  },
  box1: {
    width: '40%',
    height: 300,
    backgroundColor: 'teal',
    position: 'absolute',
    zIndex: 'auto' 
  },
  box2: {
    width: '20%',
    backgroundColor: 'rgba(255,0,255,0.25)',
    position: 'absolute', 
    zIndex: 1,  
    marginTop: 60,
    marginLeft: 60
  }
}