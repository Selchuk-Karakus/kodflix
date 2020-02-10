import fargoBanner from './images/fargo.jpg';
import theKnickBanner from './images/theKnick.jpg';
import vinlyBanner from './images/vinly.jpg';
import theSopranosBanner from './images/theSopranos.jpg';
import bizimkilerBanner from './images/bizimkiler.jpg';
import howIMetYourMotherBanner from './images/howIMetYourMother.jpg';

export default function GetGallery() {
    return [
        { 
            id: 'fargo', 
            name: 'Fargo', 
            banner: fargoBanner, 
            detail: 'Lester Nygaard, an insurance salesman, lives a life of monotony with his uninteresting wife. He meets Lorne Malvo who convinces him to tag along in search of a killer.'
        },
        { 
            id: 'the-knick',
            name: 'The Knick', 
            banner: theKnickBanner,
            detail: 'Medical drama set in the 1900s charts the exploits of the staff and patients at a New York hospital, where they try to maintain their reputation for quality care while struggling to keep the doors open' 
        },
        { 
            id: 'vinly', 
            name: 'Vinly', 
            banner: vinlyBanner,
            detail: 'Vinyl is an American period drama television series created by Mick Jagger, Martin Scorsese, Rich Cohen and Terence Winter. The series stars Bobby Cannavale as Richie Finestra, a record executive in the 1970s. It premiered on HBO on February 14, 2016, and concluded on April 17, 2016.'
         },
        { 
            id: 'the-sopranos', 
            name: 'The Sopranos', 
            banner: theSopranosBanner,
            detail: 'Hailed as one of television"s essential dramas, The Sopranos follows James Gandolfini as Tony Soprano: husband, father and mob boss whose professional and private strains land him in the office of his therapist. Created by David Chase.' 
        },
        { 
            id: 'bizimkiler', 
            name: 'Bizimkiler', 
            banner: bizimkilerBanner ,
            detail: 'Bizimkiler was a Turkish drama, represented the lives of the people shared the same neighborhood. The show is development of the movie Kapıcılar Kralı which Umur Bugay who is creator of the TV series, is the screenwriter. Between 1989-2002 it is one of the longest-running series in Turkish television drama history.'
        },
        { 
            id: 'how-i-met-your-mother', 
            name: 'How I Met Your Mother', 
            banner: howIMetYourMotherBanner,
            detail: 'How I Met Your Mother (often abbreviated as HIMYM) is an American sitcom created by Craig Thomas and Carter Bays for CBS. The series, which ran from 2005 to 2014, follows the main character, Ted Mosby, and his group of friends in New York City"s Manhattan.', 
        }
      ];
  }