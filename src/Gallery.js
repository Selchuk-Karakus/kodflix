import React from 'react';
import TvShowList from './TvShowList';
import fargoBanner from './fargo.jpg';
import theKnickBanner from './theKnick.jpg';
import vinlyBanner from './vinly.jpg';
import theSopranosBanner from './theSopranos.jpeg';
import bizimkilerBanner from './bizimkiler.jpg';
import howIMetYourMotherBanner from './howIMetYourMother.jpg';

export default function Gallery() {
    return (
      <div>
        <div className='banner-row'>
            <TvShowList name='Fargo' banner={fargoBanner}/>
            <TvShowList name='The Knick' banner={theKnickBanner}/>
            <TvShowList name='Vinly' banner={vinlyBanner}/>
          </div>
          <div className='banner-row'>
            <TvShowList name='The Sopranos' banner={theSopranosBanner}/>
            <TvShowList name='Bizimkiler' banner={bizimkilerBanner}/>
            <TvShowList name='How I Met Your Mother' banner={howIMetYourMotherBanner}/>   
          </div>
      </div>
    );
  }