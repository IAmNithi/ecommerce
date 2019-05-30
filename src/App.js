import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddBanner from './Components/AddBanner';
import Slider from './Components/Slider';
function App() {
  return (
    <div className="App">
    <Header />
      <AddBanner />
      <Slider />
    </div>
  );
}

export default App;
