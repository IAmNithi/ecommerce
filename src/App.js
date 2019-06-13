import React from 'react';
import './App.css';
import Header from './Components/Header';
import AddBanner from './Components/AddBanner';
import Slider from './Components/Slider';
import TopDeal from './Components/TopDeal';
import FeatureDeal from './Components/FeatureDeal';
import Trending from './Components/Trending';
import Brands from './Components/Brands';
function App() {
  return (
    <div className="App">
    <Header />
      <AddBanner />
      <Slider />
      <TopDeal />
      <FeatureDeal />
      <Trending />
      <Brands />
    </div>
  );
}

export default App;
