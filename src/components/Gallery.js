import React from 'react';
import TvShowList from './TvShowList';
import fargoBanner from './gallery/images/fargo.jpg';
import theKnickBanner from './gallery/images/theKnick.jpg';
import vinlyBanner from './gallery/images/vinly.jpg';
import theSopranosBanner from './gallery/images/theSopranos.jpg';
import bizimkilerBanner from './gallery/images/bizimkiler.jpg';
import howIMetYourMotherBanner from './gallery/images/howIMetYourMother.jpg';

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