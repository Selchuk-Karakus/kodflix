import React from 'react';
import fargoBanner from './fargo.jpg';
import theKnickBanner from './theKnick.jpg';
import vinlyBanner from './vinly.jpg';
import theSopranosBanner from './theSopranos.jpg';
import bizimkilerBanner from './bizimkiler.jpg';
import howIMetYourMotherBanner from './howIMetYourMother.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex-container'>
        <div>
          <img src={fargoBanner} alt='Movie Banner' />
        </div>
        <div>
          <img src={theKnickBanner} alt='Movie Banner' />
        </div>
        <div>
          <img src={vinlyBanner} alt='Movie Banner' />
        </div>
        <div>
          <img src={theSopranosBanner} alt='Movie Banner' />
        </div>
        <div>
          <img src={bizimkilerBanner} alt='Movie Banner' />
        </div>
        <div>
          <img src={howIMetYourMotherBanner} alt='Movie Banner' />
        </div>
      </div>
    </div>
  );
}

export default App;
