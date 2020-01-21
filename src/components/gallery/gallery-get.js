import fargoBanner from './images/fargo.jpg';
import theKnickBanner from './images/theKnick.jpg';
import vinlyBanner from './images/vinly.jpg';
import theSopranosBanner from './images/theSopranos.jpg';
import bizimkilerBanner from './images/bizimkiler.jpg';
import howIMetYourMotherBanner from './images/howIMetYourMother.jpg';

export default function GetGallery() {
    return [
        { id: 'fargo', name: 'Fargo', banner: fargoBanner },
        { id: 'the-knick', name: 'The Knick', banner: theKnickBanner },
        { id: 'vinly', name: 'Vinly', banner: vinlyBanner },
        { id: 'the-sopranos', name: 'The Sopranos', banner: theSopranosBanner },
        { id: 'bizimkiler', name: 'Bizimkiler', banner: bizimkilerBanner },
        { id: 'how-i-met-your-mother', name: 'How I Met Your Mother', banner: howIMetYourMotherBanner }
      ];
  }