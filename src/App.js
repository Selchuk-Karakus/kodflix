import React from 'react';
import fargoBanner from './fargo.jpg';
import theKnickBanner from './theKnick.jpg';
import vinlyBanner from './vinly.jpg';
import theSopranosBanner from './theSopranos.jpeg';
import bizimkilerBanner from './bizimkiler.jpg';
import howIMetYourMotherBanner from './howIMetYourMother.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className='banner-row'>
            <div className='banner-column'>
              <img src={fargoBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>Fargo</h1></div>
              </div>
            </div>
            <div className='banner-column'>
              <img src={theKnickBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>The Knick</h1></div>
              </div>
            </div>
            <div className='banner-column'>
              <img src={vinlyBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>Vinly</h1></div>
              </div>
            </div>
        </div>
        <div className='banner-row'>  
            <div className='banner-column'>
              <img src={theSopranosBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>The Sopranos</h1></div>
              </div>
            </div>
            <div className='banner-column'>
              <img src={bizimkilerBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>Bizimkiler</h1></div>
              </div>
            </div>
            <div className='banner-column'>
              <img src={howIMetYourMotherBanner} alt='Movie Banner' />
              <div class="overlay">
                <div class="title"><h1>How I Met Your Mother</h1></div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
