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
          <TvShowList id='fargo' name='Fargo' banner={fargoBanner}/>
          <TvShowList id='the-knick' name='The Knick' banner={theKnickBanner}/>
          <TvShowList id='vinly' name='Vinly' banner={vinlyBanner}/>
        </div>
        <div className='banner-row'>
          <TvShowList id='the-sopranos' name='The Sopranos' banner={theSopranosBanner}/>
          <TvShowList id='bizimkiler' name='Bizimkiler' banner={bizimkilerBanner}/>
          <TvShowList id='how-i-met-your-mother' name='How I Met Your Mother' banner={howIMetYourMotherBanner}/>   
        </div>
      </div>
    );
  }